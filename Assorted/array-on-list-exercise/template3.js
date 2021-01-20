//** ============================================  Exercise: array on a list **//
//** html: <section class="preview"></section>
let myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
const tempKo = document.querySelector('section');
    // Add your code here
for (i = 0; i < myArray.length; i++) {
    let arrKo = myArray[i];
    console.log(arrKo);
    let list = document.createElement('li');
    list.textContent = arrKo;
// Don't edit the code below here!
    const section = document.querySelector('section');
    tempKo.appendChild(list);
}
