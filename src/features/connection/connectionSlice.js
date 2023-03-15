import { createSlice } from '@reduxjs/toolkit'
const whiteList = {adresseMail : "mohanin24@gmail.com", pswd:"najibmohamed"}
export const connectionSlice = createSlice({
    name: 'connection',
    initialState: {
        value:false,
    },
    reducers:{
        valider:((state,action)=>{
            if (action.payload.adress == whiteList.adresseMail && action.payload.pswd == whiteList.pswd) {
                state.value = true;
            }else{state.value = false}
        }),
        deconnecter:((state)=>{
            state.value = false;
        })

    }
})
export const {valider , deconnecter } = connectionSlice.actions
export default connectionSlice.reducer

