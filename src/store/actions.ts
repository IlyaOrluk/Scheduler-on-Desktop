// import axios from 'axios'
// const _apiBase = 'https://hoori.digital/api/v1/core/'
import {TOGGLE_ON} from './types'

type setToggleOnActionType = {
  type: typeof TOGGLE_ON,
  payload: boolean
}
export const toggleOn = (light: boolean): setToggleOnActionType => ({
        type: TOGGLE_ON,
        payload: light
})

// export const toggleOn = (light: boolean) => (dispatch: any) => {
//   dispatch(setToggleOn(light))
// }






//Header actions -->
// export const servicesOpen = () => ({
//   type: HEADER_SERVICES_OPEN,
// })

// export const openNavMenu = payload => dispatch => {
//   dispatch({
//     type: MENU_LIST_OPEN,
//     payload,
//   })
//   dispatch({
//     type: MENU_BUTTON_OPEN,
//     payload,
//   })
// }
// //^
// //| Open nav menu actions.
// export const changeHeaderShadow = payload => ({
//     type: HEADER_SHADOW_CHANGE,
//     payload,
// })
// export const changeHeaderConf = payload => dispatch => {
//   dispatch({
//     type: HEADER_BACKGROUND_CHANGE,
//     payload,
//   })
//   dispatch({
//     type: HEADER_TEXT_CHANGE,
//     payload,
//   })
//   dispatch({
//     type: HEADER_LOGO_CHANGE,
//     payload,
//   })
// }
// // Header actions end --||

// // Service component action ->
// export const addServicesAnimation = payload => ({
//     type: ADD_SERVICES_ANIMATION,
//     payload,
// })
// // Service component action --||


