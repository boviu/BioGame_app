import { View, Text, Image } from 'react-native'
import { useCallback } from 'react'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'
import Tela from '../components/Tela'
import Botao from '../components/Botao'
import { cores, fontes, useU } from '../theme'
import { useProgresso } from '../Progresso'

const SLOTS = [[54, 73], [48, 119], [38, 200], [18, 265], [170, 164], [194, 277], [110, 20]]
const ESC = 0.93

export default function Amigos() {
  const u = useU()
  const navigation = useNavigation()
  const { amigos, recarregarAmigos } = useProgresso()
  useFocusEffect(useCallback(() => { recarregarAmigos() }, []))
  const destaque = amigos.find((a) => a.favorito) || amigos[0]
  const outros = amigos.filter((a) => a !== destaque).slice(0, SLOTS.length)

  return (
    <Tela fundo="verde">
      <View style={{ position: 'absolute', top: u(46), width: '100%', alignItems: 'center' }}>
        <View>
          <Text style={{ fontFamily: fontes.bold, fontSize: u(34), color: cores.marrom }}>Amigos</Text>
          <Ionicons name="leaf" size={u(24)} color="#2F6B3A" style={{ position: 'absolute', right: -u(10), top: -u(8), transform: [{ rotate: '-30deg' }] }} />
          <Ionicons name="leaf" size={u(20)} color="#4E7A3E" style={{ position: 'absolute', left: -u(14), top: u(34), transform: [{ rotate: '-120deg' }] }} />
        </View>
      </View>

      <View
        style={{
          position: 'absolute',
          left: u(21),
          top: u(434),
          width: u(351),
          height: u(160),
          borderRadius: u(50),
          backgroundColor: cores.solo,
          borderWidth: 2,
          borderColor: '#8E6B55',
          shadowColor: '#000',
          shadowOpacity: 0.25,
          shadowRadius: 4,
          shadowOffset: { width: 0, height: 3 },
          elevation: 4,
        }}
      />
      <Image
        source={require('../assets/img/arvore-amigos.png')}
        style={{ position: 'absolute', left: u(92), top: u(114.5), width: u(225 * ESC), height: u(436 * ESC) }}
      />

      {outros.map((a, i) => (
        <View
          key={a.id}
          style={{
            position: 'absolute',
            left: u(92 + SLOTS[i][0] * ESC - 21),
            top: u(114.5 + SLOTS[i][1] * ESC - 21),
            width: u(42),
            alignItems: 'center',
          }}
        >
          <Image source={require('../assets/img/avatar-verde.png')} style={{ width: u(38), height: u(38) }} />
        </View>
      ))}

      {amigos.length === 0 && (
        <Text
          style={{
            position: 'absolute', top: u(525), left: u(40), width: u(313), textAlign: 'center',
            fontFamily: fontes.bold, fontSize: u(15), color: cores.marrom,
          }}
        >
          Você ainda não tem amigos. Adicione pelo e-mail!
        </Text>
      )}

      {destaque && (
        <View
          style={{
            position: 'absolute',
            left: u(207),
            top: u(163),
            width: u(162),
            height: u(62),
            borderRadius: u(31),
            backgroundColor: '#EFEDBF',
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: u(12),
          }}
        >
          <Image source={require('../assets/img/avatar-verde.png')} style={{ width: u(43), height: u(43) }} />
          <View style={{ marginLeft: u(14) }}>
            <Text style={{ fontFamily: fontes.bold, fontSize: u(17), color: '#333' }}>{destaque.nome}</Text>
            <Text style={{ fontFamily: fontes.media, fontSize: u(16), color: '#666' }}>Nível {destaque.nivel}</Text>
          </View>
        </View>
      )}

      <Botao
        titulo="Gerenciar amizades"
        altura={50}
        onPress={() => navigation.navigate('AmigosLista')}
        style={{ position: 'absolute', top: u(623), left: u(57) }}
      />
    </Tela>
  )
}
