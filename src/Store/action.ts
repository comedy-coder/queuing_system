export const SET_DETAIL_DEVICE = 'set_detail' ;
export const GET_DETAIL_ID = 'get_id'
export const GET_DETAIL_DATETIME = 'get_datetime'
export const setDetailDevice = (payload:any) => ({
    type : SET_DETAIL_DEVICE,
    payload
})
export const getID = (payload:any) => ({
    type : GET_DETAIL_ID,
    payload
})
export const getDateTime = (payload:any) => ({
    type : GET_DETAIL_DATETIME,
    payload
})