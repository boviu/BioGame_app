import { View, Image, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const FUNDOS = {
  pessego: require('../assets/img/fundo-pessego.png'),
  menta: require('../assets/img/fundo-menta.png'),
  verde: require('../assets/img/fundo-verde.png'),
}

// Moldura padrão das telas: fundo em degradê + área segura do topo.
// As medidas do protótipo partem de uma barra de status de 44 dp,
// por isso os "top" das telas são escritos como (y do protótipo - 44) e o conteúdo
// começa logo abaixo da área segura do topo.
//
// Importante: o degradê é uma <Image> normal (e não um <ImageBackground>). No React Native Web o
// ImageBackground coloca a imagem com zIndex -1, que some atrás do fundo do navegador/tema e deixava
// a tela "transparente" (a árvore da Home aparecia atrás de todas as outras telas).
export default function Tela({ fundo = 'pessego', children, style }) {
  const insets = useSafeAreaInsets()
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF', overflow: 'hidden' }}>
      <Image source={FUNDOS[fundo]} resizeMode="stretch" style={StyleSheet.absoluteFill} pointerEvents="none" />
      <View style={[{ flex: 1, marginTop: insets.top }, style]}>{children}</View>
    </View>
  )
}
