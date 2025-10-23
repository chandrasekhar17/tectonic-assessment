export interface Product {
  id: string
  name: string
  price: number
  image: string
  description: string
  category: string
  sizes: string[]
  colors: string[]
}

export interface Annotation {
  id: string
  productId: string
  x: number
  y: number
  label: string
}

export interface Look {
  id: string
  title: string
  description: string
  image: string
  video?: string
  products: Product[]
  annotations: Annotation[]
  celebrity?: string
}

export interface VideoState {
  isPlaying: boolean
  isMuted: boolean
  progress: number
  duration: number
}