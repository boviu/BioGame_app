import { useWindowDimensions } from 'react-native'

export const cores = {
  marrom: '#5C1F07',     
  texto: '#333333',
  textoSuave: '#6B6B6B',
  verde: '#23C16B',   
  verdeSombra: '#168A4D',
  verdeLink: '#2A8A1B',
  vermelho: '#FF5247',
  vermelhoSombra: '#D8281C',
  laranja: '#E2AF3C',
  laranjaSombra: '#B98623',
  amarelo: '#E0CF49',
  amareloSombra: '#B3A32C',
  verdeCard: '#3FB068',
  verdeCardSombra: '#2D8C4F',
  solo: '#A17B65',
  bordaPessego: '#F5DDBB',
}

export const fontes = {
  regular: 'Nunito',
  media: 'NunitoMedium',
  semi: 'NunitoSemiBold',
  bold: 'NunitoBold',
}

export function useU() {
  const { width } = useWindowDimensions()
  const w = Math.min(width, 480)
  return (n) => (n * w) / 393
}