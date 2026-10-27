import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { fontes, useU } from '../theme'

// Cartão branco com ícone + título (+ subtítulo), usado em Conta, Configurações etc.
export default function CartaoItem({ icone, titulo, subtitulo, onPress, largura = 304, textoX = 75, style, pesoTitulo = 'bold' }) {
  const u = useU()
  return (
    <TouchableOpacity
      activeOpacity={onPress ? 0.8 : 1}
      onPress={onPress}
      style={[styles.cartao, { width: u(largura), height: u(69), borderRadius: u(15) }, style]}
    >
      <View style={{ position: 'absolute', left: u(23), width: u(24), alignItems: 'center' }}>{icone}</View>
      <View style={{ marginLeft: u(textoX) }}>
        <Text style={{ fontFamily: fontes[pesoTitulo], fontSize: u(17), color: '#333' }}>{titulo}</Text>
        {subtitulo ? (
          <Text style={{ fontFamily: fontes.bold, fontSize: u(subtituloTam(pesoTitulo)), color: '#333' }}>{subtitulo}</Text>
        ) : null}
      </View>
    </TouchableOpacity>
  )
}
const subtituloTam = () => 13.5

const styles = StyleSheet.create({
  cartao: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.22,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
})
