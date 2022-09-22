import * as actions from "./Card.actions"
export const getInformationFromSearch=(payload)=>dispatch=>{
  /*return (dispatch)=>{
    console.log("test redux thunk");
    dispatch(actions.getInformationFromSearch(payload))
  }*/
  console.log("test redux thunk");
  return dispatch(actions.getInformationFromSearch(payload))
}