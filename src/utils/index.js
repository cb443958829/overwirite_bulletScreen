// 是否为数组
function isArray(value) {
  var toString = Object.prototype.toString.call(value)
  return toString === '[object Array]'
}
function isObject(value) {
  var toString = Object.prototype.toString.call(value)
  return toString === '[object Object]'
}
// 获取弹幕文本的宽度
function getContextWidth(content, fontSize) {
  var _span = document.createElement('span')
  _span.style.fontSize = fontSize + 'px'
  _span.innerText = content
  document.body.appendChild(_span)
  var width = _span.offsetWidth
  document.body.removeChild(_span)
  return width
}
// 获取弹幕的初始化位置
function getPostion(canvas, fontSize) {
  var X = canvas.width
  var Y = Math.ceil((canvas.height / fontSize) * Math.random()) * fontSize
  return {
    X,
    Y,
  }
}
// 倒计时
function countdown(oCountDown, oBtn) {
  oBtn.disabled = true
  var timer = setInterval(() => {
    let time = parseFloat(oCountDown.innerText)
    time -= 0.1
    oCountDown.innerText = time.toFixed(1)
    if (time <= 0) {
      clearInterval(timer)
      oCountDown.innerText = 5
      oBtn.disabled = false
    }
  }, 100)
}
// 统计数量
function count (oCountTotal, bulletScreenPool) {
  oCountTotal.innerText = bulletScreenPool.length
}
export { reqData, isArray, isObject, getContextWidth, getPostion, countdown, count }
