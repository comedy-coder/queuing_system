import {SET_DETAIL_DEVICE} from "./action"
import {GET_DETAIL_ID} from "./action"
export const initState = {
    detaildevice :  [],
    detailid :""
}
const reducer = (state :any, action :any ) => {
    switch(action.type){
        case SET_DETAIL_DEVICE :
            return {
                detaildevice : action.payload
            }
        case GET_DETAIL_ID :
            return {
                detailid : action.payload
            }
            default :
            throw new Error('Invalid action.')
    }
}
export default reducer