import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

const favoritarSlice = createSlice({
  name: 'favoritos',
  initialState: [] as Produto[],
  reducers: {
    toggleFavorito(state, action: PayloadAction<Produto>) {
      const produto = action.payload

      const index = state.findIndex((p) => p.id === produto.id)

      if (index !== -1) {
        state.splice(index, 1)
      } else {
        state.push(produto)
      }
    }
  }
})

export const { toggleFavorito } = favoritarSlice.actions
export default favoritarSlice.reducer
