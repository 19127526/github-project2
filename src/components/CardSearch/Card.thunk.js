import * as actions from "./Card.actions"
export const getInformationFromSearch=(payload)=>async dispatch=>{
  console.log("hello")
  return dispatch(actions.getInformationFromSearch(payload));
}