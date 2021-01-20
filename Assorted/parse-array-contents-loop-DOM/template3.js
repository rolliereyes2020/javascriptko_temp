const contacts = ['Anwar:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
const classKo = document.querySelector('.one');

  for (i = 0; i < contacts.length; i++) {
    let list1 = contacts[i];
    console.log(list1);
       
    const listItem = document.createElement('p')
    listItem.textContent = list1;
    classKo.appendChild(listItem);
  }

/** simplier: creating node without declaring element:

const contacts = ['Anwar:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975', 'Ando:6044445556'];

  for (i = 0; i < contacts.length; i++) {
    let list1 = contacts[i];
    console.log(list1);
       
    const listItem = document.createElement("LI")
    listItem.textContent = list1;
    
    document.getElementById("myList").append(listItem);
  }
  
**/