class Calculator{
    constructor(prevNumber,currentNumber){
        this.prevNumberText = prevNumber
        this.currentNumberText = currentNumber;
        this.clear()
    }

    
    clear(){
        this.prevNumber="";
        this.currentNumber="";
        this.operation = undefined
        
    }
    delete(){
        if(currentNumber==="")return
        this.currentNumber = this.currentNumber.toString().slice(0,-1)
    }
    appendNumber(number){
        
        if(number === "." && this.currentNumber.includes("."))return
        this.currentNumber = this.currentNumber.toString()+number.toString()
    }
    chooseOperation(operation){
        if(this.currentNumber === "") return
        if(this.prevNumber !== ""){
            this.compute()
        }
        this.operation = operation
        this.prevNumber = this.currentNumber
        this.currentNumber = ""
    }

    getDisplayNumber(number){
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split(".")[0])
        const decimalDigits = stringNumber.split(".")[1]
        let integerDisplay
        if(isNaN(integerDigits)){
            integerDisplay = ""
        }else{
            integerDisplay = integerDigits.toLocaleString("en",{
                maximumFractionDigits:0
            })
        }
        if(decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`
        }else{
            return integerDisplay
        }
        
    }
    updateDisplay(){
        this.currentNumberText.innerHTML =
            this.getDisplayNumber(this.currentNumber)
        if(this.operation != null){
            this.prevNumberText.innerHTML = `${this.prevNumber} ${this.operation}`
        }else{
            this.prevNumberText.innerHTML = ""

        }
        
    }
    compute(){
        let computation
        const prev = parseFloat(this.prevNumber)
        const current = parseFloat(this.currentNumber)
        
        if(isNaN(prev)||isNaN(current))return
        switch(this.operation){
            case "+":
                computation = prev + current
                break;
            case "-":
                computation= prev - current
                break;
            case "*":
                computation= prev * current
                break;
            case "%":
                computation= prev / current
                break;
            default:
                return
        }

        this.currentNumber = computation
        this.operation = ""
        this.prevNumber = ""
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-clear]')

const prevNumber = document.querySelector('[data-prevNumber]')
const currentNumber = document.querySelector('[data-currentNumber]')

const calculator = new Calculator(prevNumber,currentNumber)

numberButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        calculator.appendNumber(button.innerHTML)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        calculator.chooseOperation(button.innerHTML)
        calculator.updateDisplay()
    })
})

equalButton.addEventListener('click',()=>{
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click',()=>{
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click',()=>{
    calculator.delete()
    calculator.updateDisplay()
})


// if(this.currentNumber[this.currentNumber.length -1]==="-")return 
// if(this.currentNumber[this.currentNumber.length -1]==="+")return 
// if(this.currentNumber[this.currentNumber.length -1]==="%")return 
// if(this.currentNumber[this.currentNumber.length -1]==="*")return 
// if(this.currentNumber[this.currentNumber.length -1]===".")return 



