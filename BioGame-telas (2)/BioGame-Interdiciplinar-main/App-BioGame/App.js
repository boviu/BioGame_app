import Route from './Route'
import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Nunito_400Regular, Nunito_500Medium, Nunito_600SemiBold, Nunito_700Bold } from '@expo-google-fonts/nunito'
import { ProgressoProvider } from './Progresso'

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito: Nunito_400Regular,
    NunitoMedium: Nunito_500Medium,
    NunitoSemiBold: Nunito_600SemiBold,
    NunitoBold: Nunito_700Bold,
  })
  if (!fontsLoaded) {
    return null
  }

  return (
    <ProgressoProvider>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </ProgressoProvider>
  );
}
