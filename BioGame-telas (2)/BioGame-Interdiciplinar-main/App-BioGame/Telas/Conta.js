import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Feather from '@expo/vector-icons/Feather'
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Tela from '../components/Tela'
import CartaoItem from '../components/CartaoItem'
import { cores, fontes, useU } from '../theme'
import { sair } from '../services/auth'
import { dadosUsuario } from '../services/usuario'

export default function Conta() {
  const u = useU()
  const navigation = useNavigation()
  const { nome, email } = dadosUsuario()

  async function realizarLogout() {
    try {
      await sair()
    } catch (e) {
      console.log(e)
    }
    navigation.reset({ index: 0, routes: [{ name: 'Login' }] })
  }

  const emBreve = () => Alert.alert('Em breve', 'Esta tela ainda não está disponível.')

  return (
    <Tela fundo="menta">
      <Text style={{ fontFamily: fontes.bold, fontSize: u(29), color: cores.marrom, textAlign: 'center', marginTop: u(24) }}>
        Conta
      </Text>

      <View style={{ alignSelf: 'center', marginTop: u(43), width: u(170), height: u(170) }}>
        <Image source={require('../assets/img/avatar-brainroot.png')} style={{ width: u(170), height: u(170) }} />
        <TouchableOpacity style={{ position: 'absolute', right: u(-1), bottom: u(8) }}>
          <Feather name="edit" size={u(24)} color="#222" />
        </TouchableOpacity>
      </View>

      <Text style={{ fontFamily: fontes.bold, fontSize: u(22), color: '#333', textAlign: 'center', marginTop: u(20) }}>{nome}</Text>
      <Text style={{ fontFamily: fontes.semi, fontSize: u(17), color: '#333', textAlign: 'center', marginTop: u(8) }}>{email}</Text>

      <CartaoItem
        style={{ marginTop: u(26) }}
        titulo="Informações pessoais"
        subtitulo="Nome, e-mail, telefone"
        icone={<Feather name="user" size={u(22)} color="#555" />}
        onPress={emBreve}
        textoX={75}
        largura={303}
      />
      <CartaoItem
        style={{ marginTop: u(15) }}
        titulo="Segurança e login"
        subtitulo="Dispositivos, senha"
        icone={<MaterialCommunityIcons name="form-textbox-password" size={u(22)} color="#555" />}
        onPress={emBreve}
        textoX={75}
        largura={303}
      />

      <TouchableOpacity
        onPress={realizarLogout}
        style={{ flexDirection: 'row', alignItems: 'center', marginTop: u(26), marginLeft: u(52), padding: u(4) }}
      >
        <Ionicons name="arrow-forward-circle-outline" size={u(27)} color="#F25C5C" />
        <Text style={{ fontFamily: fontes.semi, fontSize: u(16), color: '#F25C5C', marginLeft: u(12) }}>Sair</Text>
      </TouchableOpacity>
    </Tela>
  )
}
