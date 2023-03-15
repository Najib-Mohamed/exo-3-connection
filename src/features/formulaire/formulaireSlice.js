import { createSlice } from '@reduxjs/toolkit'

export const formulaireSlice = createSlice({
  name: 'formulaire',
  initialState: {
    value:[],
  },
  reducers: {
    ajouter: (state, action)=>{
        state.value.push(action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { ajouter} = formulaireSlice.actions

export default formulaireSlice.reducer
