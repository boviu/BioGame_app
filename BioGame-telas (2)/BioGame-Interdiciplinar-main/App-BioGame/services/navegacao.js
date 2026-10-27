import { CommonActions } from '@react-navigation/native'

// No React Navigation 7, navigate('Tela') para uma tela que já está na pilha EMPILHA outra cópia em vez de voltar.
// Por isso, para sair do jogo usamos reset: a pilha fica só com [Home] ou [Home, Niveis].

export function irParaHome(navigation, aba = 'Inicio') {
  navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: 'Home', params: { screen: aba } }] }))
}

export function irParaNiveis(navigation) {
  navigation.dispatch(CommonActions.reset({ index: 1, routes: [{ name: 'Home' }, { name: 'Niveis' }] }))
}
