import * as types from "./MainLayout.constraints"
import produce from "immer"
const initialState={
  mode:"Dark",
  color:"#222",
  flag:true,
}
export const MainLayoutReducer=(state=initialState,action)=>
  produce(state, draft => {
    switch (action.type) {
      case types.GET_MODE_LIGHT:
        draft.mode=action.payload.mode;
        draft.color=action.payload.color;
        draft.background=action.payload.background;
        draft.flag=action.payload.flag;
        break;
      case types.GET_MODE_DARK:
        draft.mode=action.payload.mode;
        draft.color=action.payload.color;
        draft.background=action.payload.background;
        draft.flag=action.payload.flag;
        break;
      default:
        return state;
    }
  })



