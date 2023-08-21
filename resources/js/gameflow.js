const userEvent = (function() {
  
  function gameLogic() {
    const boxes = document.getElementsByClassName("box");
    let switchCount = 0;
    let isGameFinished = false;
    Array.from(boxes).forEach(box => {
      box.addEventListener('click', () => {
        
        if (isGameFinished) {
          return;
        }
  
        box.style.fontSize = '100px';
        switch (switchCount) {
          case 0:
            box.textContent = 'X'
            switchCount += 1;
            break;
          case 1:
            box.textContent = 'O';
            switchCount -= 1;
            break;
        }
  
        isGameFinished = Array.from(boxes).every(box => 
          box.textContent === 'X' || box.textContent === 'O');
      });
    });
  }

  function startGame() {
    const startGameBtn = document.getElementById('start-game-btn');
    const toggleStartGamePage = document.getElementById('start-game-wrapper');
    const playerInput = document.getElementById('player-input');
    const computerInput = document.getElementById('computer-input');
    const playerName = document.getElementById('player-name');
    const computerName = document.getElementById('computer-name');
    
    startGameBtn.addEventListener('click', () => {
      if (playerInput.value.trim() !== '' && computerInput.value.trim() !== '') {
        playerName.textContent = playerInput.value;
        computerName.textContent = computerInput.value;
        toggleStartGamePage.style.zIndex = -1;
      } else {
        alert('Please enter name for User and Computer!');
      }
    })
  };

  return { 
    gameLogic: gameLogic,
    startGame: startGame
  };
})();


export default userEvent ;