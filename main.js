const calc = document.querySelector('.calc');
const calcInfo = document.querySelector('.calc__info');
const calcBack = document.querySelector('.clac__info--end');

const singArrow = ['%', '+/-', '/', '+', '-', '√'];
let tempStart = '';
let tempEnd = '';
let sign = '';
let result = '';
function reset() {
    tempStart = '';
    tempEnd = '';
    sign = '';
    calcBack.textContent = '';
    calcInfo.textContent = '0';

}
calc.addEventListener('click', function (e) {
    let entKey = e.target.textContent;

    if (entKey == 'c') {
        console.log(entKey);
        reset();
    }
    if (entKey == '←') {
        // Добавить if для calcBlack
        if (tempStart.length > 1) {
            tempStart = tempStart.slice(0, -1);
            calcInfo.textContent = tempStart;
            calcBack.textContent = '';
            sign = '';
        }

        else {
            calcInfo.textContent = '0';
            tempStart = '';
        }
    };
    if (tempEnd == '' && sign == '') {
        if (e.target.classList.contains('calc__num--fig')) {
            tempStart += entKey;
            calcInfo.textContent = tempStart;
        }
    }

    if (singArrow.includes(entKey) && !tempStart == '') {
        sign = entKey;
        calcInfo.textContent = sign;
        calcBack.textContent = tempStart;
    }
    console.log(!tempStart == '' && !sign == '');
    if (!tempStart == '' && !sign == '') {
        if (e.target.classList.contains('calc__num--fig')) {
            tempEnd += entKey;
            calcInfo.textContent = tempEnd;
            calcBack.textContent = tempStart + sign;
        }
    }
    if (entKey == "=") {
        switch (sign) {
            case '+':
                result = +tempStart + +tempEnd;
                break;
            case '-':
                result = tempStart - tempEnd;
                break;
            case '*':
                result = tempStart * tempEnd;
                break;
            case '/':
                result = tempStart / tempEnd;
                break;
            case '√':
                result = Math.sqrt(tempStart);
                break;
        }
        calcInfo.textContent = result;
        console.log(tempStart, tempEnd, sign, result)
    }

})
