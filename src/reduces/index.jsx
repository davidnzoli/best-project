import { createSlice } from "@reduxjs/toolkit"

const initialState={state:false}

const creationSlice = createSlice({
    name: "affichePopup",
    initialState,
    reducers:{
        affichage:(state, action)=>{
            return !state;
        },
        desaffichage:(state, action)=>{
            return {
                state:true,
            };
        }
    }
})

export default  creationSlice;

// export default function getUser(state=initialState, action){
//     return state;
// }