import { Produto } from './components/Home'
import { ImagemProduto } from './components/imagem_Produto'
import { Footer } from './components/footer'
import { Rodape } from './components/rodape'

export default function App() {
  return (
    <>
      <div>
        <ImagemProduto />
        <Produto />
      </div>

      <ImagemProduto />
      <Produto />
      <Footer />
      <Rodape />
    </>
  )
}
