import { useEffect } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useU } from '../theme'

export default function Splash() {
  const u = useU()
  const navigation = useNavigation()

  useEffect(() => {
    const t = setTimeout(() => navigation.replace('Login'), 2200)
    return () => clearTimeout(t)
  }, [])

  return (
    <View style={styles.tela}>
      <Image source={require('../assets/img/fundo-splash.png')} resizeMode="stretch" style={StyleSheet.absoluteFill} />
      <View style={{ position: 'absolute', left: 0, bottom: 0, width: u(393), height: u(852) }}>
      <Image source={require('../assets/img/splash-ilustracao.png')} resizeMode="stretch" style={StyleSheet.absoluteFill} />

      <View
        style={{
          position: 'absolute',
          left: u(61),
          top: u(256),
          width: u(274),
          height: u(265),
          backgroundColor: '#1B6E00',
          borderTopLeftRadius: u(31),
          borderTopRightRadius: u(76),
          borderBottomRightRadius: u(24),
          borderBottomLeftRadius: u(73),
          shadowColor: '#000',
          shadowOpacity: 0.3,
          shadowRadius: 6,
          shadowOffset: { width: 0, height: 4 },
          elevation: 8,
        }}
      >
        <View
          style={{
            position: 'absolute',
            left: u(16),
            top: u(16),
            width: u(239),
            height: u(228),
            backgroundColor: '#fff',
            borderTopLeftRadius: u(29),
            borderTopRightRadius: u(52),
            borderBottomRightRadius: u(28),
            borderBottomLeftRadius: u(56),
            overflow: 'hidden',
          }}
        >
          <Image
            source={require('../assets/img/logo-biogame-folha.png')}
            resizeMode="stretch"
            style={{ position: 'absolute', left: u(8.6), top: u(6.6), width: u(228), height: u(217) }}
          />
        </View>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({ tela: { flex: 1, backgroundColor: '#fff' } })
