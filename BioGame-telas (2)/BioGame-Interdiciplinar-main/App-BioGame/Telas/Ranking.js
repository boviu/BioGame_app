import { useCallback } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Tela from '../components/Tela'
import Botao from '../components/Botao'
import Decoracao from '../components/Decoracao'
import { cores, fontes, useU } from '../theme'
import { dadosUsuario } from '../services/usuario'
import { useProgresso } from '../Progresso'

const MEDALHAS = {
  1: require('../assets/img/medalha-ouro.png'),
  2: require('../assets/img/medalha-prata.png'),
  3: require('../assets/img/medalha-bronze.png'),
}
const COR_POS = { 1: '#E8A83B', 2: '#9DB0D6', 3: '#D9803F', 4: '#555555' }

export default function Ranking() {
  const u = useU()
  const navigation = useNavigation()
  const { nome } = dadosUsuario()
  const { amigos, nivelPerfil, pontos, recarregarAmigos } = useProgresso()
  useFocusEffect(useCallback(() => { recarregarAmigos() }, []))

  const jogadores = [
    { id: 'eu', nome, nivel: nivelPerfil, pontos, eu: true },
    ...amigos.map((a) => ({ id: a.id, nome: a.nome, nivel: a.nivel, pontos: a.pontos })),
  ]
    .sort((x, y) => y.nivel - x.nivel || y.pontos - x.pontos || (x.eu ? -1 : 1))
    .map((j, i) => ({ ...j, pos: i + 1 }))

  return (
    <Tela fundo="verde">
      <Decoracao nome="folhaRight" style={{ left: -u(14), top: u(68), width: u(58), height: u(48) }} />
      <Decoracao nome="folhaRight2" style={{ left: -u(14), top: u(222), width: u(52), height: u(40) }} />
      <Decoracao nome="folhaLeft" style={{ left: -u(16), top: u(437), width: u(58), height: u(44) }} />

      <View
        style={{
          position: 'absolute',
          left: u(14),
          top: u(38),
          width: u(365),
          height: u(606),
          backgroundColor: '#fff',
          borderTopLeftRadius: u(40),
          borderTopRightRadius: u(70),
          borderBottomLeftRadius: u(80),
          borderBottomRightRadius: u(35),
          shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowRadius: 4,
          shadowOffset: { width: 0, height: 2 },
          elevation: 4,
        }}
      >
        <View style={{ position: 'absolute', top: u(52), left: u(100), flexDirection: 'row', alignItems: 'center' }}>
          <MaterialCommunityIcons name="sprout" size={u(38)} color="#2E8F2E" />
          <Text style={{ fontFamily: fontes.bold, fontSize: u(32), color: cores.marrom, marginLeft: u(10) }}>Ranking</Text>
        </View>
        <ScrollView style={{ position: 'absolute', top: u(125), left: 0, right: 0, height: u(364) }} showsVerticalScrollIndicator={false}>
        {jogadores.map((j) => (
          <View
            key={j.id}
            style={{
              width: '100%',
              height: u(91),
              backgroundColor: j.eu ? '#CDFEB7' : 'transparent',
              justifyContent: 'center',
            }}
          >
            <Text style={{ position: 'absolute', left: u(13), fontFamily: fontes.media, fontSize: u(17), color: COR_POS[Math.min(j.pos, 4)] }}>
              {j.pos}
            </Text>
            <View style={{ position: 'absolute', left: u(34), width: u(26), alignItems: 'center', top: 0, bottom: 0, justifyContent: 'center' }}>
                            {MEDALHAS[j.pos] && <Image source={MEDALHAS[j.pos]} style={{ width: u(20), height: u(28) }} />}
            </View>
            <Image
              source={j.eu ? require('../assets/img/avatar-brainroot.png') : require('../assets/img/avatar-verde-claro.png')}
              style={{ position: 'absolute', left: u(57), width: u(j.eu ? 67 : 57), height: u(j.eu ? 67 : 57), marginLeft: j.eu ? -u(4) : 0 }}
            />
            <Text style={{ position: 'absolute', left: u(j.eu ? 132 : 129), fontFamily: fontes.bold, fontSize: u(17), color: '#333' }}>
              {j.nome}
            </Text>
            <Text
              style={{
                position: 'absolute',
                right: u(27),
                fontFamily: j.eu ? fontes.bold : fontes.media,
                fontSize: u(17),
                color: j.eu ? '#3C9A2A' : '#6B6B6B',
              }}
            >
              Nível {j.nivel}
            </Text>
          </View>
        ))}
        </ScrollView>

        <Botao
          titulo="Continuar"
          largura={277}
          altura={52}
          onPress={() => navigation.navigate('Inicio')}
          style={{ position: 'absolute', top: u(500), left: u(49) }}
        />
      </View>

      <Decoracao nome="folhaLeft" style={{ left: u(38), top: u(129), width: u(62), height: u(48) }} />
      <Decoracao nome="folhaRight" style={{ left: u(335), top: u(60), width: u(60), height: u(46) }} />
      <Decoracao nome="folhaLeft3" style={{ left: u(314), top: u(135), width: u(48), height: u(56) }} />
      <Decoracao nome="folhaLeft2" style={{ left: u(334), top: u(599), width: u(62), height: u(34) }} />
      <Decoracao nome="flor" style={{ left: -u(10), top: u(580), width: u(58), height: u(56) }} />
    </Tela>
  )
}
