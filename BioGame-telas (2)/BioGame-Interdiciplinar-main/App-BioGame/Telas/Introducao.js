import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import Feather from '@expo/vector-icons/Feather'
import Tela from '../components/Tela'
import Botao from '../components/Botao'
import { cores, fontes, useU } from '../theme'
import { getNivel, getFase, BONUS } from '../dados/niveis'

export default function Introducao() {
  const u = useU()
  const navigation = useNavigation()
  const { params } = useRoute()
  const bonus = !!params?.bonus
  const nivel = params?.nivel ?? 1
  const fase = params?.fase ?? 1

  const dadosNivel = bonus ? null : getNivel(nivel)
  const dadosFase = bonus ? null : getFase(nivel, fase)
  const titulo = bonus ? `Nível bônus:\n${BONUS.nome}` : `${dadosNivel.rotulo}:\nFase ${fase} - ${dadosFase.titulo}`
  const narrativa = bonus ? BONUS.narrativa : dadosFase.narrativa

  return (
    <Tela fundo="pessego">
      <ScrollView contentContainerStyle={{ paddingBottom: u(40) }} showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ position: 'absolute', left: u(14), top: u(30), padding: u(10), zIndex: 2 }}
        >
          <Feather name="chevron-left" size={u(28)} color="#333" />
        </TouchableOpacity>

        <Text
          style={{
            fontFamily: fontes.bold,
            fontSize: u(26),
            lineHeight: u(35),
            color: cores.marrom,
            textAlign: 'center',
            marginTop: u(32),
            paddingHorizontal: u(40),
          }}
        >
          {titulo}
        </Text>

        <View
          style={{
            alignSelf: 'center',
            width: u(365),
            marginTop: u(20),
            backgroundColor: '#fff',
            borderRadius: u(30),
            borderWidth: 1.5,
            borderColor: cores.bordaPessego,
            paddingTop: u(18),
            paddingBottom: u(21),
            paddingHorizontal: u(22),
          }}
        >
          <Text style={{ fontFamily: fontes.media, fontSize: u(19), lineHeight: u(30.5), color: '#1A1A1A', textAlign: 'justify' }}>
            {narrativa}
          </Text>
        </View>

        <Botao
          titulo="Continuar"
          largura={278}
          altura={52}
          style={{ marginTop: u(24) }}
          onPress={() => navigation.navigate('Quiz', { nivel, fase, bonus, q: 0 })}
        />
      </ScrollView>
    </Tela>
  )
}
