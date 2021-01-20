const header = document.querySelector('header');
    const section = document.querySelector('section');

    // store the URL of the JSON we want to retrieve in a variable:
    let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
    
    // create a new request object instance from the XMLHttpRequest constructor, using the new keyword.
    let request = new XMLHttpRequest();
    
    // open the request using the open() method - with 2 parameters:
    request.open('GET', requestURL);

    // setting the responseType to JSON, so that XHR knows that the server will be returning JSON, and that this should be converted behind the scenes into a JavaScript object. Then we send the request with the send() method:
    request.responseType = 'json';
    request.send();

    // waiting for the response to return from the server, then dealing with it:
    request.onload = function() {
      const superHeroes = request.response;
      populateHeader(superHeroes);
      showHeroes(superHeroes);
    }

    function populateHeader(jsonObj) {
      const myH1 = document.createElement('h1');
      myH1.textContent = jsonObj['squadName'];
      header.appendChild(myH1);

      const myPara = document.createElement('p');
      myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
      header.appendChild(myPara);
    }

    function showHeroes(jsonObj) {
      const heroes = jsonObj['members'];

      for(let i = 0; i < heroes.length; i++) {
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myList = document.createElement('ul');

        myH2.textContent = heroes[i].name;
        myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
        myPara2.textContent = 'Age: ' + heroes[i].age;
        myPara3.textContent = 'Superpowers:';

        const superPowers = heroes[i].powers;
        for(let j = 0; j < superPowers.length; j++) {
          const listItem = document.createElement('li');
          listItem.textContent = superPowers[j];
          myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
      }
    }
