/**
 Abdoulaye Ndiaye 
 Rhombus assigment 
 05/31/21

 * @param {Node} elementId
 */
 function getVal(elementId) {
	return document.getElementById(elementId).value;
}

/**
 * Generates a rhombus based on the given input
 * @param {number} height of one section of the rhombus
 * @param {color} colorEven
 * @param {color} colorOdd
 * @param {text} symbol
 */
function createRhombus(height, colorEven, colorOdd, symbol) {
	console.log(height, colorEven, colorOdd, symbol);

	// total height of the rhombus
	height = height * 2;

	// get the element which the rhombus will be displayed in
	const display = document.querySelector("#rhombusDisplay");
	var text = "";

	// row for loop
	for (var row = 0; row < height; row++) {
		text += "<div class='rhombusRow'>";

		// get the number of symbols/columns for this row
		const numCols = row < height / 2 ? (row + 1) * 2 : (height - row) * 2;

		// column for loop
		for (var col = 1; col <= numCols; col++) {
			
			const even = (col <= numCols / 2 ? col : col - numCols / 2) % 2 === 0;
			text += `<span style="color: ${
				even ? colorEven : colorOdd
			}">${symbol}</span>`;
		}
		text += "</div>";
	}

	
	display.innerHTML = text;
}
