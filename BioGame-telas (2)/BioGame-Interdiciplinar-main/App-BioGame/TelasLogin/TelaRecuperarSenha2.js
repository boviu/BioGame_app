import { View, ImageBackground, StyleSheet, TouchableOpacity, Text, TextInput,Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
//fonte de aplicativo
import { useFonts } from 'expo-font'
import { Nunito_400Regular, Nunito_500Medium, Nunito_600SemiBold, Nunito_700Bold } from '@expo-google-fonts/nunito'

import MaterialIcons from '@expo/vector-icons/MaterialIcons'



export default function Cadastro() {

  const [fontsLoaded] = useFonts({
    Nunito: Nunito_400Regular,
    NunitoMedium: Nunito_500Medium,
    NunitoSemiBold: Nunito_600SemiBold,
    NunitoBold: Nunito_700Bold,
  })
  if (!fontsLoaded) {
    return null;
  }
  const navigation = useNavigation()

  return (
    <View style={styles.screen}>
      {/* imagem do fundo */}
      <ImageBackground
        source={require('../assets/fundo.png')}
        style={styles.background}
        resizeMode="cover"

      >
        {/* Cabeçalho */}
        <View style={{ alignSelf: 'center', justifyContent: 'flex-start', marginTop: 90, marginBottom: 130 }}>
          <Text style={styles.textPrincipal}>Recuperar Senha</Text>
        </View>
        {/* Card */}
        <View style={styles.box1}>
          {/* Titulo */}
          <View style={{ width: '90%', alignItems: 'center', }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', }}>
              <TouchableOpacity
                style={{ alignSelf: 'flex-start', marginRight: 22 }}
                onPress={() => navigation.navigate('Login')}
              >
                <MaterialIcons name="arrow-back-ios-new" size={24} color="white" />
              </TouchableOpacity>
              <Text style={styles.textBox1}>Recuperar Senha</Text>
            </View>
          </View>
          {/* Informações*/}
          <TextInput
            style={styles.boxTextInput}
            placeholder='Nova Senha'
            placeholderTextColor="#6C757D"
          />
          <TextInput
            style={styles.boxTextInput}
            placeholder='Confirmar senha'
            placeholderTextColor="#6C757D"
          />
          {/* Botão */}
          <TouchableOpacity
            style={styles.bottom}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.textBottom}> Finalizar</Text>
          </TouchableOpacity>

          <Image
            source={require('../assets/flor.svg')}
            style={{ bottom: -20, left: -20, position: 'absolute' }}
          />
          <Image
            source={require('../assets/folhaLeft.svg')}
            style={{ top: 10, right: -20, position: 'absolute' }}
          />
          <Image
            source={require('../assets/folhaLeft3.svg')}
            style={{ top: 160, left: -45, position: 'absolute' }}
          />
          <Image
            source={require('../assets/folhaRight.svg')}
            style={{ top: 35, left: -15, position: 'absolute' }}
          />
          <Image
            source={require('../assets/folhaRight2.svg')}
            style={{ top: -50, left: -20, position: 'absolute' }}
          />
          <Image
            source={require('../assets/recicle.svg')}
            style={{ bottom: -15, position: 'absolute', right: -5 }}
          />
        </View>
      </ImageBackground>


    </View>
  )
}
const styles = StyleSheet.create({
  //Tela geral
  background: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  screen: {
    flex: 1,
  },
  textPrincipal: {
    fontFamily: 'NunitoBold',
    fontSize: 30,
    color: 'black',
  },
  //Card
  box1: {
    backgroundColor: '#198155',
    width: '90%',
    height: '40%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    margin: 25,
    paddingVertical: 60,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 75,
    borderBottomLeftRadius: 75,
    borderBottomRightRadius: 25
  },
  textBox1: {
    fontFamily: 'NunitoBold',
    fontSize: 25,
    color: '#E3E6DC'
  },
  boxTextInput: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
    width: '90%',
    height: 45
  },
  //Botão
  bottom: {
    backgroundColor: "#23C16B",
    borderRadius: 10,
    width: '90%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  textBottom: {
    fontFamily: 'Nunito',
    fontSize: 20,
    color: '#ffff',

  },

})