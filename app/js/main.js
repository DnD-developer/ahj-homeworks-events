import Board from "./components/board/board"
import TotalTable from "./components/totalTable/totalTable"
import Popup from "./components/popup/popup"

document.addEventListener("DOMContentLoaded", () => {
	const board = new Board(".wrapper")
	const table = new TotalTable(".wrapper")
	const popup = new Popup("body")

	board.create()
	board.addEvents(table, popup)

	table.create()

	popup.create()
	popup.addEvents(board, table)
})
