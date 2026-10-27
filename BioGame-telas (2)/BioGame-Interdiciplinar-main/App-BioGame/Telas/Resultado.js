import { View, Text, ScrollView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Tela from '../components/Tela'
import Botao from '../components/Botao'
import { cores, fontes, useU } from '../theme'
import { getNivel } from '../dados/niveis'
import { irParaHome, irParaNiveis } from '../services/navegacao'

export default function Resultado() {
  const u = useU()
  const navigation = useNavigation()
  const { params } = useRoute()
  const bonus = params?.tipo === 'bonus'
  const nivel = bonus ? null : getNivel(params?.nivel ?? 1)
  const ultimo = !bonus && nivel.id === 4

  const titulo = bonus ? 'Guardião Lendário\nda Biosfera' : ultimo ? 'Jornada concluída!' : `Nível ${nivel.id} concluído!`
  const texto = bonus
    ? 'A Semente de Ouro foi plantada! Raios dourados cobrem a tela e as folhas da sua árvore agora brilham em dourado. Você se tornou um verdadeiro agente de mudança no planeta.'
    : nivel.feedback

  function continuar() {
    if (bonus) irParaHome(navigation)
    else irParaNiveis(navigation)
  }

  return (
    <Tela fundo={bonus ? 'verde' : 'pessego'}>
      <ScrollView contentContainerStyle={{ paddingBottom: u(40) }} showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: 'center', marginTop: u(60) }}>
          <MaterialCommunityIcons name={bonus ? 'star-four-points' : 'sprout'} size={u(64)} color={bonus ? '#F3C94B' : cores.verde} />
        </View>
        <Text
          style={{
            fontFamily: fontes.bold,
            fontSize: u(28),
            lineHeight: u(36),
            color: cores.marrom,
            textAlign: 'center',
            marginTop: u(14),
            paddingHorizontal: u(30),
          }}
        >
          {titulo}
        </Text>

        <View
          style={{
            alignSelf: 'center',
            width: u(365),
            marginTop: u(26),
            backgroundColor: '#fff',
            borderRadius: u(30),
            borderWidth: 1.5,
            borderColor: bonus ? '#BFE9CB' : cores.bordaPessego,
            paddingVertical: u(24),
            paddingHorizontal: u(24),
          }}
        >
          <Text style={{ fontFamily: fontes.media, fontSize: u(19), lineHeight: u(30.5), color: '#1A1A1A', textAlign: 'center' }}>{texto}</Text>
        </View>

        <Botao titulo="Continuar" largura={278} altura={52} style={{ marginTop: u(28) }} onPress={continuar} />
      </ScrollView>
    </Tela>
  )
}
