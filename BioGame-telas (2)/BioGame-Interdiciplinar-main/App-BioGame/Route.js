import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Cadastro from './TelasLogin/TelaCadastro'
import Login from './TelasLogin/TelaLogin'
import RecuperarSenha from './TelasLogin/TelaRecuperarSenha'
import RecuperarSenha2 from './TelasLogin/TelaRecuperarSenha2'

import Splash from './Telas/Splash'
import Home from './Telas/Home'
import SuasArvores from './Telas/SuasArvores'
import Ranking from './Telas/Ranking'
import Amigos from './Telas/Amigos'
import AmigosLista from './Telas/AmigosLista'
import Conta from './Telas/Conta'
import Configuracoes from './Telas/Configuracoes'
import Privacidade from './Telas/Privacidade'
import SelecaoNiveis from './Telas/SelecaoNiveis'
import Introducao from './Telas/Introducao'
import Quiz from './Telas/Quiz'
import Resultado from './Telas/Resultado'

import BarraAbas from './components/BarraAbas'

const Stack = createNativeStackNavigator()
const Abas = createBottomTabNavigator()
const AmigosStack = createNativeStackNavigator()
const MaisStack = createNativeStackNavigator()

const opcoesInternas = { headerShown: false, animation: 'none', contentStyle: { backgroundColor: '#FFFFFF' } }

function AmigosNavegador() {
  return (
    <AmigosStack.Navigator screenOptions={opcoesInternas}>
      <AmigosStack.Screen name="Amigos" component={Amigos} />
      <AmigosStack.Screen name="AmigosLista" component={AmigosLista} />
    </AmigosStack.Navigator>
  )
}

function MaisNavegador() {
  return (
    <MaisStack.Navigator initialRouteName="Conta" screenOptions={opcoesInternas}>
      <MaisStack.Screen name="Conta" component={Conta} />
      <MaisStack.Screen name="Configuracoes" component={Configuracoes} />
      <MaisStack.Screen name="Privacidade" component={Privacidade} />
    </MaisStack.Navigator>
  )
}

function Principal() {
  return (
    <Abas.Navigator
      initialRouteName="Inicio"
      tabBar={(props) => <BarraAbas {...props} />}
      screenOptions={{ headerShown: false, sceneStyle: { backgroundColor: '#FFFFFF' } }}
    >
      <Abas.Screen name="Inicio" component={Home} />
      <Abas.Screen name="Arvores" component={SuasArvores} />
      <Abas.Screen name="Ranking" component={Ranking} />
      <Abas.Screen name="AmigosTab" component={AmigosNavegador} />
      <Abas.Screen name="MaisTab" component={MaisNavegador} />
    </Abas.Navigator>
  )
}

export default function Route() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={Splash} options={{ animation: 'fade' }} />

      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
      <Stack.Screen name="RecuperarSenha2" component={RecuperarSenha2} />

      <Stack.Screen name="Home" component={Principal} options={{ gestureEnabled: false }} />

      <Stack.Screen name="Niveis" component={SelecaoNiveis} options={{ animation: 'fade' }} />
      <Stack.Screen name="Introducao" component={Introducao} options={{ animation: 'fade' }} />
      <Stack.Screen name="Quiz" component={Quiz} options={{ animation: 'fade', gestureEnabled: false }} />
      <Stack.Screen name="Resultado" component={Resultado} options={{ animation: 'fade', gestureEnabled: false }} />
    </Stack.Navigator>
  )
}
