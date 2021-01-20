let list = document.querySelector('.output ul')

var personArr = [
    ["John1", "Doe1", 5561, 51],
    ["John2", "Doe2", 5562, 52],
    ["John3", "Doe3", 5563, 53],
    ["John4", "Doe4", 5564, 54],
    ["John5", "Doe5", 5565, 55]
    ]

for (j = 0; j < personArr.length; j++) {
    let item1 = personArr[j];
    console.log(item1);   //* John1 Doe1 5561 51
    let result = item1;

    let listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
}