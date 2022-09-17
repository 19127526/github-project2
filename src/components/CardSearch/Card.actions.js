
import * as types from "./Card.constraints"

export const getInformationFromSearch=(payload)=>({
  type:types.GET_INFORMATION_FROM_SEARCH,
  payload:payload
})