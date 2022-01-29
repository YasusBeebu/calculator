"Use Strict"
const calculator = {
    // shorthands

    displayValue: document.querySelector('.mainRow'),

    currentValue: function () {
        if (this.floatMode) {
            return parseFloat(this.displayValue.innerText)
        }
        return parseInt(this.displayValue.innerText)
    },

    //Triggers

    mathAllow: true, // disable math buttons like =-*/

    lastOperation: false, // store last operation for chaining purpose

    showResult: true, // Shows result on the display as temporary value, any input will override it

    floatMode: false, // Convert string into float or number

    floatDot: true, // Enable '.'


    //Logic

    storedValue: false, // Stack value for math

    math: function (val) {
        this.floatDot = true
        if (this.mathAllow) {
            if (!this.storedValue && !this.lastOperation) {
                this.storedValue = this.currentValue()

            } else {
                switch (this.lastOperation) {
                    case '+':
                        this.storedValue += this.currentValue()
                        break;
                    case '-':
                        this.storedValue -= this.currentValue()
                        break;
                    case '*':
                        this.storedValue *= this.currentValue()
                        break;
                    case '/':
                        this.storedValue /= this.currentValue()
                        break;
                }
            }
            this.displayValue.innerText = this.storedValue
            this.showResult = true
            this.mathAllow = false
        }
        this.lastOperation = val
    },

    //Input edit
    float: function () {
        if (this.floatDot) {
            this.displayValue.innerText += '.';
            this.floatDot = false
        }
        this.floatMode = true
    },

    setValue: function (val) {
        this.mathAllow = true;
        if (this.showResult) { // if value on the display is temp erase it
            this.displayValue.innerText = ''
        }
        this.showResult = false
        this.displayValue.innerText += val;
    },

    clear: function () {
        this.displayValue.innerText = 0;
        this.storedValue = false;
        this.lastOperation = false;
        this.showResult = true;
        this.floatDot = true;
        this.floatMode = false;
        this.mathAllow = true;
    },

    delete: function () {
        if (this.displayValue.innerText.slice(-1) === '.') {
            this.floatDot = true
        }
        this.displayValue.innerText = this.displayValue.innerText.slice(0, -1);
    },

}

// Event Bindings

const elementsArr = [
    '.deleteButton',
    '.clearButton',
    '.division',
    '.equals',
    '.multi',
    '.min',
    '.sum',
    '.dot',
    '.n9',
    '.n8',
    '.n7',
    '.n6',
    '.n5',
    '.n4',
    '.n3',
    '.n2',
    '.n1',
    '.n0'
]

function getElement(el_class) {
    return document.querySelector(el_class)
}

function clickAnimation() {
    this.classList.add('pressTheButton');
    setTimeout(() => (this.classList.remove('pressTheButton')), 150);
}

function bindOnClick(el_class) {
    getElement(el_class).addEventListener('click', clickAnimation)
}

elementsArr.forEach(el => (bindOnClick(el, clickAnimation))) //add press animation

getElement('.n0').addEventListener('click', () => (calculator.setValue(0)));
getElement('.n1').addEventListener('click', () => (calculator.setValue(1)))
getElement('.n2').addEventListener('click', () => (calculator.setValue(2)))
getElement('.n3').addEventListener('click', () => (calculator.setValue(3)))
getElement('.n4').addEventListener('click', () => (calculator.setValue(4)))
getElement('.n5').addEventListener('click', () => (calculator.setValue(5)))
getElement('.n6').addEventListener('click', () => (calculator.setValue(6)))
getElement('.n7').addEventListener('click', () => (calculator.setValue(7)))
getElement('.n8').addEventListener('click', () => (calculator.setValue(8)))
getElement('.n9').addEventListener('click', () => (calculator.setValue(9)))
getElement('.dot').addEventListener('click', () => (calculator.float()))
getElement('.sum').addEventListener('click', () => (calculator.math('+')))
getElement('.min').addEventListener('click', () => (calculator.math('-')))
getElement('.multi').addEventListener('click', () => (calculator.math('*')))
getElement('.division').addEventListener('click', () => (calculator.math('/')))
getElement('.equals').addEventListener('click', () => (calculator.math('=')))
getElement('.clearButton').addEventListener('click', () => (calculator.clear()))
getElement('.deleteButton').addEventListener('click', () => (calculator.delete()))

//Key Bindings
function keyAnimation(element_class) {// keyboard press animations
    getElement(element_class).classList.add('pressTheButton');
    setTimeout(() => (getElement(element_class).classList.remove('pressTheButton')), 150);
}
window.addEventListener('keydown', function (event) {
    switch (event.code) {
        case 'Numpad1':
        case 'Digit1':
            keyAnimation('.n1')
            calculator.setValue(1)
            break;
        case 'Numpad2':
        case 'Digit2':
            keyAnimation('.n2')
            calculator.setValue(2)
            break;
        case 'Numpad3':
        case 'Digit3':
            keyAnimation('.n3')
            calculator.setValue(3)
            break;
        case 'Numpad4':
        case 'Digit4':
            keyAnimation('.n4')
            calculator.setValue(4)
            break;
        case 'Numpad5':
        case 'Digit5':
            keyAnimation('.n5')
            calculator.setValue(5)
            break;
        case 'Numpad6':
        case 'Digit6':
            keyAnimation('.n6')
            calculator.setValue(6)
            break;
        case 'Numpad7':
        case 'Digit7':
            keyAnimation('.n7')
            calculator.setValue(7)
            break;
        case 'Numpad8':
        case 'Digit8':
            keyAnimation('.n8')
            calculator.setValue(8)
            break;
        case 'Numpad9':
        case 'Digit9':
            keyAnimation('.n9')
            calculator.setValue(9)
            break;
        case 'Numpad0':
        case 'Digit0':
            keyAnimation('.n0')
            calculator.setValue(0)
            break;
        case 'NumpadAdd':
        case 'Equal':
            keyAnimation('.sum')
            calculator.math('+')
            break;
        case 'NumpadSubtract':
        case 'Minus':
            keyAnimation('.min')
            calculator.math('-')
            break;
        case 'NumpadDivide':
            keyAnimation('.division')
            calculator.math('/')
            break;
        case 'NumpadMultiply':
            keyAnimation('.multi')
            calculator.math('*')
            break;
        case 'NumpadDecimal':
            keyAnimation('.dot')
            calculator.float()
            break;
        case 'NumpadEnter':
        case 'Enter':
            keyAnimation('.equals')
            calculator.math('=')
            break;
        case 'Backspace':
            keyAnimation('.deleteButton')
            calculator.delete()
            break;
    }

});