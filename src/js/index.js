import '../css/index.css'
import BullettScreen from './bulletScreen/BulletScreen'
import { bulletData } from '../asserts/mock/mock'
;((doc) => {
  const oInput = doc.getElementById('inp'),
    oCanvas = doc.getElementById('canvas'),
    oVideo = doc.getElementById('video'),
    oColor = doc.getElementsByClassName('color')[0],
    oBtn = doc.getElementsByClassName('button')[0],
    oCountDown = doc.getElementsByClassName('time')[0],
    oCountTotal = doc.getElementsByClassName('count')[0]

  // 绑定事件处理函数
  function bindEvent() {
    oVideo.addEventListener('play', handleVideoPlay, false)
    oVideo.addEventListener('pause', handleVideoPause, false)
    oVideo.addEventListener('seeked', handleVideoSeeked, false)
    oBtn.addEventListener('click', handleVideoAddBullet, false)
  }
  const handleVideoPlay = () => {
    bulletScreen.bulletPaused = false
    bulletScreen.render()
  }
  const handleVideoPause = () => {
    bulletScreen.bulletPaused = true
  }
  const handleVideoSeeked = () => {
    bulletScreen.reset()
  }
  // 添加弹幕
  const handleVideoAddBullet = () => {
    if (!bulletScreen.bulletPaused) {
      bulletScreen.addBullet(oBtn)
    }
  }

  // 初始化项目
  function init() {
    var option = {
      oInput,
      oCanvas,
      oVideo,
      oColor,
      oCountDown,
      oCountTotal,
    }
    window.bulletScreen = new BullettScreen(option, bulletData)
  }

  bindEvent()

  init()
})(document)
