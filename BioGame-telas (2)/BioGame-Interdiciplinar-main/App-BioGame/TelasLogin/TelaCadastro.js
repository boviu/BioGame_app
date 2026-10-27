import { View, ImageBackground, StyleSheet, TouchableOpacity, Text, TextInput, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
//fonte de aplicativo
import { useFonts } from 'expo-font'
import { Nunito_400Regular, Nunito_500Medium, Nunito_600SemiBold, Nunito_700Bold } from '@expo-google-fonts/nunito'

import { cadastrar } from '../services/auth'

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
    return null;
  }
  async function realizarCadastro() {
    if (!email || !senha) {
      alert('Preencha todos os campos.')
      return
    }

    try {
      await cadastrar(email, senha)
      alert('Usuário cadastrado!')
      navigation.navigate('Login')
    } catch (error) {
      alert('Não foi possível cadastrar o usuário.')
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
        <View style={{ alignSelf: 'center', justifyContent: 'flex-start', marginTop: 90, marginBottom: 10 }}>
          <Text style={styles.textPrincipal}>Cadastro</Text>
        </View>
        {/* Card */}
        <View style={styles.box1}>
          <Text style={styles.textBox1}> Criar Conta</Text>
          {/* Infomações */}
          <TextInput
            style={styles.boxTextInput}
            placeholder='email'
            placeholderTextColor="#6C757D"
            value={email}
            onChangeText={setEmail}
            keyboardType='email-address'
            autoCapitalize='none'
          />
          <TextInput
            style={styles.boxTextInput}
            placeholder='telefone'
            placeholderTextColor="#6C757D"
          />
          <TextInput
            style={styles.boxTextInput}
            placeholderTextColor="#6C757D"
            placeholder='senha'
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />
          <TextInput
            style={styles.boxTextInput}
            placeholder='Confirmar Senha'
            placeholderTextColor="#6C757D"
          />
          {/* Botão - Logar */}
          <TouchableOpacity
            style={styles.bottom}
            onPress={realizarCadastro}
          >
            <Text style={styles.textBottom}> Criar</Text>
          </TouchableOpacity>
          <Text style={styles.textCard1}>ou crie com</Text>
          <View style={styles.boxAling}>
            {/* Imagens */}
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
          {/* Botão - Logar 2 */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.textBottom2}> Já tem conta? </Text>
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
            style={{top:160, left: -45, position:'absolute'  }}
          />
          <Image
            source={require('../assets/folhaRight.svg')}
            style={{bottom:290, left: -30, position:'absolute' }}
          />
          <Image
            source={require('../assets/folhaRight.svg')}
            style={{top:35, left: -15, position:'absolute' }}
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

  )}
  const styles = StyleSheet.create({
    screen:{
      flex: 1
    },
    conatiner:{
      alignItems:'center'
    },
    background: {
    flex: 1,
    width: '100%',
    height: '100%', 
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
    height: '70%',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    margin: 25,
    paddingVertical: 25, 
    borderTopLeftRadius: 25, 
    borderTopRightRadius: 75, 
    borderBottomLeftRadius: 75, 
    borderBottomRightRadius: 25
  },
  textBox1: {
    fontFamily: 'NunitoBold',
    fontSize: 28,
    color: '#E3E6DC'
  },
  boxTextInput: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
    width: '90%',
    height: 45, 
    fontSize:17, 
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