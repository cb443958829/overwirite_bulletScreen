import { isObject, getContextWidth, getPostion } from '../../utils/index'
export default class Bullet {
    constructor(canvas, canvasCtx, bullet) {
        if(!canvas || !bullet || !isObject(bullet)) return 
        this.bullet = bullet
        this.ctx = canvasCtx
        this.canvas = canvas
        this.content = bullet.content 
        this.runTime = bullet.runTime || 0
        this.fontSize = 20
    }
    initialize() {
        this.color = this.bullet.color || "#CCC"
        this.width = getContextWidth(this.content, this.fontSize)
        var post = getPostion(this.canvas, this.fontSize)
        this.X = post.X
        this.Y = post.Y
    }
    // 弹幕绘制的方法
    draw() {
        const {ctx, fontSize, color, content} = this
        ctx.font = fontSize + 'px Microsoft Yahei'
        ctx.fillStyle = color
        ctx.fillText(content, this.X, this.Y)
    }
}