import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { cores, fontes, useU } from '../theme'

// Botão verde com "degrau" escuro embaixo, como no protótipo.
export default function Botao({ titulo, onPress, style, children, largura = 277, altura = 48 }) {
  const u = useU()
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={[
        styles.botao,
        { width: u(largura), height: u(altura), borderRadius: u(13), borderBottomWidth: u(4) },
        style,
      ]}
    >
      {children}
      <Text style={[styles.texto, { fontSize: u(17) }]}>{titulo}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: cores.verde,
    borderBottomColor: cores.verdeSombra,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  texto: { fontFamily: fontes.bold, color: '#fff' },
})
