import { createSlice } from "@reduxjs/toolkit"

const creationSlice = createSlice({
    name: "affichePopup",
    initialState: {state:false},
    reducers:{
        affichage:(state, action)=>{
            return state;
        },
        desaffiche:(state, action)=>{
            return !state;
        }
    }
})

export default  creationSlice;

// export default function getUser(state=initialState, action){
//     return state;
// }