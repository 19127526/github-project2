import * as types from "./Card.constraints"
import produce from "immer"
import {store} from "../../store/Store";
const initialState= []
export const CardSearchReducer=(state=initialState,action)=>
  produce(state, draft => {
    switch (action.type) {
      case types.GET_INFORMATION_FROM_SEARCH:
        if(state.length>0){
          if(state.filter(index => index.fullName===action.payload.fullName).length>0){
            break;
          }
          else{
            draft.push(action.payload)
            break;
          }
        }
        else{
          draft.push(action.payload)
          break;
        }
      default:
        return state;
    }
  })

