import { Text, Alert } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Tela from '../components/Tela'
import CartaoItem from '../components/CartaoItem'
import { cores, fontes, useU } from '../theme'

export default function Privacidade() {
  const u = useU()
  return (
    <Tela fundo="menta">
      <Text style={{ fontFamily: fontes.bold, fontSize: u(29), color: cores.marrom, textAlign: 'center', marginTop: u(26) }}>
        Privacidade
      </Text>
      <CartaoItem
        style={{ marginTop: u(70), marginLeft: u(35), alignSelf: 'flex-start' }}
        titulo="Apagar meus dados"
        pesoTitulo="media"
        textoX={76}
        largura={304}
        icone={<MaterialCommunityIcons name="alert-circle" size={u(24)} color="#7C7A8E" />}
        onPress={() =>
          Alert.alert('Apagar meus dados', 'Esta opção ainda não está conectada ao servidor.', [{ text: 'OK' }])
        }
      />
    </Tela>
  )
}
