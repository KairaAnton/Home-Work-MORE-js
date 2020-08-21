"use strict"


function MyArray(){
    this.length = 0;
    for(let i = 0; i < arguments.length; i++){
        this[this.length] = arguments[i];
        this.length++;
    }
    this.push = function(){
        for(let i = 0; i < arguments.length; i++){
            this[this.length] = arguments[i];
    
            this.length++;
        }
        
            return this.length;
    }


    this.pop = function(){
       let i = this.length -1;
        
        this.length -= 1;
        return myArr[i];
    }
    


    this.forEach = function(){
        for(let i = 0; i < this.length; i++){
            console.log(myArr[i])
        }
    }



    this.flat = function(array, depth = 1){
        if(depth < 0){
            console.error("depth must be a positiv value");
            return;
        }

        let newArr = [];

        if(depth === 0){
            newArr = newArr.concat(array);
            return newArr;
        }



        for(let i = 0; i < array.length; i++){
            if(Array.isArray(array[i])){
    
                const buffer = this.flat(array[i], depth -1);
                
                newArr = newArr.concat(buffer);
            }else{
                newArr.push(array[i]);
            }
        }

        

    }


}

const myArr = new MyArray("test", [[[[["test2"]]]]],'','', "test3", 24242, true);


/////////////////////////////



function logParenthis(number){

    if (number === 1){
        console.log('()')
        return ('()');
         
    }
    let arr = ['(',...logParenthis(number -1), ')'];
    console.log(arr.join(''));
    return arr.join(''); 
   
    
}


/////////////////////
// 


const userA = {

    name: 'Vasya',
    dateOfBirth: new Date('December 9, 1995 23:15:30 GMT+3:00'),
    hoursWorked:40,
    ratePerHour:120,


    get age(){
        let now = new Date();
        return ` age: ${now.getFullYear() - this.dateOfBirth.getFullYear()}, the salary: ${this.hoursWorked * this.ratePerHour}`;
    },

};



////////////////////////



function sumOfVowels(str){

    let sum = 0;

    for(let i of str){
        if(i === "a"|| i === "o" || i === "i" || i === "u" || i === "e"){
        sum ++;
        }
    }

    return(sum);

}


////////////////////////

function multiples(n){

    for(let i = 1; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("fizzbazz");
        }else if(i % 3 === 0){
            console.log("fizz");
        }else if(i % 5 === 0){
            console.log("buzz");
        }else{
            console.log(i);
        }

        
    }

}


////////////////////////////////


function avg(){
    
let sum = 0;

    for(let i = 0; i < arguments.length; i++){
        sum+= arguments[i];
    }
    
    return sum / arguments.length;
}



////////////////////////////////////

function addNum(n){

    let b = n;


   return function(a){

   let c = 0;
   c += a;
   
    return  c += b;
         
        }

}

//////////////////////////////////


function operation(num1, num2, fn){


    
}

//////////////////////////////

function Obj(){

    this.method1 = "метод1"
    this.method2 = "метод2"
    this.method3 = "метод3"

};


const obj = new Obj();


