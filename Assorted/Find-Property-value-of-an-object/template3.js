 //** aug find property value of an Object **//
  var myStorage = {
    "car": {
        "inside": {
          "glove box": "maps",
          "passenger seat": "crumbs"
        },
        "ouside": {
          "trunk": "jack"
        }
    }
  }
  
  var gloveboxContents = myStorage.car.inside["glove box"];
  
  console.log(gloveboxContents);