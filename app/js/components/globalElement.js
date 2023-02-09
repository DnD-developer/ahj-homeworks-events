export default class GlobalElement {
	constructor(parrentElement) {
		this.parrentDomElement = document.querySelector(parrentElement)
	}

	init(child) {
		this.parrentDomElement.appendChild(child)
	}
}
