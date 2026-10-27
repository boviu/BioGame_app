import { View, Text, TouchableOpacity } from 'react-native'
import { fontes, useU } from '../theme'

// Faixa colorida com "degrau" (usada na Home e em Suas árvores)
export default function Faixa({ rotulo, titulo, cor, sombra, bloqueado, onPress, style, children, largura = 277, tituloTam = 19 }) {
  const u = useU()
  return (
    <TouchableOpacity
      activeOpacity={onPress ? 0.85 : 1}
      onPress={onPress}
      style={[
        {
          width: u(largura),
          height: u(73),
          backgroundColor: cor,
          borderRadius: u(14),
          borderBottomWidth: u(4),
          borderBottomColor: sombra,
          justifyContent: 'center',
          paddingHorizontal: u(14),
        },
        style,
      ]}
    >
      <Text
        style={{
          fontFamily: fontes.bold,
          fontSize: u(11.5),
          color: bloqueado ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.92)',
          textTransform: 'uppercase',
          letterSpacing: 0.3,
        }}
      >
        {rotulo}
      </Text>
      <Text
        style={{
          fontFamily: fontes.bold,
          fontSize: u(tituloTam),
          color: bloqueado ? 'rgba(255,255,255,0.55)' : '#fff',
          marginTop: u(1),
        }}
      >
        {titulo}
      </Text>
      {children}
    </TouchableOpacity>
  )
}
