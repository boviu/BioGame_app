import { useState } from 'react'
import { View, Text, TouchableOpacity, Linking, Alert } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import Tela from '../components/Tela'
import CartaoItem from '../components/CartaoItem'
import { cores, fontes, useU } from '../theme'

const SOBRE_NOS =
  'Bem-vindo ao BioGame, um universo virtual criado pela BrainRoot para mostrar que a tecnologia e o cuidado com o planeta podem caminhar juntos! Nossa missão é unir diversão e conscientização ambiental através de desafios que ensinam a proteger a natureza de forma leve e interativa. Para que você possa salvar suas conquistas e jogar com segurança, respeitamos totalmente a sua privacidade: coletamos apenas o básico para o funcionamento do jogo (como seu progresso e dados de login) e assumimos o compromisso de nunca vender ou compartilhar suas informações com terceiros. Além disso, fazemos nossa parte no mundo real utilizando servidores que buscam reduzir o impacto ecológico. Prepare-se para jogar, aprender e fazer a diferença no nosso planeta!'

export default function Configuracoes() {
  const u = useU()
  const [secao, setSecao] = useState('lista')
  const [vibrar, setVibrar] = useState(true)
  const [silenciar, setSilenciar] = useState(false)
  const icone = (nome) => <Feather name={nome} size={u(21)} color="#555" />

  const cabecalho = (titulo, topo, tam = 22) => (
    <View style={{ marginTop: u(topo), height: u(40), justifyContent: 'center' }}>
      <TouchableOpacity
        onPress={() => setSecao('lista')}
        style={{ position: 'absolute', left: u(secao === 'alertas' ? 38 : 44), padding: u(12), zIndex: 2 }}
      >
        <Feather name="chevron-left" size={u(22)} color="#222" />
      </TouchableOpacity>
      <Text style={{ fontFamily: fontes.bold, fontSize: u(tam), color: cores.marrom, textAlign: 'center' }}>{titulo}</Text>
    </View>
  )

  return (
    <Tela fundo="menta">
      <Text style={{ fontFamily: fontes.bold, fontSize: u(28), color: cores.marrom, textAlign: 'center', marginTop: u(23) }}>
        Configurações
      </Text>

      {secao === 'lista' && (
        <View style={{ marginTop: u(75) }}>
          <CartaoItem
            titulo="Alertas e notificações"
            pesoTitulo="semi"
            largura={304}
            textoX={75}
            icone={icone('bell')}
            onPress={() => setSecao('alertas')}
          />
          <CartaoItem
            style={{ marginTop: u(22) }}
            titulo="Idioma"
            subtitulo="Português (Brasil)"
            pesoTitulo="semi"
            largura={304}
            textoX={75}
            icone={icone('globe')}
            onPress={() => Alert.alert('Idioma', 'Por enquanto o BioGame está disponível apenas em Português (Brasil).')}
          />
          <CartaoItem
            style={{ marginTop: u(16) }}
            titulo="Suporte"
            pesoTitulo="semi"
            largura={304}
            textoX={77}
            icone={icone('message-circle')}
            onPress={() => setSecao('suporte')}
          />
        </View>
      )}

      {secao === 'alertas' && (
        <View>
          {cabecalho('Alertas e notificações', 40, 24)}
          <View style={{ marginTop: u(22) }}>
            <CartaoItem
              titulo="Ao receber notificações"
              subtitulo={vibrar ? 'Vibrar' : 'Silencioso'}
              pesoTitulo="semi"
              textoX={76}
              icone={icone('bell')}
              onPress={() => setVibrar((v) => !v)}
            />
            <CartaoItem
              style={{ marginTop: u(17) }}
              titulo={silenciar ? 'Ativar notificações' : 'Desativar notificações'}
              pesoTitulo="semi"
              textoX={76}
              icone={icone('bell-off')}
              onPress={() => setSilenciar((v) => !v)}
            />
          </View>
        </View>
      )}

      {secao === 'suporte' && (
        <View>
          {cabecalho('Suporte', 28)}
          <Text
            style={{
              fontFamily: fontes.bold,
              fontSize: u(24),
              lineHeight: u(26),
              color: cores.marrom,
              textAlign: 'center',
              alignSelf: 'center',
              width: u(250),
              marginTop: u(24),
            }}
          >
            Há algo a relatar ou dúvidas?
          </Text>
          <Text style={{ fontFamily: fontes.regular, fontSize: u(15), color: '#444', textAlign: 'center', marginTop: u(14) }}>
            Entre em contato
          </Text>
          <CartaoItem
            style={{ marginTop: u(8) }}
            titulo="E-mail"
            subtitulo="email.suporte@gmail.com"
            textoX={76}
            icone={icone('mail')}
            onPress={() => Linking.openURL('mailto:email.suporte@gmail.com')}
            largura={305}
          />
          <CartaoItem
            style={{ marginTop: u(11) }}
            titulo="Número de telefone"
            subtitulo="(11) 91234-5678"
            textoX={76}
            icone={icone('phone')}
            onPress={() => Linking.openURL('tel:+5511912345678')}
            largura={305}
          />
          <Text style={{ fontFamily: fontes.bold, fontSize: u(22), color: '#3B3B3B', textAlign: 'center', marginTop: u(14) }}>
            Sobre nós
          </Text>
          <View
            style={{
              alignSelf: 'center',
              width: u(323),
              marginTop: u(12),
              backgroundColor: '#fff',
              borderRadius: u(20),
              paddingVertical: u(18),
              paddingHorizontal: u(18),
              shadowColor: '#000',
              shadowOpacity: 0.2,
              shadowRadius: 3,
              shadowOffset: { width: 0, height: 3 },
              elevation: 4,
            }}
          >
            <Text style={{ fontFamily: fontes.regular, fontSize: u(13), lineHeight: u(15), color: '#555', textAlign: 'justify' }}>
              {SOBRE_NOS}
            </Text>
          </View>
        </View>
      )}
    </Tela>
  )
}
