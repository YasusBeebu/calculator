const calculator = {

    displayValue: document.querySelector('.mainRow'), // shorthand

    currentValue: function () {
        return parseInt(this.displayValue.innerText)
    },


    storedValue: false,

    //Triggers

    mathAllow: true, // disable math button functions

    lastOperation: false, // store last operation for chaining

    showResult: true, // show value after math is done

    //-------------------------

    math: function (val) {
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
    //---------------------------------------------
    setValue: function (val) {
        this.mathAllow = true;
        if (this.showResult) {
            this.displayValue.innerText = ''
        }
        this.showResult = false
        this.displayValue.innerText += val;
    },

    //-----------------------------
    clear: function (full = false) {
        this.displayValue.innerText = 0;
        this.storedValue = false
        this.lastOperation = false
    },

    delete: function () {
        this.displayValue.innerText = this.displayValue.innerText.slice(0, -1);
    },

}

//Events binding
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
//document.querySelector.('..').onclick(operation.setValue())

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

//switch (val) {
//    case '+':
//        this.storedValue += this.currentValue()
//        break;
//    case '-':
//        this.storedValue -= this.currentValue()
//        break;
//    case '*':
//        this.storedValue *= this.currentValue()
//        break;
//    case '/':
//        this.storedValue /= this.currentValue()
//        break;
//}