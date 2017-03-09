import { createStore,combineReducers }  from 'redux'
import { data } from "../reducers";

const initialState = {
    data: {
        coin: 0.01,
        bet: 1,
        sound: "on",
        music: "on"
    }
};

const rootReducer = () => {
    return combineReducers({
        data
    })
}

const store = createStore(rootReducer(), initialState);

export default store
