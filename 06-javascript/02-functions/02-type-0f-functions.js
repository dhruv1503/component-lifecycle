var a = 100;
var b = 10

function normal(){
    console.log("normal")
    var a = 200;
    b = 15
    console.log(arguments)
    console.log(this);
    console.log(this.a)
    console.log(a)
    console.log(this.b)
    console.log(b)
} 

var varExp = function (){
    console.log("var expression")
    var a = 200;
    b = 15
    console.log(arguments)
    console.log(this);
    console.log(this.a)
    console.log(a)
    console.log(this.b)
    console.log(b)
}

const constExp = function(){
    console.log("const expression")
    var a = 200;
    b = 15
    console.log(arguments)
    console.log(this);
    console.log(this.a)
    console.log(a)
    console.log(this.b)
    console.log(b)
}

let letExp = function(){
    console.log("let expression");
    var a = 200;
    b = 15
    console.log(arguments)
    console.log(this);
    console.log(this.a)
    console.log(a)
    console.log(this.b)
    console.log(b)
}

var es6VarExp = () => {
    console.log("var es6 expression") 
    // console.log(arguments) ERROR
    var a = 200;
    b = 15
    console.log(this);
    console.log(this.a)
    console.log(a)
    console.log(this.b)
    console.log(b)
}

let es6LetExp = () => {
    console.log("let es6 expression")
    // console.log(arguments) ERROR
    var a = 200;
    b = 15
    console.log(this);
    console.log(this.a)
    console.log(a)
    console.log(this.b)
    console.log(b)
}

const  es6ConstExp = () => {
    console.log("const es6 expression")
    // console.log(arguments)  ERROR
    var a = 200;
    b = 15
    console.log(this);
    console.log(this.a)
    console.log(a)
    console.log(this.b)
    console.log(b)
}

normal(1, 2, 3)
varExp(1, 2, 3)
letExp(1, 2, 3)
constExp(1, 2, 3)
es6VarExp(1, 2, 3)
es6LetExp(1, 2, 3)
es6ConstExp(1, 2, 3)