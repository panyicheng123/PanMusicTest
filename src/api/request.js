import axios from "axios"

export function request(config) {
  //创建axios
  const instance = axios.create({
    baseURL:"http://localhost:3000",
    timeout:4000
  })
//axios请求拦截器的配置
  instance.interceptors.request.use(config => {
    return config
  },err =>{
    console.log(err)
  })

  //axios响应拦截器的配置
  instance.interceptors.response.use(res => {
    return res.data
  },err => {
    console.log(err)
  })

  //发送真正的网络请求
  return instance(config)
}
