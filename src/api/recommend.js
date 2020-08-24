import {request} from "./request";
export  function  getBanners() {
  return request({
    url:"/banner"
  })
}

export function getMusicList(limit) {
  return request({
    url:"/top/playlist/highquality",
    params: {
      limit
    }
  })
}

export function getNewMusics() {
 return request({
   url:"/personalized/newsong"
 })
}
