import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Feather from '@expo/vector-icons/Feather'
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Tela from '../components/Tela'
import Faixa from '../components/Faixa'
import { cores, fontes, useU } from '../theme'
import { NIVEIS, BONUS, FASES_POR_NIVEL } from '../dados/niveis'
import { useProgresso } from '../Progresso'
import { irParaHome } from '../services/navegacao'

const LARGURA = 340
const DOURADO = '#E5B422'
const DOURADO_SOMBRA = '#B58A0E'
export default function SelecaoNiveis() {
  const u = useU()
  const navigation = useNavigation()
  const { nivelDesbloqueado, faseDesbloqueada, faseConcluida, bonusDisponivel, concluido, reiniciarRodada } = useProgresso()

  function abrirFase(nivel, fase) {
    if (!faseDesbloqueada(nivel, fase)) return
    reiniciarRodada()
    navigation.navigate('Introducao', { nivel, fase })
  }

  function abrirBonus() {
    reiniciarRodada()
    navigation.navigate('Introducao', { bonus: true })
  }

  function BotaoFase({ nivel, fase, cor, sombra }) {
    const feita = faseConcluida(nivel, fase)
    const livre = faseDesbloqueada(nivel, fase)
    const fundo = feita ? cores.verde : livre ? cor : '#D9D9D9'
    const borda = feita ? cores.verdeSombra : livre ? sombra : '#B5B5B5'
    return (
      <TouchableOpacity
        activeOpacity={livre ? 0.8 : 1}
        onPress={() => abrirFase(nivel, fase)}
        style={{
          width: u(58),
          height: u(58),
          borderRadius: u(29),
          backgroundColor: fundo,
          borderBottomWidth: u(4),
          borderBottomColor: borda,
          alignItems: 'center',
          justifyContent: 'center',
          opacity: livre || feita ? 1 : 0.9,
        }}
      >
        {feita ? (
          <Feather name="check" size={u(26)} color="#fff" />
        ) : livre ? (
          <Text style={{ fontFamily: fontes.bold, fontSize: u(16), color: '#fff' }}>{`${nivel}.${fase}`}</Text>
        ) : (
          <Ionicons name="lock-closed" size={u(20)} color="#7A7A7A" />
        )}
      </TouchableOpacity>
    )
  }

  return (
    <Tela fundo="pessego">
      <View style={{ marginTop: u(36), height: u(50), justifyContent: 'center' }}>
        <TouchableOpacity
          onPress={() => irParaHome(navigation)}
          style={{ position: 'absolute', left: u(14), padding: u(10), zIndex: 2 }}
        >
          <Feather name="chevron-left" size={u(28)} color="#333" />
        </TouchableOpacity>
        <Text style={{ fontFamily: fontes.bold, fontSize: u(29), color: cores.marrom, textAlign: 'center' }}>Selecione o nível</Text>
      </View>

      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingTop: u(24), paddingBottom: u(60) }} showsVerticalScrollIndicator={false}>
        {NIVEIS.map((n, i) => {
          const aberto = nivelDesbloqueado(n.id)
          const cor = cores[n.cor]
          const sombra = cores[n.cor + 'Sombra']
          return (
            <View key={n.id} style={{ marginTop: i === 0 ? 0 : u(30), alignItems: 'center' }}>
              <Faixa
                largura={LARGURA}
                tituloTam={aberto ? (n.subtitulo.length > 26 ? 16 : 19) : 19}
                rotulo={`Nível ${n.id} · ${n.rotulo}`}
                titulo={aberto ? n.subtitulo : 'Bloqueado'}
                cor={cor}
                sombra={sombra}
                bloqueado={!aberto}
              >
                {!aberto && (
                  <Ionicons name="lock-closed" size={u(21)} color="#4B4630" style={{ position: 'absolute', right: u(20), top: u(17) }} />
                )}
              </Faixa>
              <View style={{ width: u(LARGURA), flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: u(10), marginTop: u(14) }}>
                {Array.from({ length: FASES_POR_NIVEL }, (_, k) => (
                  <BotaoFase key={k} nivel={n.id} fase={k + 1} cor={cor} sombra={sombra} />
                ))}
              </View>
            </View>
          )
        })}

        {bonusDisponivel && (
          <View style={{ marginTop: u(30), alignItems: 'center' }}>
            <Faixa
              largura={LARGURA}
              rotulo="Nível bônus"
              titulo={BONUS.nome}
              cor={DOURADO}
              sombra={DOURADO_SOMBRA}
              onPress={abrirBonus}
            >
              <MaterialCommunityIcons
                name={concluido ? 'check-circle' : 'star-four-points'}
                size={u(26)}
                color="#fff"
                style={{ position: 'absolute', right: u(18), top: u(20) }}
              />
            </Faixa>
          </View>
        )}
      </ScrollView>
    </Tela>
  )
}
