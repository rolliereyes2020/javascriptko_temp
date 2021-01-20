//** aug 3 alert prompt **//
  const para = document.querySelector('p');
  
  para.addEventListener('click', updateName);
  
  function updateName() {
    let name = prompt('Enter a new name eh:');
    para.textContent = 'Player 1: ' + name;
  }