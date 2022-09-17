import * as types from "./MainLayout.constraints"

export const getModeLight = (payload) => ({
  type: types.GET_MODE_LIGHT,
  payload: payload
})

export const getModeDark = (payload) =>
  ({
    type: types.GET_MODE_DARK,
    payload: payload
  })