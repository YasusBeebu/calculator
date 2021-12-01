const calculator = {

    displayValue: document.querySelector('.mainRow'),

    stack: 0,

    lastOperation: '',

    mathAllow: true,

    temp: 0,

    '+': function () {
        if (this.mathAllow) {
            let temp = this.displayValue.innerText
            this.clear();
            this.stack += parseInt(temp);
            this.clear();
            this.mathAllow = false;
            this.lastOperation = '+'
        }
    },


    setValue: function (val) {
        this.displayValue.innerText += val;
        this.mathAllow = true;
    },

    clear: function (full = false) {
        this.displayValue.innerText = '';
        if (full) {
            this.stack = 0;
        }
    },

    delete: function () {
        this.displayValue.innerText = this.displayValue.innerText.slice(0, -1);
    },

    equals: function () {
        switch(this.lastOperation){
            case '+': this['+']();
            break;
        }
        this.displayValue.innerText = this.stack
        this.mathAllow = true
    }
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
    calculator['+']()
}
//document.querySelector('.division').onclick = function(){calculator.operation('/')}
//document.querySelector('.min').onclick = function(){calculator.operation('-')}
//document.querySelector('.multi').onclick = function(){calculator.operation('*')}
document.querySelector('.equals').onclick = function () {
    calculator.equals()
}

function test() {
    return Array.from(calculator.displayValue.innerText);
}

let numTest = test()

let arr = [986, '*', 585, '-', 955]