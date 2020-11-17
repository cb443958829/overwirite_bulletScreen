import { countdown, isArray, count } from '../../utils/index'
import Bullet from '../bullet/Bullet'
export default class BulletScreen {
  constructor(options, bulletData) {
    const { oInput, oCanvas, oVideo, oColor, oCountDown, oCountTotal }= options
    if (!bulletData || !oVideo || !oInput || !oCanvas) return
    if (!isArray(bulletData)) return
    this.countTotal = oCountTotal
    this.color = oColor
    this.oCountDown = oCountDown
    this.input = oInput
    this.canvas = oCanvas
    this.video = oVideo
    this.canvasCtx = oCanvas.getContext('2d')
    this.canvas.width = oCanvas.offsetWidth
    this.canvas.height = oCanvas.offsetHeight
    this.bulletData = bulletData
    // 创建弹幕池
    this.bulletScreenPool = this.createBulletScreenPool()
    this.bulletPaused = true
    // console.log(this.bulletScreenPool)
    this.render()
  }
  createBulletScreenPool() {
    this.countTotal.innerText = this.bulletData.length
    return this.bulletData.map((bullet) => new Bullet(this.canvas, this.canvasCtx, bullet))
  }
  //   渲染函数
  render() {
    this.clearRect()
    this.drawBullet()
    // console.log(this.bulletPaused)
    !this.bulletPaused && requestAnimationFrame(this.render.bind(this))
  }
  drawBullet() {
    let currentTime = this.video.currentTime
    this.bulletScreenPool.map((item) => {
      if (!item.StopDraw && currentTime >= item.runTime) {
        if (!item.isInitialized) {
          item.initialize()
          item.isInitialized = true
        }
        item.X -= 2
        item.draw()
        if(item.X < -item.width) {
            item.StopDraw = true
        }
      }
    })
  }
  clearRect() {
    const { width, height } = this.canvas
    this.canvasCtx.clearRect(0, 0, width, height)
  }
  // 重置弹幕
  reset() {
    var currentTime = this.video.currentTime
    this.bulletScreenPool.map(item => {
      if(currentTime > item.runTime) {
        item.StopDraw = true
      } else {
        item.StopDraw = false
        item.isInitialized = false
      }
    })
  }
  addBullet(oBtn) {
    const {input, canvas, canvasCtx, countTotal, bulletScreenPool  } = this
    var currentTime = this.video.currentTime
    var inputValue = this.input.value.trim()
    var colorValue = this.color.value 
    if(!inputValue) return alert('弹幕不能为空')
    countdown(this.oCountDown, oBtn)
    var newBullet = {
      content: inputValue,
      color:　colorValue,
      runTime: currentTime
    }
    bulletScreenPool.push(new Bullet(canvas, canvasCtx, newBullet))
    bulletScreenPool.sort((a, b) => a.runTime-b.runTime )
    // console.log(bulletScreenPool)
    countTotal.innerText = bulletScreenPool.length
    input.value = ''
    count(countTotal, bulletScreenPool )
  }

  
}
