import { View, ImageBackground, StyleSheet, TouchableOpacity, Text, TextInput, Image, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
//fonte de aplicativo
import { useFonts } from 'expo-font'
import { Nunito_400Regular, Nunito_500Medium, Nunito_600SemiBold, Nunito_700Bold } from '@expo-google-fonts/nunito'

import { entrar } from '../services/auth'

export default function Cadastro() {

  const [fontsLoaded] = useFonts({
    Nunito: Nunito_400Regular,
    NunitoMedium: Nunito_500Medium,
    NunitoSemiBold: Nunito_600SemiBold,
    NunitoBold: Nunito_700Bold,
  })
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const navigation = useNavigation()

  if (!fontsLoaded) {
    return null
  }
  

  async function realizarLogin() {
    if (!email || !senha) {
      alert('Preencha todos os campos.')
      return
    }

    try {
      await entrar(email, senha)
      navigation.navigate('Home')
    } catch (error) {
      alert('Email ou senha incorretos.')
      console.log(error)
    }
  }

  return (
    <View style={styles.screen}>
      {/* imagem do fundo */}
      <ImageBackground
        source={require('../assets/fundo.png')}
        style={styles.background}
        resizeMode="cover"
        
      >
        {/* Cabeçalho */}
        <View style={{ alignSelf: 'center', justifyContent: 'flex-start', marginTop: 90, marginBottom: 20 }}>
          <Text style={styles.textPrincipal}>Entrar</Text>
        </View>
        {/* Card */}
        <View style={styles.box1}>
          <Text style={styles.textBox1}> Acessar a conta</Text>
          {/* Informações */}
          <TextInput
            style={styles.boxTextInput}
            placeholder='E-mail'
            placeholderTextColor="#6C757D"
            value={email}
            onChangeText={setEmail}
            keyboardType='email-address'
            autoCapitalize='none'
          />
          <TextInput
            style={styles.boxTextInput}
            placeholder='Senha'
            placeholderTextColor="#6C757D"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />
          {/* Botão - Recuperar senha */}
          <TouchableOpacity
            style={{ alignSelf: 'flex-end', marginRight: 10, }}
            onPress={() => navigation.navigate('RecuperarSenha')}
          >
            <Text style={styles.textBottom2}> Esqueceu a senha? </Text>
          </TouchableOpacity>
          {/* Botão - Logar*/}
          <TouchableOpacity
            style={styles.bottom}
            onPress={realizarLogin}
          >
            <Text style={styles.textBottom}> Entrar</Text>
          </TouchableOpacity>
          <Text style={styles.textCard1}>ou crie com</Text>
          {/* Imagens */}
          <View style={styles.boxAling}>
            <View style={styles.boxMoldura}>
              <Image
                source={require('../assets/GoogleLogo.png')}
                style={styles.image}
              />
            </View>
            <View style={styles.boxMoldura}>
              <Image
                source={require('../assets/AppleLogo.png')}
                style={styles.image}
              />
            </View>
            <View style={styles.boxMoldura}>
              <Image
                source={require('../assets/MicrosoftLogo.png')}
                style={styles.image}
              />
            </View>
          </View>
          {/* Botão - Criar conta*/}
          <TouchableOpacity
            onPress={() => navigation.navigate('Cadastro')}
          >
            <Text style={styles.textBottom2}> Não Possui conta? </Text>
          </TouchableOpacity>
          <Image
            source={require('../assets/flor.svg')}
            style={{bottom:-20, left:-20, position:'absolute' }}
          />
          <Image
            source={require('../assets/folhaLeft.svg')}
            style={{top:10, right: -20, position:'absolute'  }}
          />
          <Image
            source={require('../assets/folhaLeft3.svg')}
            style={{top:190, left: -45, position:'absolute'  }}
          />
          
          <Image
            source={require('../assets/folhaRight.svg')}
            style={{top:50, left: -15, position:'absolute' }}
          />
          <Image
            source={require('../assets/folhaRight2.svg')}
            style={{top:-40, left: -20,position:'absolute' }}
          />
          <Image
            source={require('../assets/recicle.svg')}
            style={{bottom:-15, position:'absolute', right: -5 }}
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
    height: '100%', 
  },
  screen: {
    flex: 1,
  },
  textPrincipal: {
    fontFamily: 'NunitoBold',
    fontSize: 30,
    color: 'black'
  },
  //Card 
  box1: {
    backgroundColor: '#198155',
    width: '90%',
    height: '65%',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    margin: 25,
    paddingVertical: 35, 
    borderTopLeftRadius: 75, 
    borderTopRightRadius: 25, 
    borderBottomLeftRadius: 25, 
    borderBottomRightRadius: 75, 
    position: 'relative'
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
    height: 45, 
    fontSize: 17, 
    fontFamily: 'Nunito'
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
    fontSize: 22,
    color: '#ffff',
  },
  //Botões em texto
  textBottom2: {
    fontFamily: 'Nunito',
    fontSize: 20,
    color: '#ffff',
  },
  textCard1: {
    fontFamily: 'Nunito',
    fontSize: 17,
    margin: 10,
    color: 'white'
  },
  //Imagens logins
  image: {
    width: 40,
    height: 40,
    margin: 10,
  }, 
  boxAling: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%'
  },
  boxMoldura: {
    backgroundColor: 'white',
    width: 70,
    height: 65,
    borderRadius: 40,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  }
})