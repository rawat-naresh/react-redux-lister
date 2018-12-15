import { createStore } from 'redux';

const initialState = {
    inputText:'',
    items:[]
};

const reducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type) {
        case 'INPUT_CHANGE' :
            return Object.assign({},state,{inputText:action.text})
        case 'HANDLE_SUBMIT' :
            return Object.assign({},state,{
                items:state.items.concat(state.inputText),
                inputText:''
            })
        default :
            return state;

    }
}
const store = createStore(reducer);

export default store;