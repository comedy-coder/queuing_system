import {SET_DETAIL_DEVICE} from "./action"
import {GET_DETAIL_ID} from "./action"
import {GET_DETAIL_DATETIME} from "./action"
export const initState = {
    detaildevice :  [],
    detailid :"",
    datetime : {}
}
const reducer = (state :any, action :any ) => {
    switch(action.type){
        case SET_DETAIL_DEVICE :
            return {...state,
                detaildevice : action.payload
            }
        case GET_DETAIL_ID :
            return {
                ...state,
                detailid : action.payload
            }
        case GET_DETAIL_DATETIME :
            return {
                ...state,
                datetime : action.payload
            }
            default :
            throw new Error('Invalid action.')
    }
}
export default reducer