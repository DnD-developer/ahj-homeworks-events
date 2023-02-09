import goblin from "../../../layout/assets/img/goblin.png"
import GlobalElement from "../globalElement"

export default class Board extends GlobalElement {
	constructor(parrentElement) {
		super(parrentElement)
		this.cells = []
		this.init = this.init.bind(this)
	}

	create() {
		this.boardDomElement = document.createElement("ul")
		this.boardDomElement.classList.add("board")

		for (let index = 0; index < 16; index += 1) {
			this.boardItemDomElement = document.createElement("li")
			this.boardItemDomElement.classList.add("board-item")

			this.boardDomElement.appendChild(this.boardItemDomElement)

			this.cells.push(this.boardItemDomElement)
		}

		this.imgGoalDomelement = document.createElement("img")
		this.imgGoalDomelement.setAttribute("src", goblin)

		super.init(this.boardDomElement)

		this.init()
	}

	init(currentIndex = null) {
		this.addHeadRandom(currentIndex)
		this.transitHead()
	}

	addHeadRandom(currentIndex = null) {
		const randomIndex = Math.floor(Math.random() * 16)

		if (!currentIndex || currentIndex !== randomIndex) {
			this.cells[randomIndex].appendChild(this.imgGoalDomelement)
		}
	}

	transitHead() {
		this.interval = setInterval(() => {
			const currentIndex = this.cells.findIndex(cell => cell.querySelector("img"))

			this.addHeadRandom(currentIndex)
		}, 1000)
	}

	addEvents(table, popup) {
		this.boardDomElement.addEventListener("click", e => {
			if (e.target.closest("img")) {
				table.updateTotal()

				clearInterval(this.interval)
				this.init(this.cells.findIndex(cell => e.target.closest(".board-item") === cell))
			} else {
				const progressGame = table.playerLose(popup)

				if (progressGame && this.interval) {
					clearInterval(this.interval)
				}
			}
		})
	}
}
