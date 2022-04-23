export const SET_DETAIL_DEVICE = 'set_detail' ;
export const GET_DETAIL_ID = 'get_id'
export const setDetailDevice = (payload:any) => ({
    type : SET_DETAIL_DEVICE,
    payload
})
export const getID = (payload:any) => ({
    type : GET_DETAIL_ID,
    payload
})