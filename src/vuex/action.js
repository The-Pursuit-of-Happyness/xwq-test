import * as types from './mutation-types';

const actions = {
    add:({
        commit
    },{num1,num2})=>{
        commit(types.ADD,{num1,num2})
    },
    sub:({
        commit
    },num)=>{
        commit(types.SUB,num)
    },
    mul:({
        commit
    },num)=>{
        commit(types.MUL,num)
    },


    redtopink:({
        commit
    })=>{
        commit(types.RED_AND_PINK,'');
    },
    blacktogreen:({
        commit
    })=>{
        commit(types.BLACK_AND_GREEN,'');
    },

    spendtime:({commit})=>{
       return new Promise((resolve, reject) => {
            setTimeout(() => {
              commit(types.SPEND_TIME);
              resolve()
            }, 1000)
        })
    }
};

console.log("action");
export default actions;