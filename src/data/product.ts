import postai from '../assets/images/product/postai.png'
import uianalyzer from '../assets/images/product/uianalyzer.png'
import travkaro from '../assets/images/product/travkaro.png'

type Product = {
  name: string
  description?: string
  liveLink?: string
  image: ImageMetadata
  downloads?: number
}

export const product: Product[] = [
  {
    name: 'Travkaro',
    description: "Instagram for travel, dropped it in between. It impossible to bring people on a new social media without a lot of money",
    image: travkaro
  },
  {
    name: 'Post AI',
    liveLink: 'https://postai.space',
    description: 'AI powered social media post generator',
    image: postai,
    downloads: 0
  },
  {
    name: 'UI Analyzer',
    liveLink: 'https://uianalyzer.in',
    description: "Analyse your website's UI and get suggestions to improve it. It's Open Source project",
    image: uianalyzer,
    downloads: 0
  }
]
