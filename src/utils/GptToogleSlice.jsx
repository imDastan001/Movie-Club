import { createSlice } from "@reduxjs/toolkit";

const GptToogleSlice= createSlice({
    name:"GptToogle",
    initialState:{
        toogle:false
    },
    reducers:{
        toogleGpt:(state)=>{
            state.toogle = !state.toogle;
        
        },
}



});
export const{toogleGpt} = GptToogleSlice.actions;
export default GptToogleSlice.reducer;