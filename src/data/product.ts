import commentkit from '../assets/images/product/commentkit.png'
import curlme from '../assets/images/product/curlme.png'
import travkaro from '../assets/images/product/travkaro.png'
import uianalyzer from '../assets/images/product/uianalyzer.png'
import ivaan from '../assets/images/product/ivaan.png'

type Product = {
  name: string
  description?: string
  liveLink?: string
  image: ImageMetadata
}

export const product: Product[] = [
  {
    name: 'Ivaan',
    liveLink: 'https://heyivaan.com',
    description:
      'Your Personal AI Meeting Assistant that remembers, connects and talks about all your meetings.',
    image: ivaan
  },
  {
    name: 'CommentKit',
    liveLink:
      'https://chromewebstore.google.com/detail/commentkit/bhaflkdicaedajhkeaipecfchdonglcn',
    description:
      'Commenting is best way to grow your LinkedIn. CommentKit is a free(forever) Chrome extension that can comments on posts 100+ for you.',
    image: commentkit
  },
  {
    name: 'UI Analyzer',
    liveLink: 'https://uianalyzer.in',
    description:
      "Analyse your website's UI and get suggestions to improve it. It's Open Source project",
    image: uianalyzer
  },
  {
    name: 'Curlme',
    liveLink: 'https://curlme.dev',
    description:
      'Place to vibe with other coder only from terminal twitter from terminal but only for developers.',
    image: curlme
  },
  {
    name: 'Travkaro',
    description:
      'Instagram for travel, dropped it in between. It impossible to bring people on a new social media without a lot of money',
    image: travkaro
  }
]
