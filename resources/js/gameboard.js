const boardLayout = (function () {
  const body = document.body;
  // Setup and appendchild for #main-wrapper 
  const mainWrapper = document.createElement('div');
  mainWrapper.setAttribute('id', 'main-wrapper');
  mainWrapper.setAttribute('class', 'flex');
  body.appendChild(mainWrapper);
  
  function createMainLayout() {
    createPlayerBoard();
    createGridBoard();
    createComputerBoard();
    createStartGameInterface();
  }

  function createPlayerBoard() {
    const playerWrapper = document.createElement('div');
    playerWrapper.setAttribute('id', 'player-wrapper');
    playerWrapper.setAttribute('class', 'flex');
    mainWrapper.appendChild(playerWrapper);

    const playerImg = document.createElement('img');
    playerImg.setAttribute('id', 'player-img');
    playerImg.setAttribute('class', 'flex');
    playerWrapper.appendChild(playerImg);

    const playerName = document.createElement('p');
    playerName.setAttribute('id', 'player-name');
    playerName.setAttribute('class', 'flex');
    playerWrapper.appendChild(playerName);

    const playerPoint = document.createElement('div');
    playerPoint.setAttribute('id', 'player-point');
    playerPoint.setAttribute('class', 'flex');
    playerWrapper.appendChild(playerPoint);
  }

  function createComputerBoard() {
    // Create and append #computer-wrapper 
    const computerWrapper = document.createElement('div');
    computerWrapper.setAttribute('id', 'computer-wrapper');
    computerWrapper.setAttribute('class', 'flex');
    mainWrapper.appendChild(computerWrapper);

    const computerImg = document.createElement('img');
    computerImg.setAttribute('id', 'computer-img');
    computerImg.setAttribute('class', 'flex');
    computerWrapper.appendChild(computerImg);

    const computerName = document.createElement('p');
    computerName.setAttribute('id', 'computer-name');
    computerName.setAttribute('class', 'flex');
    computerWrapper.appendChild(computerName);

    const computerPoint = document.createElement('div');
    computerPoint.setAttribute('id', 'computer-point');
    computerPoint.setAttribute('class', 'flex');
    computerWrapper.appendChild(computerPoint);
  }

  function createStartGameInterface() {
    // Create and append #start-game-page 
    const startGameWrapper = document.createElement('div');
    startGameWrapper.setAttribute('id', 'start-game-wrapper');
    startGameWrapper.setAttribute('class', 'flex');
    body.appendChild(startGameWrapper);

      const versusInput = document.createElement('div');
      versusInput.setAttribute('id', 'versus-input');
      versusInput.setAttribute('class', 'flex');
      startGameWrapper.appendChild(versusInput);

        // Create and append input 
        const topHorizontalLine = document.createElement('hr');
        const playerLabel = document.createElement('label');
        const playerInput = document.createElement('textarea');
        const computerLabel = document.createElement('label');
        const computerInput = document.createElement('textarea');
        const btmHorizontalLine = document.createElement('hr');
        topHorizontalLine.setAttribute('id', 'topHR');
        playerLabel.setAttribute('for', 'player-input');
        playerLabel.textContent = 'USER';
        playerInput.setAttribute('id', 'player-input');
        playerInput.setAttribute('class', 'flex');
        playerInput.setAttribute('name', 'player-input');
        playerInput.setAttribute('placeholder', 'Enter your name...');
        computerLabel.setAttribute('for', 'computer-input');
        computerLabel.textContent = 'COMPUTER';
        computerInput.setAttribute('id', 'computer-input');
        computerInput.setAttribute('class', 'flex');
        computerInput.setAttribute('name', 'computer-input');
        computerInput.setAttribute('placeholder', 'Enter your opponent name...');
        btmHorizontalLine.setAttribute('id', 'btmHR');
        versusInput.appendChild(topHorizontalLine);
        versusInput.appendChild(playerLabel);
        versusInput.appendChild(playerInput);
        versusInput.appendChild(computerLabel);
        versusInput.appendChild(computerInput);
        versusInput.appendChild(btmHorizontalLine);

      const startGameBtn = document.createElement('button');
      startGameBtn.setAttribute('id', 'start-game-btn');
      startGameBtn.setAttribute('class', 'flex');
      startGameBtn.textContent = 'Start Game';
      startGameWrapper.appendChild(startGameBtn);
  }

  function createGridBoard() {
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
    createMainLayout: createMainLayout,
  };

})();

export default boardLayout;