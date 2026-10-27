import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'
import Tela from '../components/Tela'
import Faixa from '../components/Faixa'
import { cores, fontes, useU } from '../theme'
import { NIVEIS } from '../dados/niveis'
import { useProgresso } from '../Progresso'

export default function SuasArvores() {
  const u = useU()
  const navigation = useNavigation()
  const { nivelDesbloqueado } = useProgresso()

  return (
    <Tela fundo="pessego">
      <Text
        style={{
          fontFamily: fontes.bold,
          fontSize: u(29),
          color: cores.marrom,
          textAlign: 'center',
          marginTop: u(56),
        }}
      >
        Suas árvores
      </Text>
      <View style={{ alignItems: 'center', marginTop: u(46) }}>
        {NIVEIS.map((n, i) => {
          const aberto = nivelDesbloqueado(n.id)
          return (
            <Faixa
              key={n.id}
              rotulo={n.rotulo}
              titulo={aberto ? n.arvore : 'Bloqueado'}
              cor={cores[n.cor]}
              sombra={cores[n.cor + 'Sombra']}
              bloqueado={!aberto}
              onPress={aberto ? () => navigation.navigate('Niveis') : undefined}
              style={{ marginTop: i === 0 ? 0 : u(25) }}
            >
              {!aberto && (
                <Ionicons
                  name="lock-closed"
                  size={u(21)}
                  color="#4B4630"
                  style={{ position: 'absolute', right: u(20), top: u(17) }}
                />
              )}
            </Faixa>
          )
        })}
      </View>
    </Tela>
  )
}
