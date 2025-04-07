import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from './store'
import Produtos from './containers/Produtos'
import { toggleFavorito } from './store/reducers/favoritos'
import { adicionar } from './store/reducers/carrinho'
import { useGetProdutosQuery } from './services/api'
import Header from './components/Header'
import { GlobalStyle } from './styles'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useDispatch<AppDispatch>()

  const { data: produtos } = useGetProdutosQuery()

  const favoritos = useSelector((state: RootState) => state.favoritos)
  const carrinho = useSelector((state: RootState) => state.carrinho)

  const handleAddCarrinho = (produto: Produto) => {
    dispatch(adicionar(produto))
  }

  const handleFavoritar = (produto: Produto) => {
    dispatch(toggleFavorito(produto))
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho.produtos} />
        <Produtos
          produtos={produtos || []}
          favoritos={favoritos}
          favoritar={handleFavoritar}
          adicionarAoCarrinho={handleAddCarrinho}
        />
      </div>
    </>
  )
}

export default App
