//

const input = document.getElementById("input")
// NUMBERS
const one = document.getElementById("one")
const two = document.getElementById("two")
const three= document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six= document.getElementById("six")
const seven= document.getElementById("seven")
const eight= document.getElementById("eight")
const nine= document.getElementById("nine")
const zero= document.getElementById("zero")
//functions
const rest= document.getElementById("rest")
const addition= document.getElementById("addition")
const multiply= document.getElementById("multiply")
const split= document.getElementById("split")
const result= document.getElementById("result")
const point= document.getElementById("point")



one.addEventListener("click",()=>{
    input.value += 1 
})

two.addEventListener("click",()=>{
    input.value += 2
})
three.addEventListener("click",()=>{
    input.value += 3
})

four.addEventListener("click",()=>{
    input.value += 4
})

five.addEventListener("click",()=>{
    input.value += 5
})

six.addEventListener("click",()=>{
    input.value += 6
})

seven.addEventListener("click",()=>{
    input.value += 7
})

eight.addEventListener("click",()=>{
    input.value += 8
})

nine.addEventListener("click",()=>{
    input.value += 9
})

zero.addEventListener("click",()=>{
    input.value += 0
})

// point.addEventListener("click",()=>{
//     input.value += "."
// })

addition.addEventListener("click",()=>{
    input.value += "+"
})