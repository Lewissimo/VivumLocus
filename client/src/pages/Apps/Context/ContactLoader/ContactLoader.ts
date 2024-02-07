import { ContactAction, contactLayout, contactReducerEnum } from "./ContactActions";

export const contactReducer = (state: contactLayout[] | undefined, action: ContactAction) => {
    switch(action.type){
        case contactReducerEnum.ADD:
                if (state){

                    return [...state, action.payload];
                }
                else
                    return [action.payload];
        case contactReducerEnum.REMOVE:
            if (state){
                return state.filter(element => element.id !== action.payload);
            }
            else{
                return state;
            }
        case contactReducerEnum.EDIT:
            if (state){
                return state.map(element => element.id === action.payload.id ? action.payload.contact: element);
            }
            else{
                return state;
            }
        case contactReducerEnum.SET:

            return action.payload;
        default:
                return state;
            break;
    }
}