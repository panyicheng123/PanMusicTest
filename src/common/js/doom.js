//这里封装的是对dom元素的基本操作
/*
  el:dom对象
  className：为dom对象添加的class名称
*/
export function addClass(el,className) {
  //首先判断这个el元素是否有这个类
  if (hasClass(el,className)){
    //className已经存在 什么都不做
    return
  }
  //className不存在
  let newClassName = el.className.split(" ")
  newClassName.push(className)
  el.className = newClassName.join(" ")
}

export function hasClass(el,className) {
  let reg = new RegExp("(^|\\s)"+className+"(\\s|$)")
  return reg.test(el.className)

}
