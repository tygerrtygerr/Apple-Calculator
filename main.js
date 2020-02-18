//TODO fix display not clearing after computation and another number is entered
//TODO fix the +/- button
//TODO add computations with percentages
//TODO add a delete button that replaces the clear button whenever there are numbers on the display 

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
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
        //this saves all the numbers except the one at the end
    }

    appendNumber(number) { //to add numbers to the screen as user clicks them
        if(number === '.' && this.currentOperand.includes('.')) return; //so u can only add one decimal

        this.currentOperand = this.currentOperand.toString() + number.toString(); //convert to string because
        //we want numbers to be appended, not added together
    }

    chooseOperation(operation){ //when a user clicks an operation
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }

        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }
    
    compute(){ //takes values inside the calculator and compute what neesd to be displayed
        let computation;
        const previous = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if(isNaN(previous) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                computation = previous + current;
                break;
            case 'x':
                computation = previous * current;
                break;
            case '-':
                computation = previous - current;
                break;
            case '÷':
                computation = previous / current;
                break;
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand - '';
    }

    getDisplayNumber(number){
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]) //puts into an array
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay;
        if(isNaN(integerDigits)) {
            integerDisplay = '';
        }else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0 })
        }
        if(decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        }else {
            return integerDisplay;
        }
        
    }
    

    updateDisplay() { //updates whats displayed on calculator
        this.currentOperandText.innerText = this.getDisplayNumber(this.currentOperand)
        if(this.operation != null){
            this.previousOperandText.innerText = `${this.previousOperand} ${this.operation}`;
        } else {
            this.previousOperandText.innerText = ''; //to clear the previous operand with ac
        }
        
    }

}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-clear]');
const previousOperandText = document.querySelector('[data-previous-operand]');
const currentOperandText = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandText, currentOperandText); //calculator object

numberButtons.forEach(button => { //cycles through buttons from html
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})

clearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})

//TODO add deletebutton const and event listener