import { add } from "lodash";

const calculator = (a, b, op) => {
    switch(op){
        case '+' : 
            return a + b
        case '-' :
            return a - b
        case '*' : 
            return a * b
        case '/' : 
            return b === 0 ? 'error' : a / b
    }
}

export default calculator