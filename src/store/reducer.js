import { combineReducers } from 'redux';

function gender (state = 0, action) {
    if (action.type === 'update_gender') {
        state = action.data;
    }
    return state;
}
function Illness (state = 0, action) {
    if (action.type === 'update_Illness') {
        state = action.data;
    }
    return state;
}
function allergenic (state = 0, action) {
    if (action.type === 'update_allergenic') {
        state = action.data;
    }
    return state;
}
function Dislike (state = 0, action) {
    if (action.type === 'update_Dislike') {
        state = action.data;
    }
    return state;
}
function feel (state = 0, action) {
    if (action.type === 'update_feel') {
        state = action.data;
    }
    console.log(state);
    return state;
}
let reducers = combineReducers({
    gender,
    Illness,
    allergenic,
    Dislike,
    feel
});
export default reducers;