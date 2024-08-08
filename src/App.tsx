




    
  

import { Produto } from './components/Home'
import { ImagemProduto } from './components/imagem_Produto'
import { Footer } from './components/footer'
import { Rodape } from './components/rodape'
  import {Descricao} from './components/Description';


export default function App() {
  return (
    <>
      <div>
        <div>
        <div className="flex justify-center">
          <div className="ml-12 mt-12">
            <ImagemProduto />
          </div>
          <div className="m-20 mt-12">
            <Produto />
            <div className="mt-14">
              <Rodape />
            </div>
          </div>
        </div>
        <Footer />
        <Descricao/>
      </div>
    </>
  )

}

