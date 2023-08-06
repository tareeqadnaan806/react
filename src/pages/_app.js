import '@/styles/globals.css'
import Header from '@/components/header' 
import { Footer } from '@/components/footer'
import { Menu } from '@/components/menu'

export default function App({ Component, pageProps }) {
  return <div>
    <Header/>
    <Menu/>
    <Component {...pageProps} />
    <Footer/>
  </div>
}
