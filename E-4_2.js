const string = 'nam';

const bird = {
    name: 'Chi',
    color: 'blue',
    age: 1,
}

function testString(str, obj) {
   console.log(str in obj) 
}

testString(string, bird)