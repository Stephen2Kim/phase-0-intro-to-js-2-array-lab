// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(Ralph) {
    cats.push(Ralph)
}
function destructivelyPrependCat(Bob){
    cats.unshift(Bob)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(Broom){
    let newCat = [...cats, "Broom"]
    return newCat
}
function prependCat(Arnold){
    let newerCat = ["Arnold", ...cats]
    return newerCat
}
function removeLastCat(){
    let catsCopy = [...cats]
    catsCopy.pop()
    return catsCopy
}
function removeFirstCat(){
    let catsCopy2 = [...cats]
    catsCopy2.shift()
    return catsCopy2
}