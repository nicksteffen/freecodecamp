function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
    // Only change code below this line
    console.log('last' in {first: "Tybalt", last: "Capulet" });
    console.log(Object.keys({first: "Tybalt", last: "Capulet" }));
    console.log(source.last);
    console.log("=================");
    console.log(Object.keys(source)[0]);
    console.log(Object.keys(source).map(function(key) { return source[key]}));
    //    for (i = 0; i <3;i++) {
    console.log(Object.keys(collection).map(function(key) {
        if (Object.keys(source) in collection[key]){
            return collection[key];
        };
    }));
        //  }
    Object.keys(collection).map(function(key) {
        console.log(key);
    });




  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" },
               { first: "Mercutio", last: null },
               { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
