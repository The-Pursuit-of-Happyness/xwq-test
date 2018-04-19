import * as types from "./mutation-types"

const mutations = {
    [types.ADD]:(state,{num1,num2})=>{
        state.couter = num1+num2;
    },
    [types.SUB]:state=>{
        state.couter = "-";
    },
    [types.MUL]:state=>{
        state.couter="*";
    },


    [types.RED_AND_PINK]:state =>{
        let colors = [{color:"pink"},{color:"red"}];        
        state.colors = colors;
    },
    [types.BLACK_AND_GREEN]:state =>{
        let colors = [{color:"black"},{color:"green"}];
        state.colors = colors;
    },

    [types.SPEND_TIME]:state=>{
        state.times = new Date();
    }   
}
console.log("mutations");
export default mutations;