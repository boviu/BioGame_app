import { useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import Feather from '@expo/vector-icons/Feather'
import Tela from '../components/Tela'
import Botao from '../components/Botao'
import { cores, fontes, useU } from '../theme'
import { getFase, BONUS, FASES_POR_NIVEL } from '../dados/niveis'
import { useProgresso } from '../Progresso'
import { irParaNiveis } from '../services/navegacao'

const VERDE = '#44AB2A'
const VERMELHO = '#D03035'

export default function Quiz() {
  const u = useU()
  const navigation = useNavigation()
  const { params } = useRoute()
  const bonus = !!params?.bonus
  const nivel = params?.nivel ?? 1
  const fase = params?.fase ?? 1
  const q = params?.q ?? 0
  const perguntas = bonus ? BONUS.perguntas : getFase(nivel, fase).perguntas
  const dados = perguntas[q]
  const { vidas, perderVida, concluirFase, setConcluido } = useProgresso()

  const [erradas, setErradas] = useState([])
  const [acertou, setAcertou] = useState(false)

  function escolher(i) {
    if (acertou || erradas.includes(i)) return
    if (i === dados.correta) {
      setAcertou(true)
    } else {
      setErradas((l) => [...l, i])
      perderVida()
    }
  }

  function continuar() {
    if (q + 1 < perguntas.length) {
      navigation.replace('Quiz', { nivel, fase, bonus, q: q + 1 })
      return
    }
    if (bonus) {
      setConcluido(true)
      navigation.replace('Resultado', { tipo: 'bonus' })
    } else if (fase === FASES_POR_NIVEL) {
      concluirFase(nivel, fase)
      navigation.replace('Resultado', { tipo: 'nivel', nivel })
    } else {
      concluirFase(nivel, fase)
      irParaNiveis(navigation)
    }
  }

  function estilo(i) {
    if (acertou && i === dados.correta) return 'certa'
    if (erradas.includes(i)) return 'errada'
    return 'neutra'
  }

  return (
    <Tela fundo="pessego">
      <View style={{ marginTop: u(36), height: u(40), justifyContent: 'center' }}>
        <TouchableOpacity
          onPress={() => irParaNiveis(navigation)}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 20 }}
          style={{ position: 'absolute', left: u(21), flexDirection: 'row', alignItems: 'center', zIndex: 5, elevation: 5 }}
        >
          <Feather name="x" size={u(28)} color="#444" />
          <Text style={{ fontFamily: fontes.semi, fontSize: u(19), color: '#333', marginLeft: u(8) }}>Sair</Text>
        </TouchableOpacity>
        <Text style={{ fontFamily: fontes.bold, fontSize: u(26), color: cores.marrom, textAlign: 'center' }}>
          {bonus ? 'Bônus' : `Fase ${nivel}.${fase}`}
        </Text>
        <View style={{ position: 'absolute', right: u(18), flexDirection: 'row' }}>
          {[0, 1, 2].map((i) => (
            <Image
              key={i}
              source={i < vidas ? require('../assets/img/folha-vida.png') : require('../assets/img/folha-vida-vazia.png')}
              style={{ width: u(25), height: u(41), marginLeft: u(8) }}
            />
          ))}
        </View>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: u(40) }} showsVerticalScrollIndicator={false}>
        <View
          style={{
            alignSelf: 'center',
            width: u(365),
            minHeight: u(154),
            marginTop: u(34),
            backgroundColor: '#fff',
            borderRadius: u(30),
            borderWidth: 1.5,
            borderColor: cores.bordaPessego,
            justifyContent: 'center',
            paddingVertical: u(18),
            paddingHorizontal: u(26),
          }}
        >
          <Text style={{ fontFamily: fontes.bold, fontSize: u(20), lineHeight: u(31), color: '#333', textAlign: 'center' }}>
            {dados.pergunta}
          </Text>
        </View>

        <View style={{ marginTop: u(36) }}>
          {dados.opcoes.map((op, i) => {
            const e = estilo(i)
            const cor = e === 'certa' ? VERDE : e === 'errada' ? VERMELHO : '#333'
            return (
              <TouchableOpacity
                key={i}
                activeOpacity={0.8}
                onPress={() => escolher(i)}
                style={{
                  alignSelf: 'center',
                  width: u(365),
                  minHeight: u(76),
                  marginBottom: u(18),
                  paddingVertical: u(10),
                  borderRadius: u(24),
                  backgroundColor: '#fff',
                  borderWidth: 1.5,
                  borderColor: cores.bordaPessego,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: u(20),
                  paddingRight: u(14),
                }}
              >
                <View
                  style={{
                    width: u(43),
                    height: u(43),
                    borderRadius: u(22),
                    backgroundColor: e === 'certa' ? VERDE : e === 'errada' ? VERMELHO : '#D9D9D9',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={{ fontFamily: fontes.bold, fontSize: u(18), color: e === 'errada' ? '#F6B8BA' : '#fff' }}>{i + 1}</Text>
                </View>
                <Text
                  style={{
                    flex: 1,
                    marginLeft: u(14),
                    fontFamily: e === 'neutra' ? fontes.semi : fontes.bold,
                    fontSize: u(op.length > 70 ? 16 : 18),
                    lineHeight: u(op.length > 70 ? 23 : 25),
                    color: cor,
                  }}
                >
                  {op}
                </Text>
              </TouchableOpacity>
            )
          })}
        </View>

        {acertou && <Botao titulo="Continuar" largura={278} altura={52} onPress={continuar} style={{ marginTop: u(6) }} />}
      </ScrollView>
    </Tela>
  )
}
