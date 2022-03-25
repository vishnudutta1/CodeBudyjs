// level {1}


var arr = [1,2,3]

var sum = 0;

var out = [];

var out1 = arr.map(function(e){
  e += 1
  out.push(e)
})

console.log(out)




let sum1 = 0;

arr.forEach(myFunction);

function myFunction(item) {
  sum1 += item;
}

console.log(sum1)


var obj = {
  name: 'Elie', 
  rank : 'Pro'
};

console.log(obj.name,obj.rank)

