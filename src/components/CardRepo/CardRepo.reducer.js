import * as types from "./CardRepo.constraints"
import produce from "immer"
const initialState= []

export const CardRepoReducer=(state=initialState,action)=>
  produce(state, draft => {
    switch (action.type) {
      case types.GET_INFORMATION_FROM_REPO:
        if(state.length>0){
          if(state.filter(index => (index.username===action.payload.username&&index.nameProject===action.payload.nameProject)).length>0){
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

