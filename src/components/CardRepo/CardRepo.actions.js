
import * as types from "./CardRepo.constraints"

export const getInformationFromRepo=(payload)=>({
  type:types.GET_INFORMATION_FROM_REPO,
  payload:payload
})