import { error } from "console";
import { NewsAction, newsLayout, newsReducerEnum } from "./NewsActions";



export const newsReducer = (state: newsLayout[] | undefined, action: NewsAction) => {
    switch(action.type){
        case newsReducerEnum.ADD:
                if (state){

                    return [...state, action.payload];
                }
                else
                    return [action.payload];
        case newsReducerEnum.REMOVE:
            if (state){
                return state.filter(element => element.id !== action.payload);
            }
            else{
                return state;
            }
        case newsReducerEnum.EDIT:
            if (state){
                return state.map(element => element.id === action.payload.id ? action.payload.message : element);
            }
            else{
                return state;
            }
        case newsReducerEnum.SET:

            return action.payload;
        default:
                return state;
            break;
    }
}