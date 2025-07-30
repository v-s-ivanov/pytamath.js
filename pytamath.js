/* PYTAMATH.JS LIBRARY
 Download at: https://github.com/v-s-ivanov/pytamath.js
 Author: v-s-ivanov
 THIS CONTENT IS FREE TO USE AND REPRODUCE WITHOUT
 CREDITING THE AUTHOR. FEEL FREE TO USE ANY PART OF
 THIS FILE FOR PERSONAL AND COMMERCIAL PURPOSES.
 For more information, visit https://unlicense.org

 If you'd still like to credit the author, you may
 place a link to the Github account:
 https://github.com/v-s-ivanov

 You can link this library to your html file using
 the following link:
 https://raw.githubusercontent.com/v-s-ivanov/pytamath.js/refs/heads/main/pytamath.js
*/

const Pytamath = {}

Pytamath.csc = function(csc){ // Cosecant
    return 1 / Math.sin(csc);
}
Pytamath.sec = function(sec){ // Secant
    return 1 / Math.cos(sec);
}
Pytamath.cot = function(cot){ // Cotangent
    return 1 / Math.tan(cot);
}

Pytamath.acsc = function(csc){ // Inverse cosecant
    return Math.asin(1/csc);
}
Pytamath.asec = function(sec){ // Inverse secant
    return Math.acos(1/sec);
}
Pytamath.acot = function(cot){ // Inverse cotangent
    return Math.atan(1/cot);
}

Pytamath.roundNum = function(number, digits = 0){ // Rounding to specific digits
    return Math.round(number * Math.pow(10, digits)) / Math.pow(10, digits);
}
/* Example for roundNum:
    Pytamath.roundNum(123.45678, 2) - round the number 123.45678 to 2 digits after .
    123.45678 -> 12345.678 -> 12346 -> 123.46
*/

Pytamath.toRadians = function(num){ // Degrees to radians converter
    return num * Math.PI / 180;
}

Pytamath.toDegrees = function(num){ // Radians to degrees converter
    return num * 180 / Math.PI;
}

Pytamath.factorial = function(num){ // Factorial (eg. 3! = 3 * 2 * 1 = 6)
    let result = 1
    if(num > 0){
        for(let i = num; i >= 0; i--)
            result *= i
    }
    else if(num < 0){
        result = null
    }
    return result
}

Pytamath.superfactorial = function(num){ // Superfactorial (eg. 3$ = 3! * 2! * 1! = 12)
    let result = 1
    if(num > 0){
        for(let i = num; i >= 0; i--)
            result *= Pytamath.factorial(i)
    }
    else if(num < 0){
        result = null
    }
    return result
}

Pytamath.hyperfactorial = function(num){ // Hyperfactorial (eg. H(3) = 3^3 * 2^2 * 1^1 = 36)
    let result = 1
    if(num > 0){
        for(let i = num; i >= 0; i--)
            result *= Math.pow(i,i)
    }
    else if(num < 0){
        result = null
    }
    return result
}

// NOTE that 0!, 0$ and H(0) are all equal to 1

Pytamath.quadraticEquation = function(a, b, c, rule = ""){ // ax^2 + bx + c = 0; returns an array of one or two numbers (or null)
    const discriminant = b*b - 4*a*c
    let positiveResult = null, negativeResult = null

    const results = []
    if(discriminant >= 0){
        positiveResult = (-b + Math.sqrt(discriminant)) / (2 * a)
        if(Pytamath.checkCondition(positiveResult, rule)) results.push(positiveResult)
        negativeResult = (-b - Math.sqrt(discriminant)) / (2 * a)
        if(Pytamath.checkCondition(negativeResult, rule)) results.push(negativeResult)
    }
    if(results.length == 0) return [null]
    else return results
}

Pytamath.biquadraticEquation = function(a,b,c, rule = ""){ // ax^4 + bx^2 + c = 0; returns an array
    const num1 = Pytamath.quadraticEquation(a,b,c)[0]
    const num2 = Pytamath.quadraticEquation(a,b,c)[1]
    let x

    console.log(num1)
    console.log(num2)

    const results = []
    if(num1 >= 0){
        x = Math.sqrt(num1)
        if(Pytamath.checkCondition(x, rule)) results.push(x)
        x = -Math.sqrt(num1)
        if(Pytamath.checkCondition(x, rule)) results.push(x)
    }
    if(num2 >= 0 && num1 != num2){
        x = Math.sqrt(num2)
        if(Pytamath.checkCondition(x, rule)) results.push(x)
        x = -Math.sqrt(num2)
        if(Pytamath.checkCondition(x, rule)) results.push(x)
    }
    if(results.length == 0) return [null]
    else return results
}

Pytamath.isNumber = function(value) { // Checks if a value is a number by multiplying it by 1
  return value * 1 == value
}

