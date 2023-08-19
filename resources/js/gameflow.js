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

  return { 
    gameLogic: gameLogic 
  };
})();


export default userEvent ;