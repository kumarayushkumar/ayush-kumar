import postai from '../assets/images/product/postai.png'
import uianalyzer from '../assets/images/product/uianalyzer.png'
import travkaro from '../assets/images/product/travkaro.png'
import curlme from '../assets/images/product/curlme.png'

type Product = {
  name: string
  description?: string
  liveLink?: string
  image: ImageMetadata
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
  },
  {
    name: 'UI Analyzer',
    liveLink: 'https://uianalyzer.in',
    description: "Analyse your website's UI and get suggestions to improve it. It's Open Source project",
    image: uianalyzer,
  },
   {
    name: 'Curlme',
    liveLink: 'https://curlme.dev',
    description: "Place to vibe with other coder only from terminal twitter from terminal but only for developers.",
    image: curlme,
  }
]
