import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../configuration/firebase'

// O progresso do jogador fica no Firestore, no documento "usuarios/{uid}".
// Regras do Firestore (console do Firebase > Firestore > Regras):
//   match /usuarios/{uid} { allow read, write: if request.auth != null && request.auth.uid == uid; }

export async function carregarProgresso(uid) {
  const snap = await getDoc(doc(db, 'usuarios', uid))
  if (!snap.exists()) return null
  const d = snap.data()
  return {
    fasesConcluidas: Array.isArray(d.fasesConcluidas) ? d.fasesConcluidas : [],
    concluido: !!d.concluido,
  }
}

export async function salvarProgresso(uid, { fasesConcluidas, concluido }) {
  await setDoc(
    doc(db, 'usuarios', uid),
    { fasesConcluidas, concluido, atualizadoEm: serverTimestamp() },
    { merge: true }
  )
}
