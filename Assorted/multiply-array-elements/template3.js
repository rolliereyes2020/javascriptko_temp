function multiplyAll(arr) {
    var product = 1;

    for (var i = 0; i < arr.length; i++) {
        let itemsKo = arr[i]; //** just to show the given items to be multiplied */
        console.log(itemsKo); //** just to show the given items to be multiplied */
        product *= arr[i];
    }
    return product;

}

var product = multiplyAll([1,2,3,4]); // ** 24 **//
console.log(product);