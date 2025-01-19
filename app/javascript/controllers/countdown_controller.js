import { Controller } from "@hotwired/stimulus"
import { gsap } from "gsap"

export default class extends Controller {
  static targets = ["countdown"]

  connect() {
    this.secondsUntilEnd = parseInt(this.countdownTarget.dataset.secondsUntilEndValue)
    const now = new Date().getTime()
    this.endTime = new Date(now + this.secondsUntilEnd * 1000)
    this.countdown = setInterval(this.updateCountdown.bind(this), 1000)
  }

  updateCountdown() {
    const now = new Date().getTime()
    const distance = this.endTime - now

    if (distance < 0) {
      clearInterval(this.countdown)
      return
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    this.animateDigit("days", days)
    this.animateDigit("hours", hours)
    this.animateDigit("min", minutes)
    this.animateDigit("sec", seconds)
  }

  animateDigit(unit, value) {
    const valueStr = value.toString().padStart(2, "0")
    const digit1 = valueStr[0]
    const digit2 = valueStr[1]

    const element1 = this.element.querySelector(`.${unit}-1`)
    const element2 = this.element.querySelector(`.${unit}-2`)

    this.animateFigure(element1, digit1)
    this.animateFigure(element2, digit2)
  }
  
  animateFigure(element, value) {
    const currentValue = element.querySelector('.top').textContent
    if (currentValue === value.toString()) return
  
    const top = element.querySelector('.top')
    const bottom = element.querySelector('.bottom')
    const topBack = element.querySelector('.top-back')
    const bottomBack = element.querySelector('.bottom-back')
  
    // アニメーション開始から0.1秒後に値を更新
    setTimeout(() => {
      top.textContent = value
      bottom.textContent = value
      topBack.querySelector('span').textContent = value
      bottomBack.querySelector('span').textContent = value
    }, 60) // 100ms = 0.1秒の待機時間
  
    gsap.to(top, {
      duration: 0.8,
      rotationX: -180,
      transformPerspective: 300,
      ease: "power4.out",
      onComplete: () => {
        gsap.set(top, { rotationX: 0 })
      }
    })
  
    gsap.to(topBack, {
      duration: 0.8,
      rotationX: 0,
      transformPerspective: 300,
      ease: "power4.out",
      clearProps: "all"
    })
  }
}