const button = document.querySelector('button.add');
const inputKo = document.querySelector('input.new');
const itemsList = document.querySelector('ul.items');
const totalText = document.querySelector('span.total');

button.addEventListener('click', function() {
  const newItem = document.createElement('li');
  newItem.innerHTML = inputKo.value;
  itemsList.appendChild(newItem);
  totalText.innerHTML = `(${itemsList.childElementCount} items)`;
  inputKo.value = '';
  inputKo.focus();
});