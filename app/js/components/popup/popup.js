import GlobalElement from "../globalElement"

export default class Popup extends GlobalElement {
	constructor(parrentDomElement) {
		super(parrentDomElement)
	}

	create() {
		this.popupDomElement = document.createElement("div")
		this.popupDomElement.classList.add("popup")

		const popupContentDomElement = document.createElement("div")
		popupContentDomElement.classList.add("popup__content")

		const popupTextDomElement = document.createElement("p")
		popupTextDomElement.classList.add("popup__text")

		this.popupDomElement.appendChild(popupContentDomElement)
		popupContentDomElement.appendChild(popupTextDomElement)

		super.init(this.popupDomElement)
	}

	toggleShow(text = null) {
		this.popupDomElement.querySelector(".popup__text").textContent = text

		if (text) {
			this.parrentDomElement.style.overflow = "hidden"
		} else {
			this.parrentDomElement.style.overflow = "auto"

			this.board.init()

			this.table.total = -1
			this.table.lost = 0
			this.table.updateTotal()
		}

		this.popupDomElement.classList.toggle("popup--active")
	}

	addEvents(board, table) {
		this.board = board
		this.table = table

		this.popupDomElement.addEventListener("click", e => {
			if (!e.target.closest(".popup__content")) {
				this.toggleShow()
			}
		})
	}
}
