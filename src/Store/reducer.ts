import {SET_DETAIL_DEVICE} from "./action"
export const initState = {
    detaildevice :  []
}
const reducer = (state :any, action :any ) => {
    switch(action.type){
        case SET_DETAIL_DEVICE :
            return {
                detaildevice : action.payload
            }
            default :
            throw new Error('Invalid action.')
    }
}
export default reducer