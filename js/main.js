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

    showResult: true, // Shows result on display as temporary value, any input will override it

    floatMode: false, // Convert string into float or number

    floatDot: true, // Enable .


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
    },

    delete: function () {
        if (this.displayValue.innerText.slice(-1) === '.') {
            this.floatDot = true
        }
        this.displayValue.innerText = this.displayValue.innerText.slice(0, -1);
    },

}

//Html Events binding
document.querySelector('.n7').onclick = function () {
    calculator.setValue(7)
}
document.querySelector('.n8').onclick = function () {
    calculator.setValue(8)
}
document.querySelector('.n9').onclick = function () {
    calculator.setValue(9)
}
document.querySelector('.n4').onclick = function () {
    calculator.setValue(4)
}
document.querySelector('.n5').onclick = function () {
    calculator.setValue(5)
}
document.querySelector('.n6').onclick = function () {
    calculator.setValue(6)
}
document.querySelector('.n1').onclick = function () {
    calculator.setValue(1)
}
document.querySelector('.n2').onclick = function () {
    calculator.setValue(2)
}
document.querySelector('.n3').onclick = function () {
    calculator.setValue(3)
}
document.querySelector('.n0').onclick = function () {
    calculator.setValue(0)
}
document.querySelector('.dot').onclick = function () {
    calculator.float()
}

document.querySelector('.sum').onclick = function () {
    calculator.math('+')
}
document.querySelector('.division').onclick = function () {
    calculator.math('/')
}
document.querySelector('.min').onclick = function () {
    calculator.math('-')
}
document.querySelector('.multi').onclick = function () {
    calculator.math('*')
}
document.querySelector('.equals').onclick = function () {
    calculator.math('=')
}

//KeyBindings

window.addEventListener('keyup', function (event) {
    switch (event.code) {
        case 'Numpad1':
        case 'Digit1':
            calculator.setValue(1)
            break;
        case 'Numpad2':
        case 'Digit2':
            calculator.setValue(2)
            break;
        case 'Numpad3':
        case 'Digit3':
            calculator.setValue(3)
            break;
        case 'Numpad4':
        case 'Digit4':
            calculator.setValue(4)
            break;
        case 'Numpad5':
        case 'Digit5':
            calculator.setValue(5)
            break;
        case 'Numpad6':
        case 'Digit6':
            calculator.setValue(6)
            break;
        case 'Numpad7':
        case 'Digit7':
            calculator.setValue(7)
            break;
        case 'Numpad8':
        case 'Digit8':
            calculator.setValue(8)
            break;
        case 'Numpad9':
        case 'Digit9':
            calculator.setValue(9)
            break;
        case 'Numpad0':
        case 'Digit0':
            calculator.setValue(0)
            break;
        case 'NumpadAdd':
        case 'Equal':
            calculator.math('+')
            break;
        case 'NumpadSubtract':
        case 'Minus':
            calculator.math('-')
            break;
        case 'NumpadDivide':
            calculator.math('/')
            break;
        case 'NumpadMultiply':
            calculator.math('*')
            break;
        case 'NumpadDecimal':
            calculator.float()
            break;
        case 'NumpadEnter':
        case 'Enter':
            calculator.math('=')
            break;
        case 'Backspace':
            calculator.delete()
            break;
    }

});