const boxes = document.getElementsByClassName("box");

const userEvent = (function() {
  Array.from(boxes).forEach(box => {
    box.addEventListener('click', () => {
      box.style.fontSize = '100px';
      let switchCount;

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
    })
  })
})();


export default userEvent;