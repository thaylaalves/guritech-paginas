import { Produto } from './components/Home'
import { ImagemProduto } from './components/imagem_Produto'
import { Footer } from './components/footer'

export default function App() {
  return (
    <>
      <div>
        <ImagemProduto />
        <Produto />
      </div>

      <Footer />
    </>
  )
}
