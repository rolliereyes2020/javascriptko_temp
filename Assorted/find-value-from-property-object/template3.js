var personObj = [
    {
        firstName: "John1",
        lastName : "Doe1",
        id       : 5561,
        age      : 51
    },
    
    {
        firstName: "John2",
        lastName : "Doe2",
        id       : 5562,
        age      : 52
    },
    
    {
        firstName: "John3",
        lastName : "Doe3",
        id       : 5563,
        age      : 53
    },
    
    {
        firstName: "John4",
        lastName : "Doe4",
        id       : 5564,
        age      : 54
    },
    
    {
        firstName: "John5",
        lastName : "Doe5",
        id       : 5565,
        age      : 55
    }
    
    ];

    function lookUpProfile(name, prop){
        for (var i = 0; i < personObj.length; i++) {
            if (personObj[i].firstName === name) {
                return personObj[i][prop] || "no such property";
            }
        }
        return "no such contact";

    }

    var data = lookUpProfile("John3", "lastName");
    console.log(data);   //** Doe3 */