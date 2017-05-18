function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
    // Only change code below this line
    console.log('last' in {first: "Tybalt", last: "Capulet" });
    console.log(Object.keys({first: "Tybalt", last: "Capulet" }));
    console.log(source.last);
    console.log("=================");
    console.log(Object.keys(source)[0]);
//    for (i = 0; i <3;i++) {
        console.log(Object.keys(collection).map(function(key) {
            return collection[key];}));
  //  }




  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" },
               { first: "Mercutio", last: null },
               { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
