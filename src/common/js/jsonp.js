import  originJSONP from  'jsonp'
export default function jsonp(url,data,option) {
  //url：基本的url data：url后面所跟随的参数，option相关设置
  /*
    如果url中已经有? 则后面拼接 & param(data)的结果
    如果url中没有? 则后面先加上? 在加上param(data)的结果
  */
  url += (url.indexOf("?") < 0 ? "?" : "&") + param(data)
  return new Promise((resolve, reject) =>{
    originJSONP(url,option,function (err,data) {
      if (!err){//err不出错为空，出错了才会有数据
        resolve(data)
      }else {
        reject(err)
      }
    })
  })
}

//实现url与data参数的拼接  data:{key1:value1,key2:value2,key3:value3}
//一般url http://xxxxx/abc?name=admin&password=admin
function param(data) {
  let url = ""
  for (const k in data) {
    let value = data[k] !== undefined ? data[k] : ""//如果value不是undefined就将他赋值，如果为undefined就赋值为“ ”
    url+= `&${k}=${value}`
  }
  return url ? url.substring(1) : ""  //将第一个&去除
}
