/*歌手对象：
  singerId：歌手的id
  findIdex：歌手的查找索引
  singerName：歌手的名字
  singerImg:歌手的头像图片
*/

export default class Singer {
  constructor(singerId,findIndex,singerName,singerImg) {
    this.singerId = singerId
    this.findIdex = findIndex
    this.singerName = singerName
    this.singerImg = singerImg
  }
}
