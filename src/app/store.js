import { configureStore } from '@reduxjs/toolkit'
import formulaireRducer from "./../features/formulaire/formulaireSlice.js"
import connectionReducer from "./../features/connection/connectionSlice.js"
export default configureStore({
  reducer: {
    formulaire : formulaireRducer,
    connection: connectionReducer,
  },
})