import { useState, useCallback } from 'react'
import { View, Text, Image, TouchableOpacity, Modal, TextInput, Pressable, ScrollView, ActivityIndicator } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'
import Feather from '@expo/vector-icons/Feather'
import Tela from '../components/Tela'
import Botao from '../components/Botao'
import { cores, fontes, useU } from '../theme'
import { useProgresso } from '../Progresso'

export default function AmigosLista() {
  const u = useU()
  const navigation = useNavigation()
  const { amigos, alternarFavorito, removerAmigo, adicionarAmigoPorEmail, recarregarAmigos } = useProgresso()
  useFocusEffect(useCallback(() => { recarregarAmigos() }, []))
  const [modal, setModal] = useState(false)
  const [email, setEmail] = useState('')
  const [erro, setErro] = useState('')
  const [enviando, setEnviando] = useState(false)

  async function salvar() {
    setEnviando(true)
    setErro('')
    const r = await adicionarAmigoPorEmail(email)
    setEnviando(false)
    if (r.ok) {
      setEmail('')
      setModal(false)
    } else {
      setErro(r.erro)
    }
  }

  function abrir() {
    setErro('')
    setEmail('')
    setModal(true)
  }

  return (
    <Tela fundo="menta">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ position: 'absolute', left: u(80), top: u(66), padding: u(12) }}
      >
        <Feather name="chevron-left" size={u(26)} color="#222" />
      </TouchableOpacity>
      <Text
        style={{ position: 'absolute', top: u(66), width: '100%', textAlign: 'center', fontFamily: fontes.bold, fontSize: u(29), color: cores.marrom }}
      >
        Amigos
      </Text>

      <ScrollView
        style={{ position: 'absolute', top: u(140), left: 0, right: 0, bottom: 0 }}
        contentContainerStyle={{ alignItems: 'center', paddingTop: u(16), paddingBottom: u(60) }}
        showsVerticalScrollIndicator={false}
      >
        {amigos.length === 0 && (
          <Text style={{ fontFamily: fontes.bold, fontSize: u(16), color: cores.marrom, textAlign: 'center', width: u(280), marginBottom: u(24) }}>
            Você ainda não tem amigos. Toque em "Adicionar amigo" e digite o e-mail da conta dele.
          </Text>
        )}
        {amigos.map((a) => (
          <View
            key={a.id}
            style={{
              width: u(304),
              height: u(69),
              borderRadius: u(15),
              backgroundColor: a.favorito ? '#F1ECC0' : '#fff',
              marginBottom: u(21),
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: u(20),
              shadowColor: '#000',
              shadowOpacity: 0.22,
              shadowRadius: 3,
              shadowOffset: { width: 0, height: 3 },
              elevation: 4,
            }}
          >
            <Image source={require('../assets/img/avatar-verde.png')} style={{ width: u(36), height: u(36) }} />
            <View style={{ marginLeft: u(17) }}>
              <Text numberOfLines={1} style={{ width: u(150), fontFamily: fontes.bold, fontSize: u(17), color: '#3A3A3A' }}>{a.nome}</Text>
              <Text style={{ fontFamily: fontes.bold, fontSize: u(17), color: '#707070' }}>Nível {a.nivel}</Text>
            </View>
            <View style={{ position: 'absolute', right: u(20), top: u(8), bottom: u(8), justifyContent: 'space-between', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => alternarFavorito(a.id)} hitSlop={8}>
                <Ionicons name={a.favorito ? 'star' : 'star-outline'} size={u(20)} color="#FFC40C" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => removerAmigo(a.id)} hitSlop={8}>
                <Ionicons name="trash-outline" size={u(20)} color="#F04646" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
        <Botao
          titulo="Adicionar amigo"
          largura={242}
          altura={51}
          onPress={abrir}
          style={{ justifyContent: 'flex-start', paddingLeft: u(26) }}
        >
          <Feather name="plus-circle" size={u(22)} color="#fff" style={{ marginRight: u(17) }} />
        </Botao>
      </ScrollView>

      <Modal transparent visible={modal} animationType="fade" onRequestClose={() => setModal(false)}>
        <Pressable
          style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.35)', justifyContent: 'center', alignItems: 'center' }}
          onPress={() => setModal(false)}
        >
          <Pressable
            style={{ width: u(300), backgroundColor: '#fff', borderRadius: u(20), padding: u(20) }}
            onPress={() => {}}
          >
            <Text style={{ fontFamily: fontes.bold, fontSize: u(19), color: cores.marrom, marginBottom: u(12) }}>
              Adicionar amigo
            </Text>
            <Text style={{ fontFamily: fontes.regular, fontSize: u(14), color: '#555', marginBottom: u(10) }}>
              Digite o e-mail da conta BioGame do seu amigo.
            </Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="E-mail do amigo"
              keyboardType="email-address"
              autoCorrect={false}
              placeholderTextColor="#6C757D"
              autoCapitalize="none"
              style={{
                backgroundColor: '#F2F4F3',
                borderRadius: u(10),
                padding: u(10),
                height: u(45),
                fontFamily: fontes.regular,
                fontSize: u(17),
              }}
            />
            {!!erro && <Text style={{ fontFamily: fontes.bold, fontSize: u(14), color: '#D33', marginTop: u(10) }}>{erro}</Text>}
            {enviando ? (
              <ActivityIndicator style={{ marginTop: u(16) }} color={cores.verde} />
            ) : (
              <Botao titulo="Adicionar" largura={260} altura={44} onPress={salvar} style={{ marginTop: u(16) }} />
            )}
          </Pressable>
        </Pressable>
      </Modal>
    </Tela>
  )
}
