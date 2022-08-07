// Declaring global variables for grid size and grid table elements
const canvasElement = document.getElementById('pixelCanvas');
const gridSize = document.getElementById('sizePicker');

// Created a function to remove all child nodes from a parent node
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// When size is submitted by the user, call makeGrid()
gridSize.addEventListener('submit', function(event) {
    event.preventDefault();
    // Select size input
    const gridHeight = document.getElementById('inputHeight').value;
    const gridWidth = document.getElementById('inputWidth').value;
    makeGrid(gridHeight, gridWidth);
});

// Created a function to create a grid with selected size inputs
function makeGrid(gridHeight, gridWidth) {
    // Remove any existing grid elements before creating a new grid
    removeAllChildNodes(canvasElement);

    // Nested loop needed to create rows and columns for grid
    for (let x = 0; x < gridHeight; x++) {
        const row = document.createElement('tr');
        for (let y = 0; y < gridWidth; y++) {
            const cell = document.createElement('td');
            cell.innerHTML = '';
            row.appendChild(cell);
            canvasElement.appendChild(row);
        
            // Select color input
            cell.addEventListener('click', () => {
                const colorSelection = document.getElementById('colorPicker').value;
                cell.style.backgroundColor = colorSelection;
                });
        }
    }
}

