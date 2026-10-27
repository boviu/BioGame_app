import { collection, deleteDoc, doc, getDoc, getDocs, limit, query, setDoc, serverTimestamp, where } from 'firebase/firestore'
import { db } from '../configuration/firebase'

// Amigos = outras contas do BioGame. Como funciona no Firestore:
//
//   perfis/{uid}                      perfil público de cada jogador (nome, e-mail em minúsculas, nível, pontos)
//   usuarios/{uid}/amigos/{amigoUid}  lista de amigos de cada jogador ({ uid, favorito, adicionadoEm })
//
// O perfil é publicado/atualizado em Progresso.js sempre que o jogador entra ou muda de fase.
// Para adicionar um amigo, o jogador digita o e-mail da conta dele; a busca é feita em perfis.emailLower.
//
// Regras do Firestore (console do Firebase > Firestore > Regras) — veja também o README:
//   match /perfis/{uid} {
//     allow read: if request.auth != null;
//     allow write: if request.auth != null && request.auth.uid == uid;
//   }
//   match /usuarios/{uid} {
//     allow read, write: if request.auth != null && request.auth.uid == uid;
//     match /amigos/{amigoUid} {
//       allow read, write: if request.auth != null && request.auth.uid == uid;
//     }
//   }

export async function publicarPerfil(uid, { nome, email, nivel, pontos, concluido }) {
  await setDoc(
    doc(db, 'perfis', uid),
    { nome, emailLower: (email || '').trim().toLowerCase(), nivel, pontos, concluido, atualizadoEm: serverTimestamp() },
    { merge: true }
  )
}

export async function buscarPerfilPorEmail(email) {
  const q = query(collection(db, 'perfis'), where('emailLower', '==', email.trim().toLowerCase()), limit(1))
  const snap = await getDocs(q)
  if (snap.empty) return null
  const d = snap.docs[0]
  return { uid: d.id, ...d.data() }
}

// Lê a lista de amigos do jogador e junta com o perfil atual de cada um.
export async function listarAmigos(uid) {
  const snap = await getDocs(collection(db, 'usuarios', uid, 'amigos'))
  const itens = await Promise.all(
    snap.docs.map(async (d) => {
      const perfil = await getDoc(doc(db, 'perfis', d.id))
      const p = perfil.exists() ? perfil.data() : {}
      return {
        id: d.id,
        nome: p.nome || 'Jogador',
        nivel: p.nivel || 1,
        pontos: p.pontos || 0,
        favorito: !!d.data().favorito,
      }
    })
  )
  return itens
}

export async function adicionarAmigoNuvem(uid, amigoUid) {
  await setDoc(doc(db, 'usuarios', uid, 'amigos', amigoUid), { uid: amigoUid, favorito: false, adicionadoEm: serverTimestamp() })
}

export async function definirFavoritoNuvem(uid, amigoUid, favorito) {
  await setDoc(doc(db, 'usuarios', uid, 'amigos', amigoUid), { favorito }, { merge: true })
}

export async function removerAmigoNuvem(uid, amigoUid) {
  await deleteDoc(doc(db, 'usuarios', uid, 'amigos', amigoUid))
}
