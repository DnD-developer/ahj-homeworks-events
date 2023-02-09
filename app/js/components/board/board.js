import goblin from "../../layout/assets/img/goblin.png"

export default class Board {
	constructor(parrentElement) {
		this._parrentDocumentElement = document.querySelector(parrentElement)
		this.cells = []
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

		this._parrentDocumentElement.appendChild(this.boardDomElement)
	}

	addHeadRandom(currentIndex = null) {
		const randomIndex = Math.floor(Math.random() * 16)

		if (!currentIndex || currentIndex !== randomIndex) {
			this.cells[randomIndex].appendChild(this.imgGoalDomelement)
		}
	}

	transitHead() {
		setInterval(() => {
			const currentIndex = this.cells.findIndex(cell => cell.querySelector("img"))

			this.addHeadRandom(currentIndex)
		}, 1000)
	}
}
