import GlobalElement from "../globalElement"

export default class TotalTable extends GlobalElement {
	constructor(parrentDomElment) {
		super(parrentDomElment)
		this.total = 0
		this.lost = 0
		this.playerLose = this.playerLose.bind(this)
	}

	create() {
		this.totalTableDomElement = document.createElement("div")
		this.totalTableDomElement.classList.add("total-table")

		const totalTableTitleDomElement = document.createElement("p")
		totalTableTitleDomElement.textContent = "Результат:"
		totalTableTitleDomElement.classList.add("total-table__title")

		this.tableResultDomElement = document.createElement("span")
		this.tableResultDomElement.classList.add("total-table__result")
		this.tableResultDomElement.textContent = this.total

		this.totalTableDomElement.appendChild(totalTableTitleDomElement)
		this.totalTableDomElement.appendChild(this.tableResultDomElement)

		super.init(this.totalTableDomElement)
	}

	updateTotal() {
		this.total += 1
		this.tableResultDomElement.textContent = this.total
	}

	playerLose(popup) {
		this.lost += 1

		if (this.lost === 5) {
			popup.toggleShow("Вы проиграли")
			return true
		}

		return false
	}
}
