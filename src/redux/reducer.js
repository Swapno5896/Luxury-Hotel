import { combineReducers } from "redux";
import { card, review } from "../shared/data";


const cardReducer = (cardState=card,action)=>{
    if(action.type == 'ADD_CARD'){
        return card
    }
    return card
}
const reviewReducer = (reviewReducer=review,action) =>{
    if(action.type='ADD_REVIEW'){
        return review
    }
    return review
}


export const  reducer = combineReducers({
    card:cardReducer,
    review:reviewReducer
})