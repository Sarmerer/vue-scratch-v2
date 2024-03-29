import { Constraints } from '../constraints'
import { Drawable } from './drawable'

export class Field extends Drawable {
  constructor(field) {
    super(field)
  }

  measure() {
    this.drawable.height = Constraints.FieldHeight

    const tolerance = Constraints.FieldWidthTolerance[this.drawable.type] || 0
    const baseWidth =
      this.getStringWidth(this.drawable.value || this.drawable.placeholder) +
      tolerance

    this.drawable.width = Math.max(Constraints.MinFieldWidth, baseWidth)
  }

  getStringWidth(string) {
    if (typeof string !== 'string' || string == '') return 0

    const pseudo = document.createElement('div')
    pseudo.appendChild(document.createTextNode(string))
    pseudo.style.font = '14px "Noto Sans", sans-serif'
    pseudo.style.position = 'absolute'
    pseudo.style.visibility = 'hidden'
    pseudo.style.whiteSpace = 'nowrap'
    document.body.appendChild(pseudo)

    const width = pseudo.getBoundingClientRect().width
    pseudo.remove()

    return width
  }
}
