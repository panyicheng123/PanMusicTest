import {request} from "./request";
export function getSingers(type,area,initial,limit) {
  return request({
    url:"/artist/list",
    params:{
      type,
      area,
      initial,
      limit
    }
  })
}

export function getHotSingers(limit) {
  return request({
    url:"/top/artists",
    params:{
      limit
    }
  })

}
