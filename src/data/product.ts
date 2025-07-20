import postai from '../assets/images/product/postai.png'
import uianalyzer from '../assets/images/product/uianalyzer.png'
import travkaro from '../assets/images/product/travkaro.png'

type Product = {
  name: string;
  description?: string;
  liveLink?: string;
  image: ImageMetadata;
  downloads?: number;
}

export const product: Product[] = [
  {
    name: 'Travkaro',
    description: 'Instagram for travel',
    image: travkaro
  },
  {
    name: 'Post AI',
    liveLink: 'https://postai.space',
    image: postai,
    downloads: 0
  },
  {
    name: 'UI Analyser',
    liveLink: 'https://uianalyser.in',
    image: uianalyzer,
    downloads: 0
  }
]