Pytamath.checkCondition = function(value = 0, condition = ""){ // Checks a condition and returns either true or false
    let sign = "", number = " ", positive = true
    for(let i = 0; i < condition.length; i++){
        if(condition[i] == "=" || condition[i] == ">" || condition[i] == "<"){
            sign += condition[i]
        }
        if(Pytamath.isNumber(condition[i])){
            number += condition[i]
        }
        if(condition[i] == "-") positive = false
    }
    number = number.replace(" ", "")
    if(!positive) number = -number
    switch(sign){
        case "=":
        case "==":
            return value == number // Equal to
            break;
        case ">":
            return value > number // Greater than
            break;
        case "<":
            return value < number // Less than
            break;
        case ">=":
        case "=>":
        case "≥":
            return value >= number 
            break;
        case "<=":
        case "=<":
        case "≤":
            return value <= number
            break;
        default:
            return true
            break;
    }
}

// Temperature conversion

Pytamath.toCelsius = function(value, unit = "f"){
    switch(unit){
        case "f":
        case "F":
        case "fahrenheit":
        case "Fahrenheit":
            return (value - 32) * 5/9
            break;
        case "k":
        case "K":
        case "kelvin":
        case "Kelvin":
            return value - 273.15
            break;
        default:
            return null
    }
}

Pytamath.toFahrenheit = function(value, unit = "c"){
    switch(unit){
        case "c":
        case "C":
        case "celsius":
        case "Celsius":
            return value * 9/5 + 32
            break;
        case "k":
        case "K":
        case "kelvin":
        case "Kelvin":
            return this.toFahrenheit(value - 273.15)
            break;
        default:
            return null
    }
}

Pytamath.toKelvin = function(value, unit = "c"){
    switch(unit){
        case "c":
        case "C":
        case "celsius":
        case "Celsius":
            return value + 273.15
            break;
        case "f":
        case "f":
        case "fahrenheit":
        case "Fahrenheit":
            return this.toCelsius(value) + 273.15
            break;
        default:
            return null
    }
}

Pytamath.dayOfYear = function(value, leapYear = false, format = "DD/MM"){
    const monthSizes = [0,31,29,31,30,31,30,31,31,30,31,30,31],
    months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 
            'aug', 'sep', 'oct', 'nov', 'dec'],
    monthNames = [null, // 0 is not a month
    ['january', 'jan', 'January', 'Jan'],
    ['february', 'feb', 'February', 'Feb'],
    ['march', 'mar', 'March', 'Mar'],
    ['april', 'apr', 'April', 'Apr'],
    ['may', 'may', 'May', 'May'],
    ['june', 'jun', 'June', 'Jun'],
    ['july', 'jul', 'July', 'Jul'],
    ['august', 'aug', 'August', 'Aug'],
    ['september', 'sep', 'September', 'Sep'],
    ['october', 'oct', 'October', 'Oct'],
    ['november', 'nov', 'November', 'Nov'],
    ['december', 'dec', 'December', 'Dec']
]

    value = value.toLowerCase()
    value = value.replace(" ", "")
    value = value.replace(10, "X")
    value = value.replace(20, "XX")
    value = value.replace(30, "XXX")
    value = value.replace(0, "")
    value = value.replace("X", 10)
    value = value.replace("XX", 20)
    value = value.replace("XXX", 30)
    value = value.replace("st", "")
    value = value.replace("nd", "")
    value = value.replace("rd", "")
    value = value.replace("th", "")
    value = value.replace("of", "")
    value = value.replace("-", "/")
    value = value.replace(".", "/")
    value = value.replace("\\", "/")

    format = format.toLowerCase()
    format = format.replace(" ", "")
    format = format.replace("-", "/")
    format = format.replace(".", "/")
    format = format.replace("\\", "/")
    switch(format){
        case "dd/mm":
        for(let i = 1; i < monthNames.length; i++){
            for(let j = 0; j < monthNames[i].length; j++){
                value = value.replace(monthNames[i][j], "/" + i)
            }
        }
        break;
        case "mm/dd":
        for(let i = 0; i < monthNames.length; i++){
            for(let j = 0; j < monthNames[i].length; j++){
                value = value.replace(monthNames[i][j], i + "/")
            }
        }
        break;
    }


    let day = "", month = "", dayDone = false, dayCount = 0
    for(let i = 0; i < value.length; i++){
        if(Pytamath.isNumber(value[i]) && !dayDone){
            day += value[i]
            if(day.length == 2){
                dayDone = true
                day = parseInt(day)
                if(day < 1 || day > 31) return null // Invalid day
            }
        }
        else if(Pytamath.isNumber(value[i]) && dayDone){
            month += value[i]
            if(month.length == 2 || value.length == i + 1){
                month = parseInt(month)
                if(month < 1 || month > 12) return null // Invalid month
                break
            }
        }
        else if(value[i] == "/" || value[i] == "-" || value[i] == "."){
            dayDone = true
        }
    }
    if(day > monthSizes[month]) return null // Invalid day for the month

    for(let i = month; i > 0; i--){
        if(i != month){
            if(!leapYear && i == 2)
                dayCount += monthSizes[i] - 1
            else dayCount += monthSizes[i]
        }
        else{
            dayCount += day * 1
        }
    }
    return dayCount
}

console.log(Pytamath.dayOfYear("8th of Feb", true, "dd/mm"))