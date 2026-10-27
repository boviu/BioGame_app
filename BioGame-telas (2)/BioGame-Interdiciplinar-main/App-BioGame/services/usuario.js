import { auth } from '../configuration/firebase'

// Nome e e-mail exibidos nas telas. Se não houver usuário logado (ou nome definido),
// usa os valores do protótipo.
export function dadosUsuario() {
  const u = auth?.currentUser
  return {
    nome: u?.displayName || (u?.email ? u.email.split('@')[0] : 'Brainroot'),
    email: u?.email || 'Biogame@gmail.com',
  }
}
