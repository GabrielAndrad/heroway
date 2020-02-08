import * as Redux from 'redux';
import changeColorReducer from './reducers/changeColor'


const rootReducer = Redux.combineReducers ({
    changeColor: changeColorReducer
});

const store = Redux.createStore(rootReducer);

export default store;