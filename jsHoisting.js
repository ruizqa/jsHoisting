//Exercise 1
// console.log(hello);                                   
// var hello = 'world';                                 

var hello;
console.log(hello);   // logs undefined                                
hello = 'world'; 


// Exercise 2
// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }

var needle;  //variable declaration gets hoisted
function test(){  //standalone function gets hoisted
    var needle;
	needle = 'magnet';
	console.log(needle);  //logs magnet
}
needle = 'haystack';
test();  // logs magnet

// Exercise 3
// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);


var brendan;
function print(){
    var brendan;
    brendan = 'only okay';
	console.log(brendan); // logs only okay
}
brendan = 'super cool';
console.log(brendan); // logs super cool

// Exercise 4

// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }

var food;
function eat(){
    var food;
	food = 'half-chicken';
	console.log(food);  //logs half-chicken
	food = 'gone';
}

food = 'chicken'; 
console.log(food);  // logs chicken
eat(); // logs half-chicken

// Exercise 5

// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);


var mean = function() {
    var food;
	food = "chicken";
	console.log(food); //logs out chicken
	food = "fish";
	console.log(food); //logs out fish
}

mean(); // logs out chicken, fish
console.log(food); // ReferenceError: food is not defined.
console.log(food); // ReferenceError: food is not defined.

//Exercise 6

// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);

var genre;
function rewind() {
	var genre;
    genre = "rock";
	console.log(genre); //logs out rock
	genre = "r&b";
	console.log(genre); //logs out r&b
}

console.log(genre); //logs undefined
genre = "disco";
rewind(); // logs out rock, r&b
console.log(genre); //logs out disco


// Exercise 7

// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo);

var dojo;
function learn() {
    var dojo;
	dojo = "seattle";
	console.log(dojo); //logs out seattle
	var dojo = "burbank";
	console.log(dojo); //logs out burbank
}
dojo = "san jose";
console.log(dojo); //logs out san jose
learn(); //logs out seattle, burbank
console.log(dojo); //logs out san jose


//Exercise 8
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; // error assignment to constant variable
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65)); // logs out {name:'Chicago', students:65, hiring: true}
console.log(makeDojo("Berkeley", 0)); // logs out 'closed for now'
