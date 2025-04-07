import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

export interface CarrinhoState {
  produtos: Produto[]
}

const initialState: CarrinhoState = {
  produtos: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const index = state.produtos.findIndex((p) => p.id === produto.id)

      if (index === -1) {
        state.produtos.push(produto)
      } else {
        alert('item ja adicionado')
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
