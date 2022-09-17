
import * as actions from "./CardRepo.actions"
export const getInformationFromRepo=(payload)=>async dispatch=>{
  return dispatch(actions.getInformationFromRepo(payload));
}