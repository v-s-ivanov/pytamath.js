/* PYTAMATH.JS LIBRARY
 Download at: https://github.com/v-s-ivanov/pytamath.js
 Author: v-s-ivanov
 THIS CONTENT IS FREE TO USE AND REPRODUCE WITHOUT
 CREDITING THE AUTHOR. FEEL FREE TO USE ANY PART OF
 THIS FILE FOR PERSONAL AND COMMERCIAL PURPOSES.
 For more information, visit https://unlicense.org

 If you'd still like to credit the author, you may
 place a link to his Github account:
 https://github.com/v-s-ivanov

 You can link this library to your html file using
 the following link:
 https://raw.githubusercontent.com/v-s-ivanov/pytamath.js/refs/heads/master/pytamath.js

 Version: 0.3.0-alpha
 Production-ready: No
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
        ['january', 'jan'],
        ['february', 'feb'],
        ['march', 'mar'],
        ['april', 'apr'],
        ['may', 'may'],
        ['june', 'jun'],
        ['july', 'jul'],
        ['august', 'aug'],
        ['september', 'sep'],
        ['october', 'oct'],
        ['november', 'nov'],
        ['december', 'dec']
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
            default:
                return "Invalid date format, accepted values are 'dd/mm' and 'mm/dd'"
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

Pytamath.isLeapYear = function(year){ // Checks if a year is a leap year
    if(year < 0) return null // Negative years are not supported
    if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
        return true // Leap year
    }
    else{
        return false // Not a leap year
    }
}

Pytamath.root = function(value, root = 2){ // Returns the root of a number
    return Math.pow(value, 1 / root);
}

Pytamath.gcd = function(a, b){ // Greatest common divisor
    if(b == 0) return a;
    else if(a == 0) return b;
    else if(a == b) return a;
    else if(a < 0 || b < 0) return null; // Negative numbers
    else if(a == 1 || b == 1) return 1; // If one of the numbers is 1, the GCD is 1
    else if(a == 0 && b == 0) return null; // If both numbers are 0, the GCD is undefined
    else{
        let smallestnum = Math.min(a, b)
        for(let i = smallestnum; i > 0; i--){
            if(a % i == 0 && b % i == 0) {
                return i;
                break
            }
        }
    }
}

Pytamath.lcm = function(a, b){ // Least common multiple
    if(a == 0 || b == 0) return 0; // If one of the numbers is 0, the LCM is 0
    else if(a < 0 || b < 0) return null; // Negative numbers
    else if(a == b) return a; // If both numbers are equal, the LCM is the number itself
    else{
        let smallestnum = Math.min(a, b)
        for(let i = smallestnum; i <= a * b; i++){
            if(i % a == 0 && i % b == 0) {
                return i;
                break
            }
        }
    }
}

Pytamath.isPrime = function(num){ // Checks if a number is prime
    if(num < 2) return false; // 0 and 1 are not prime numbers
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i == 0) return false; // If the number is divisible by any number other than 1 and itself, it is not prime
    }
    return true; // If no divisors were found, the number is prime
}

Pytamath.nthPrime = function(n){
    let count = 0
    for(let i = 2; count < n; i++){
        if(Pytamath.isPrime(i)){
            count++;
            if(count == n) return i; // If the count of prime numbers reaches n, return the current number
        }
    }
    return null; // If no prime number was found, return null
}

Pytamath.nthFibonacci = function(n){ // Fibonacci line: 0, 1, 0+1 = 1, 1+1 = 2, 1+2 = 3, 2+3 = 5, 3+5 = 8, 5+8 = 13 and so on... 
    let firstNum = 0, secondNum = 1
    for(let i = 0; i < n; i++){
        if(firstNum < secondNum){
            firstNum += secondNum
        }
        else{
            secondNum += firstNum
        }
    }
    return Math.min(firstNum,secondNum)
}

Pytamath.isFibonacci = function(num){ // Checks if a number is part of the Fibonacci line (see Pytamath.nthFibonacci)
    let fibonacciFound = false
    for(let i = 0; num >= this.nthFibonacci(i); i++){
        if(num == this.nthFibonacci(i)){
            fibonacciFound = true
            break;
        }
    }
    return fibonacciFound
}

Pytamath.random = function(min, max, digits = 0){
    return (Math.floor(Math.random() * (max * Math.pow(10, digits) - min * Math.pow(10, digits)) + 1 * Math.pow(10,digits)) + min * Math.pow(10, digits)) / Math.pow(10, digits)
}

Pytamath.randomDate = function(leapYear = true, format = "dd/mm"){
    format = format.toLowerCase()
    format = format.replace(" ", "")

    let dividingSign = format
    dividingSign = dividingSign.replace("d", "")
    dividingSign = dividingSign.replace("d", "")
    dividingSign = dividingSign.replace("m", "")
    dividingSign = dividingSign.replace("m", "")

    format = format.replace("-", "/")
    format = format.replace(".", "/")
    format = format.replace("\\", "/")

    const monthSizes = [0,31,29,31,30,31,30,31,31,30,31,30,31]
    if(!leapYear) monthSizes[2]--
    let month = Pytamath.random(1,12)
    let date = Pytamath.random(1, monthSizes[month])
    if(month < 10) month = `0${month}`
    if(date < 10) date = `0${date}`
    switch(format){
        case "dd/mm":
            return `${date}${dividingSign}${month}`
            break;
        case "mm/dd":
            return `${month}${dividingSign}${date}`
            break;
        default:
            return "Invalid date format, accepted values are 'dd/mm' and 'mm/dd'"
            break;
    }
}
<<<<<<< HEAD

Pytamath.randomTime = function(format = "hh:mm:ss"){
    format = format.toLowerCase()
    format = format.replace(" ", "")

    let dividingSign = format.replace("h", "")
    dividingSign = dividingSign.replace("h", "")
    dividingSign = dividingSign.replace("m", "")
    dividingSign = dividingSign.replace("m", "")
    dividingSign = dividingSign.replace("s", "")
    dividingSign = dividingSign.replace("s", "")

    format = format.replace("-", ":")
    format = format.replace(".", ":")
    format = format.replace("\\", ":")

    let hours = Pytamath.random(0, 23)
    let minutes = Pytamath.random(0, 59)
    let seconds = Pytamath.random(0, 59)

    if(hours < 10) hours = `0${hours}`
    if(minutes < 10) minutes = `0${minutes}`
    if(seconds < 10) seconds = `0${seconds}`

    switch(format){
        case "hh:mm:ss":
            return `${hours}${dividingSign}${minutes}${dividingSign}${seconds}`
            break;
        case "hh:mm":
            return `${hours}${dividingSign}${minutes}`
            break;
        case "mm:ss":
            return `${minutes}${dividingSign}${seconds}`
            break;
        default:
            return "Invalid time format, accepted values are 'hh:mm:ss' and 'mm:ss'"
            break;
    }
}

Pytamath.randomDateTime = function(leapYear = true, dateFormat = "dd/mm", timeFormat = "hh:mm:ss"){
    const date = Pytamath.randomDate(leapYear, dateFormat)
    const time = Pytamath.randomTime(timeFormat)
    return `${date} ${time}`
}

Pytamath.dateDifference = function(date1, date2, format = "dd/mm/yyyy"){
    format = format.toLowerCase()
    format = format.replace(" ", "")
    format = format.replace("-", "/")
    format = format.replace(".", "/")
    format = format.replace("\\", "/")

    const monthSizes = [0,31,29,31,30,31,30,31,31,30,31,30,31]
    let day1 = 0, month1 = 0, year1 = 0
    let day2 = 0, month2 = 0, year2 = 0
    let yearDifference, dayDifference, monthDifference
    
    date1 = date1.replace("30", "XXX")
    date1 = date1.replace("20", "XX")
    date1 = date1.replace("10", "X")
    date1 = date1.replace("0", "")
    date1 = date1.replace("XXX", 30)
    date1 = date1.replace("XX", 20)
    date1 = date1.replace("X", 10)

    
    date2 = date2.replace("30", "XXX")
    date2 = date2.replace("20", "XX")
    date2 = date2.replace("10", "X")
    date2 = date2.replace("0", "")
    date2 = date2.replace("XXX", 30)
    date2 = date2.replace("XX", 20)
    date2 = date2.replace("X", 10)

    switch(format) {
        case "dd/mm/yyyy":
        case "dd/mm/yy":
            day1 = parseInt(date1.split("/")[0]);
            month1 = parseInt(date1.split("/")[1]);
            year1 = parseInt(date1.split("/")[2]);

            day2 = parseInt(date2.split("/")[0]);
            month2 = parseInt(date2.split("/")[1]);
            year2 = parseInt(date2.split("/")[2]);
            break;
        case "mm/dd/yyyy":
        case "mm/dd/yy":
            month1 = parseInt(date1.split("/")[0]);
            day1 = parseInt(date1.split("/")[1]);
            year1 = parseInt(date1.split("/")[2]);

            month2 = parseInt(date2.split("/")[0]);
            day2 = parseInt(date2.split("/")[1]);
            year2 = parseInt(date2.split("/")[2]);
            break;
        case "yyyy/mm/dd":
        case "yy/mm/dd":
            year1 = parseInt(date1.split("/")[0]);
            month1 = parseInt(date1.split("/")[1]);
            day1 = parseInt(date1.split("/")[2]);

            year2 = parseInt(date2.split("/")[0]);
            month2 = parseInt(date2.split("/")[1]);
            day2 = parseInt(date2.split("/")[2]);
            break;
        case "yyyy/dd/mm":
        case "yy/dd/mm":
            year1 = parseInt(date1.split("/")[0]);
            day1 = parseInt(date1.split("/")[1]);
            month1 = parseInt(date1.split("/")[2]);

            year2 = parseInt(date2.split("/")[0]);
            day2 = parseInt(date2.split("/")[1]);
            month2 = parseInt(date2.split("/")[2]);
            break;
        default:
            return "Invalid date format, accepted values are 'dd/mm/yyyy', 'mm/dd/yyyy', 'yyyy/mm/dd', 'yyyy/mm/yy', 'yyyy/dd/mm'"
            break;

    }

    format = format.replace("yyyy", "yy")
    format = format.replace("yy/", "")
    format = format.replace("/yy", "")

    if(year1 > year2){
        const temp = day1
        day1 = day2
        day2 = temp
        const temp2 = month1
        month1 = month2
        month2 = temp2
        const temp3 = year1
        year1 = year2
        year2 = temp3
    }
    else if(year1 == year2 && month1 > month2){
        const temp = day1
        day1 = day2
        day2 = temp
        const temp2 = month1
        month1 = month2
        month2 = temp2
    }
    else if(year1 == year2 && month1 == month2 && day1 > day2){
        const temp = day1
        day1 = day2
        day2 = temp
    }

    if(day1 > day2){
        if(month2 != 1){
            day2 += monthSizes[month2 - 1]
            if(!Pytamath.isLeapYear(year2) && month2 == 2)
                day2 -= 1 // February in a non-leap year
        }
        else day2 += monthSizes[12]
        month2--
    }

    if(month1 > month2){
        month2 += 12
        year2--
    }

    yearDifference = year2 - year1
    dayDifference = day2 - day1
    monthDifference = month2 - month1
    if(monthDifference < 0){
        monthDifference += 12
        yearDifference--
    }

    return{
        years: yearDifference,
        months: monthDifference,
        days: dayDifference
    }
}