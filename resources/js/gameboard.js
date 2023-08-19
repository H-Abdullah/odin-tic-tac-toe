const boardLayout = (function () {
  
  function createBoard() {
    const body = document.body;

    // Setup and appendchild for #main-wrapper 
    const mainWrapper = document.createElement('div');
    mainWrapper.setAttribute('id', 'main-wrapper');
    mainWrapper.setAttribute('class', 'flex');
    body.appendChild(mainWrapper);

    // Setup and appendchild for #game-wrapper
    const gameWrapper = document.createElement('div');
    gameWrapper.setAttribute('id', 'game-wrapper');
    gameWrapper.setAttribute('class', 'flex');
    mainWrapper.appendChild(gameWrapper);

    // Setup and appendchild for #gameboard 
    const gameBoard = document.createElement('div');
    gameBoard.setAttribute('id', 'gameboard');
    gameBoard.setAttribute('class', 'flex');
    gameWrapper.appendChild(gameBoard);

    // Loop and appendchild for .column-grid and .box
    for (let i = 0; i < 3; i++) {
      const columnGrid = document.createElement('div');
      columnGrid.setAttribute('class', 'column-grid flex');
      
      for (let j = 0; j < 3; j++) {
        const box = document.createElement('div');
        box.setAttribute('class', 'box');
        columnGrid.appendChild(box);
      }

      gameBoard.appendChild(columnGrid);
    }
  };

  return { 
    createBoard: createBoard 
  };

})();

export default boardLayout;