import { Image } from 'react-native'

// Folhas/flor decorativas (os mesmos SVGs já usados nas telas de login)
const ARQUIVOS = {
  folhaLeft: require('../assets/folhaLeft.svg'),
  folhaLeft2: require('../assets/folhaLeft2.svg'),
  folhaLeft3: require('../assets/folhaLeft3.svg'),
  folhaRight: require('../assets/folhaRight.svg'),
  folhaRight2: require('../assets/folhaRight2.svg'),
  flor: require('../assets/flor.svg'),
}

export default function Decoracao({ nome, style }) {
  return <Image source={ARQUIVOS[nome]} style={[{ position: 'absolute' }, style]} resizeMode="contain" pointerEvents="none" />
}
