import { useState } from 'react'
import { View, Image, TouchableOpacity, Modal, Pressable, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { fontes, useU } from '../theme'

// Ícones vindos dos SVGs do protótipo. w/h são o tamanho original do SVG; ESCALA ajusta ao protótipo.
const ESCALA = 0.9
const ABAS = [
  { rota: 'Inicio', img: require('../assets/img/icone-casa.png'), w: 38, h: 38 },
  { rota: 'Arvores', img: require('../assets/img/icone-arvores.png'), w: 50, h: 50 },
  { rota: 'Ranking', img: require('../assets/img/icone-trofeu.png'), w: 56, h: 58 },
  { rota: 'AmigosTab', img: require('../assets/img/icone-planta.png'), w: 46, h: 46 },
]
const MAIS = { rota: 'MaisTab', img: require('../assets/img/icone-mais.png'), w: 38, h: 38 }
// centro de cada ícone dentro da barra (medidas do protótipo)
const CENTROS = [63, 129, 194, 256, 311]

// Conta, Configurações e Privacidade ficam dentro da aba "..." (MaisTab), assim a barra continua visível.
const MENU = [
  { rotulo: 'Conta', rota: 'Conta' },
  { rotulo: 'Configurações', rota: 'Configuracoes' },
  { rotulo: 'Privacidade', rota: 'Privacidade' },
]

export default function BarraAbas({ state, navigation }) {
  const u = useU()
  const insets = useSafeAreaInsets()
  const [menu, setMenu] = useState(false)
  const rotaAtual = state.routes[state.index].name
  const base = Math.max(u(26), insets.bottom)

  function Icone({ img, w, h, centro, ativo, onPress }) {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={{
          position: 'absolute',
          left: u(centro - 25),
          top: u(14),
          width: u(50),
          height: u(50),
          borderRadius: u(10),
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: ativo ? '#DDF0FB' : 'transparent',
          borderWidth: ativo ? 1.5 : 0,
          borderColor: '#8ECBEE',
        }}
      >
        <Image source={img} style={{ width: u(w * ESCALA), height: u(h * ESCALA) }} />
      </TouchableOpacity>
    )
  }

  return (
    <>
      <View
        style={{
          position: 'absolute',
          left: u(13),
          width: u(368),
          bottom: base,
          height: u(78),
          backgroundColor: '#fff',
          borderRadius: u(30),
          borderWidth: 1.5,
          borderColor: '#BDEFF2',
          shadowColor: '#2c8f6b',
          shadowOpacity: 0.25,
          shadowRadius: 4,
          shadowOffset: { width: 0, height: 3 },
          elevation: 6,
        }}
      >
        {ABAS.map((a, i) => (
          <Icone
            key={a.rota}
            img={a.img}
            w={a.w}
            h={a.h}
            centro={CENTROS[i]}
            ativo={rotaAtual === a.rota}
            onPress={() => navigation.navigate(a.rota)}
          />
        ))}
        <Icone img={MAIS.img} w={MAIS.w} h={MAIS.h} centro={CENTROS[4]} ativo={rotaAtual === MAIS.rota} onPress={() => setMenu(true)} />
      </View>

      <Modal transparent visible={menu} animationType="fade" onRequestClose={() => setMenu(false)}>
        <Pressable style={{ flex: 1 }} onPress={() => setMenu(false)}>
          <View
            style={{
              position: 'absolute',
              right: u(20),
              bottom: base + u(88),
              width: u(190),
              backgroundColor: '#fff',
              borderRadius: u(16),
              paddingVertical: u(6),
              shadowColor: '#000',
              shadowOpacity: 0.25,
              shadowRadius: 8,
              shadowOffset: { width: 0, height: 4 },
              elevation: 8,
            }}
          >
            {MENU.map((m) => (
              <TouchableOpacity
                key={m.rota}
                style={{ paddingVertical: u(13), paddingHorizontal: u(18) }}
                onPress={() => {
                  setMenu(false)
                  navigation.navigate('MaisTab', { screen: m.rota })
                }}
              >
                <Text style={{ fontFamily: fontes.bold, fontSize: u(17), color: '#333' }}>{m.rotulo}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Pressable>
      </Modal>
    </>
  )
}
