import request from "./request";

export function getHotelApi(){
    return request({
        url:'/public/hotels',
        method:"GET",
    })
}

export function getRoomsApi(hotelId){
    return request({
        url:`/room/roomList/${hotelId}`,
        method:"GET",
    })
}

export function getRoomDetailApi(roomId){
    return request({
        url:`/room/roomDetail/${roomId}`,
        method:"GET",
    })
}

export function getCategoriesApi(){
    return request({
        url:'/public/types',
        method:"GET",
    })
}

export function getHotelByTypeApi(typeId){
    return request({
        url:`/public/getHotelByTypes/${typeId}`,
        method:"GET",
    })
}

// export function getBookingRoomByRoomId(roomId){
//     return request({
//         url:`/user/searchBookingRoom/${roomId}`,
//         method:"GET",
//     })
// }

export function getBookingRoomByRoomId(roomId){
    return request({
        url:`/room/roomDetail/${roomId}`,
        method:"GET",
    })
}


export function searchHotel(searchData){
    return request({
        url:'/hotel/searchHotel',
        method: "POST",
        data:searchData,
    })
}