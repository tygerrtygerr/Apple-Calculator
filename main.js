class Calculator { //creating a class that 
    constructor(previousOperandText, currentOperandText){ //where to place display text
        this.previousOperandText = previousOperandText; //these two lines is to know where to put text in calculator
        this.currentOperandText = currentOperandText;
        this.clear();
    }

    //next: define functions of what the calculator can do

    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined; //because no operation is selected if we clear
    }

    delete(){

    }

    appendNumber(number) { //to add numbers to the screen as user clicks them
        this.currentOperand = number;
    }

    chooseOperation(operation){ //when a user clicks an operation

    }
    
    compute(){ //takes values inside the calculator and compute what neesd to be displayed

    }

    updateDisplay() { //updates whats displayed on calculator
        this.currentOperandText.innerText = this.currentOperand;
    }

}

const numberButtons = document.querySelectorAll('[data-number');
const operationButtons = document.querySelectorAll('[data-number');
const equalsButton = document.querySelector('[data-equals');
const clearButton = document.querySelector('[data-clear]');
const previousOperandText = document.querySelector('[data-previous-operand');
const currentOperandText = document.querySelector('[data-current-operand');

const calculator = new Calculator(previousOperandText, currentOperandText); //calculator object

numberButtons.forEach(button => { //cycles through buttons from html
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})
