// Write your solution here!

let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
    drivers.push(name);
}

function destructivelyPrependDriver(name){
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
    drivers.pop();
}

function destructivelyRemoveFirstDriver(){
    drivers.shift();
}

function appendDriver(name){
    let newArr = [...drivers, name];
    return newArr;
}

function prependDriver(name){
    let newArr = [name, ...drivers];
    return newArr;
}

function removeLastDriver(){
    let arr1 = drivers.slice(0, -1);
    return arr1;
}

function removeFirstDriver(){
    let arr1= drivers.slice(1);
    return arr1;
}
