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

 Version: 0.5.0-alpha
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
    dividingSign = dividingSign.replaceAll("d", "")
    dividingSign = dividingSign.replaceAll("m", "")

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

Pytamath.randomTime = function(format = "hh:mm:ss"){
    format = format.toLowerCase()
    format = format.replace(" ", "")

    format = format.replaceAll("i", "m")

    let dividingSign = format.replaceAll("h", "")
    dividingSign = dividingSign.replaceAll("m", "")
    dividingSign = dividingSign.replaceAll("s", "")

    format = format.replace("-", ":")
    format = format.replace(".", ":")
    format = format.replace("\\", ":")

    if(dividingSign.length > 1){
        dividingSign = dividingSign[0]
    }

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

const date = new Date()
Pytamath.currentDate = function(format = "dd/mm/yyyy"){
    format = format.toLowerCase()
    format = format.replace(" ", "")

    let dividingSign = format.replaceAll("d", "")
    dividingSign = dividingSign.replaceAll("m", "")
    dividingSign = dividingSign.replaceAll("y", "")
    dividingSign = dividingSign.replace(dividingSign[0], "")

    let day = date.getDate()
    let month = date.getMonth() + 1 // Months are 0-indexed in JavaScript
    let year = date.getFullYear()
    if(day < 10) day = `0${day}`
    if(month < 10) month = `0${month}`
    switch(format){
        case "dd/mm/yyyy":
            return `${day}${dividingSign}${month}${dividingSign}${year}`
            break;
        case "mm/dd/yyyy":
            return `${month}${dividingSign}${day}${dividingSign}${year}`
            break;
        case "yyyy/mm/dd":
            return `${year}${dividingSign}${month}${dividingSign}${day}`
            break;
        case "yyyy/dd/mm":
            return `${year}${dividingSign}${day}${dividingSign}${month}`
            break;
        case "dd/mm/yy":
            return `${day}${dividingSign}${month}${dividingSign}${year.toString().slice(-2)}`
            break;
        case "mm/dd/yy":
            return `${month}${dividingSign}${day}${dividingSign}${year.toString().slice(-2)}`
            break;
        case "yy/mm/dd":
            return `${year.toString().slice(-2)}${dividingSign}${month}${dividingSign}${day}`
            break;
        case "yy/dd/mm":
            return `${year.toString().slice(-2)}${dividingSign}${day}${dividingSign}${month}`
            break;
        default:
            return "Invalid date format, accepted values are 'dd/mm/yyyy', 'mm/dd/yyyy', 'yyyy/mm/dd', 'yyyy/dd/mm', 'dd/mm/yy', 'mm/dd/yy', 'yy/mm/dd', 'yy/dd/mm'"
            break;
    }
}

Pytamath.dateDifference = function(date1, date2 = "", format = "dd/mm/yyyy"){
    format = format.toLowerCase()
    format = format.replaceAll(" ", "")
    format = format.replaceAll("-", "/")
    format = format.replaceAll(".", "/")
    format = format.replaceAll("\\", "/")

    if(date2 == "" || date2 == "today") date2 = Pytamath.currentDate(format)

    const monthSizes = [0,31,29,31,30,31,30,31,31,30,31,30,31]
    let day1 = 0, month1 = 0, year1 = 0
    let day2 = 0, month2 = 0, year2 = 0
    let yearDifference, dayDifference, monthDifference, weekDifference, totalDayDifference = 0
    
    date1 = date1.toLowerCase()
    date1 = date1.replaceAll(" ", "")
    date1 = date1.replaceAll("-", "/")
    date1 = date1.replaceAll(".", "/")
    date1 = date1.replaceAll("\\", "/")

    date2 = date2.toLowerCase()
    date2 = date2.replaceAll(" ", "")
    date2 = date2.replaceAll("-", "/")
    date2 = date2.replaceAll(".", "/")
    date2 = date2.replaceAll("\\", "/")

    switch(format) {
        case "dd/mm/yyyy":
        case "dd/mm/yy":
            day1 = date1.split("/")[0];
            month1 = date1.split("/")[1];
            year1 = parseInt(date1.split("/")[2]);

            day2 = date2.split("/")[0];
            month2 = date2.split("/")[1];
            year2 = parseInt(date2.split("/")[2]);
            break;
        case "mm/dd/yyyy":
        case "mm/dd/yy":
            month1 = date1.split("/")[0];
            day1 = date1.split("/")[1];
            year1 = parseInt(date1.split("/")[2]);

            month2 = date2.split("/")[0];
            day2 = date2.split("/")[1];
            year2 = parseInt(date2.split("/")[2]);
            break;
        case "yyyy/mm/dd":
        case "yy/mm/dd":
            year1 = parseInt(date1.split("/")[0]);
            month1 = date1.split("/")[1];
            day1 = date1.split("/")[2];

            year2 = parseInt(date2.split("/")[0]);
            month2 = date2.split("/")[1];
            day2 = date2.split("/")[2];
            break;
        case "yyyy/dd/mm":
        case "yy/dd/mm":
            year1 = parseInt(date1.split("/")[0]);
            day1 = date1.split("/")[1];
            month1 = date1.split("/")[2];

            year2 = parseInt(date2.split("/")[0]);
            day2 = date2.split("/")[1];
            month2 = date2.split("/")[2];
            break;
        default:
            return "Invalid date format, accepted values are 'dd/mm/yyyy', 'mm/dd/yyyy', 'yyyy/mm/dd', 'yyyy/mm/yy', 'yyyy/dd/mm'"
            break;

    }

    format = format.replace("yyyy", "yy")
    format = format.replace("yy/", "")
    format = format.replace("/yy", "")


    day1 = day1.replaceAll("30", "XXX")
    day1 = day1.replaceAll("20", "XX")
    day1 = day1.replaceAll("10", "X")
    day1 = day1.replaceAll("0", "")
    day1 = day1.replaceAll("XXX", 30)
    day1 = day1.replaceAll("XX", 20)
    day1 = day1.replaceAll("X", 10)

    month1 = month1.replaceAll("10", "X")
    month1 = month1.replaceAll("0", "")
    month1 = month1.replaceAll("X", 10)

    day2 = day2.replaceAll("30", "XXX")
    day2 = day2.replaceAll("20", "XX")
    day2 = day2.replaceAll("10", "X")
    day2 = day2.replaceAll("0", "")
    day2 = day2.replaceAll("XXX", 30)
    day2 = day2.replaceAll("XX", 20)
    day2 = day2.replaceAll("X", 10)

    month2 = month2.replaceAll("10", "X")
    month2 = month2.replaceAll("0", "")
    month2 = month2.replaceAll("X", 10)

    month1 = parseInt(month1)
    month2 = parseInt(month2)
    day1 = parseInt(day1)
    day2 = parseInt(day2)

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

    for(let i = year1; i < year2; i++){
        if(Pytamath.isLeapYear(i)) totalDayDifference += 366
        else totalDayDifference += 365
    }

    totalDayDifference -= ((Pytamath.isLeapYear(year1) ? 366 : 365) - Pytamath.dayOfYear(`${day1}/${month1}`, Pytamath.isLeapYear(year1), format))
    totalDayDifference += Pytamath.dayOfYear(`${day2}/${month2}`, Pytamath.isLeapYear(year2), format)

    yearDifference = year2 - year1
    dayDifference = day2 - day1
    monthDifference = month2 - month1
    weekDifference = Math.floor(dayDifference / 7)
    dayDifference %= 7
    if(monthDifference < 0){
        monthDifference += 12
        yearDifference--
    }

    return{
        years: yearDifference,
        months: monthDifference,
        weeks: weekDifference,
        days: dayDifference,
        totalDays: totalDayDifference
    }
}

Pytamath.PeriodicTable = [
    null,
    { sign: "h",  name: "Hydrogen",     atomicWeight: 1.008,    group: 1,  period: 1 },
    { sign: "he", name: "Helium",       atomicWeight: 4.0026,   group: 18, period: 1 },
    { sign: "li", name: "Lithium",      atomicWeight: 6.94,     group: 1,  period: 2 },
    { sign: "be", name: "Beryllium",    atomicWeight: 9.0122,   group: 2,  period: 2 },
    { sign: "b",  name: "Boron",        atomicWeight: 10.81,    group: 13, period: 2 },
    { sign: "c",  name: "Carbon",       atomicWeight: 12.011,   group: 14, period: 2 },
    { sign: "n",  name: "Nitrogen",     atomicWeight: 14.007,   group: 15, period: 2 },
    { sign: "o",  name: "Oxygen",       atomicWeight: 15.999,   group: 16, period: 2 },
    { sign: "f",  name: "Fluorine",     atomicWeight: 18.998,   group: 17, period: 2 },
    { sign: "ne", name: "Neon",         atomicWeight: 20.180,   group: 18, period: 2 },
    { sign: "na", name: "Sodium",       atomicWeight: 22.990,   group: 1,  period: 3 },
    { sign: "mg", name: "Magnesium",    atomicWeight: 24.305,   group: 2,  period: 3 },
    { sign: "al", name: "Aluminum",     atomicWeight: 26.982,   group: 13, period: 3 },
    { sign: "si", name: "Silicon",      atomicWeight: 28.085,   group: 14, period: 3 },
    { sign: "p",  name: "Phosphorus",   atomicWeight: 30.974,   group: 15, period: 3 },
    { sign: "s",  name: "Sulfur",       atomicWeight: 32.06,    group: 16, period: 3 },
    { sign: "cl", name: "Chlorine",     atomicWeight: 35.45,    group: 17, period: 3 },
    { sign: "ar", name: "Argon",        atomicWeight: 39.948,   group: 18, period: 3 },
    { sign: "k",  name: "Potassium",    atomicWeight: 39.098,   group: 1,  period: 4 },
    { sign: "ca", name: "Calcium",      atomicWeight: 40.078,   group: 2,  period: 4 },
    { sign: "sc", name: "Scandium",     atomicWeight: 44.956,   group: 3,  period: 4 },
    { sign: "ti", name: "Titanium",     atomicWeight: 47.867,   group: 4,  period: 4 },
    { sign: "v",  name: "Vanadium",     atomicWeight: 50.942,   group: 5,  period: 4 },
    { sign: "cr", name: "Chromium",     atomicWeight: 51.996,   group: 6,  period: 4 },
    { sign: "mn", name: "Manganese",    atomicWeight: 54.938,   group: 7,  period: 4 },
    { sign: "fe", name: "Iron",         atomicWeight: 55.845,   group: 8,  period: 4 },
    { sign: "co", name: "Cobalt",       atomicWeight: 58.933,   group: 9,  period: 4 },
    { sign: "ni", name: "Nickel",       atomicWeight: 58.693,   group: 10, period: 4 },
    { sign: "cu", name: "Copper",       atomicWeight: 63.546,   group: 11, period: 4 },
    { sign: "zn", name: "Zinc",         atomicWeight: 65.38,    group: 12, period: 4 },
    { sign: "ga", name: "Gallium",      atomicWeight: 69.723,   group: 13, period: 4 },
    { sign: "ge", name: "Germanium",    atomicWeight: 72.630,   group: 14, period: 4 },
    { sign: "as", name: "Arsenic",      atomicWeight: 74.922,   group: 15, period: 4 },
    { sign: "se", name: "Selenium",     atomicWeight: 78.971,   group: 16, period: 4 },
    { sign: "br", name: "Bromine",      atomicWeight: 79.904,   group: 17, period: 4 },
    { sign: "kr", name: "Krypton",      atomicWeight: 83.798,   group: 18, period: 4 },
    { sign: "rb", name: "Rubidium",     atomicWeight: 85.468,   group: 1,  period: 5 },
    { sign: "sr", name: "Strontium",    atomicWeight: 87.62,    group: 2,  period: 5 },
    { sign: "y",  name: "Yttrium",      atomicWeight: 88.906,   group: 3,  period: 5 },
    { sign: "zr", name: "Zirconium",    atomicWeight: 91.224,   group: 4,  period: 5 },
    { sign: "nb", name: "Niobium",      atomicWeight: 92.906,   group: 5,  period: 5 },
    { sign: "mo", name: "Molybdenum",   atomicWeight: 95.95,    group: 6,  period: 5 },
    { sign: "tc", name: "Technetium",   atomicWeight: 98,       group: 7,  period: 5 },
    { sign: "ru", name: "Ruthenium",    atomicWeight: 101.07,   group: 8,  period: 5 },
    { sign: "rh", name: "Rhodium",      atomicWeight: 102.91,   group: 9,  period: 5 },
    { sign: "pd", name: "Palladium",    atomicWeight: 106.42,   group: 10, period: 5 },
    { sign: "ag", name: "Silver",       atomicWeight: 107.87,   group: 11, period: 5 },
    { sign: "cd", name: "Cadmium",      atomicWeight: 112.41,   group: 12, period: 5 },
    { sign: "in", name: "Indium",       atomicWeight: 114.82,   group: 13, period: 5 },
    { sign: "sn", name: "Tin",          atomicWeight: 118.71,   group: 14, period: 5 },
    { sign: "sb", name: "Antimony",     atomicWeight: 121.76,   group: 15, period: 5 },
    { sign: "te", name: "Tellurium",    atomicWeight: 127.60,   group: 16, period: 5 },
    { sign: "i",  name: "Iodine",       atomicWeight: 126.90,   group: 17, period: 5 },
    { sign: "xe", name: "Xenon",        atomicWeight: 131.29,   group: 18, period: 5 },
    { sign: "cs", name: "Cesium",       atomicWeight: 132.91,   group: 1,  period: 6 },
    { sign: "ba", name: "Barium",       atomicWeight: 137.33,   group: 2,  period: 6 },
    { sign: "la", name: "Lanthanum",    atomicWeight: 138.91,   group: 3,  period: 6 },
    { sign: "ce", name: "Cerium",       atomicWeight: 140.12,   group: "lanthanoid", period: 6 },
    { sign: "pr", name: "Praseodymium", atomicWeight: 140.91,   group: "lanthanoid", period: 6 },
    { sign: "nd", name: "Neodymium",    atomicWeight: 144.24,   group: "lanthanoid", period: 6 },
    { sign: "pm", name: "Promethium",   atomicWeight: 145,      group: "lanthanoid", period: 6 },
    { sign: "sm", name: "Samarium",     atomicWeight: 150.36,   group: "lanthanoid", period: 6 },
    { sign: "eu", name: "Europium",     atomicWeight: 151.96,   group: "lanthanoid", period: 6 },
    { sign: "gd", name: "Gadolinium",   atomicWeight: 157.25,   group: "lanthanoid", period: 6 },
    { sign: "tb", name: "Terbium",      atomicWeight: 158.93,   group: "lanthanoid", period: 6 },
    { sign: "dy", name: "Dysprosium",   atomicWeight: 162.50,   group: "lanthanoid", period: 6 },
    { sign: "ho", name: "Holmium",      atomicWeight: 164.93,   group: "lanthanoid", period: 6 },
    { sign: "er", name: "Erbium",       atomicWeight: 167.26,   group: "lanthanoid", period: 6 },
    { sign: "tm", name: "Thulium",      atomicWeight: 168.93,   group: "lanthanoid", period: 6 },
    { sign: "yb", name: "Ytterbium",    atomicWeight: 173.05,   group: "lanthanoid", period: 6 },
    { sign: "lu", name: "Lutetium",     atomicWeight: 174.97,   group: 3,  period: 6 },
    { sign: "hf", name: "Hafnium",      atomicWeight: 178.49,   group: 4,  period: 6 },
    { sign: "ta", name: "Tantalum",     atomicWeight: 180.95,   group: 5,  period: 6 },
    { sign: "w",  name: "Tungsten",     atomicWeight: 183.84,   group: 6,  period: 6 },
    { sign: "re", name: "Rhenium",      atomicWeight: 186.21,   group: 7,  period: 6 },
    { sign: "os", name: "Osmium",       atomicWeight: 190.23,   group: 8,  period: 6 },
    { sign: "ir", name: "Iridium",      atomicWeight: 192.22,   group: 9,  period: 6 },
    { sign: "pt", name: "Platinum",     atomicWeight: 195.08,   group: 10, period: 6 },
    { sign: "au", name: "Gold",         atomicWeight: 196.97,   group: 11, period: 6 },
    { sign: "hg", name: "Mercury",      atomicWeight: 200.59,   group: 12, period: 6 },
    { sign: "tl", name: "Thallium",     atomicWeight: 204.38,   group: 13, period: 6 },
    { sign: "pb", name: "Lead",         atomicWeight: 207.2,    group: 14, period: 6 },
    { sign: "bi", name: "Bismuth",      atomicWeight: 208.98,   group: 15, period: 6 },
    { sign: "po", name: "Polonium",     atomicWeight: 209,      group: 16, period: 6 },
    { sign: "at", name: "Astatine",     atomicWeight: 210,      group: 17, period: 6 },
    { sign: "rn", name: "Radon",        atomicWeight: 222,      group: 18, period: 6 },
    { sign: "fr", name: "Francium",     atomicWeight: 223,      group: 1,  period: 7 },
    { sign: "ra", name: "Radium",       atomicWeight: 226,      group: 2,  period: 7 },
    { sign: "ac", name: "Actinium",     atomicWeight: 227,      group: 3,  period: 7 },
    { sign: "th", name: "Thorium",      atomicWeight: 232.04,   group: "actinoid", period: 7 },
    { sign: "pa", name: "Protactinium", atomicWeight: 231.04,   group: "actinoid", period: 7 },
    { sign: "u",  name: "Uranium",      atomicWeight: 238.03,   group: "actinoid", period: 7 },
    { sign: "np", name: "Neptunium",    atomicWeight: 237,      group: "actinoid", period: 7 },
    { sign: "pu", name: "Plutonium",    atomicWeight: 244,      group: "actinoid", period: 7 },
    { sign: "am", name: "Americium",    atomicWeight: 243,      group: "actinoid", period: 7 },
    { sign: "cm", name: "Curium",       atomicWeight: 247,      group: "actinoid", period: 7 },
    { sign: "bk", name: "Berkelium",    atomicWeight: 247,      group: "actinoid", period: 7 },
    { sign: "cf", name: "Californium",  atomicWeight: 251,      group: "actinoid", period: 7 },
    { sign: "es", name: "Einsteinium",  atomicWeight: 252,      group: "actinoid", period: 7 },
    { sign: "fm", name: "Fermium",      atomicWeight: 257,      group: "actinoid", period: 7 },
    { sign: "md", name: "Mendelevium",  atomicWeight: 258,      group: "actinoid", period: 7 },
    { sign: "no", name: "Nobelium",     atomicWeight: 259,      group: "actinoid", period: 7 },
    { sign: "lr", name: "Lawrencium",   atomicWeight: 266,      group: 3,  period: 7 },
    { sign: "rf", name: "Rutherfordium",atomicWeight: 267,      group: 4,  period: 7 },
    { sign: "db", name: "Dubnium",      atomicWeight: 270,      group: 5,  period: 7 },
    { sign: "sg", name: "Seaborgium",   atomicWeight: 271,      group: 6,  period: 7 },
    { sign: "bh", name: "Bohrium",      atomicWeight: 270,      group: 7,  period: 7 },
    { sign: "hs", name: "Hassium",      atomicWeight: 277,      group: 8,  period: 7 },
    { sign: "mt", name: "Meitnerium",   atomicWeight: 278,      group: 9,  period: 7 },
    { sign: "ds", name: "Darmstadtium", atomicWeight: 281,      group: 10, period: 7 },
    { sign: "rg", name: "Roentgenium",  atomicWeight: 282,      group: 11, period: 7 },
    { sign: "cn", name: "Copernicium",  atomicWeight: 285,      group: 12, period: 7 },
    { sign: "nh", name: "Nihonium",     atomicWeight: 286,      group: 13, period: 7 },
    { sign: "fl", name: "Flerovium",    atomicWeight: 289,      group: 14, period: 7 },
    { sign: "mc", name: "Moscovium",    atomicWeight: 290,      group: 15, period: 7 },
    { sign: "lv", name: "Livermorium",  atomicWeight: 293,      group: 16, period: 7 },
    { sign: "ts", name: "Tennessine",   atomicWeight: 294,      group: 17, period: 7 },
    { sign: "og", name: "Oganesson",    atomicWeight: 294,      group: 18, period: 7 }
]

Pytamath.findElementBySign = function(sign = "H"){
    sign = sign.toLowerCase()
    sign = sign.replace(" ", "")

    for(let i = 1; i < Pytamath.PeriodicTable.length; i++){
        if(Pytamath.PeriodicTable[i].sign == sign){
            return{
                number: i,
                name: Pytamath.PeriodicTable[i].name,
                atomicWeight: Pytamath.PeriodicTable[i].atomicWeight,
                group: Pytamath.PeriodicTable[i].group,
                period: Pytamath.PeriodicTable[i].period
            }
            break;
        }
    }
}

Pytamath.findElementByNumber = function(number = 1){
    if(number >= 0 && number < Pytamath.PeriodicTable.length) return Pytamath.PeriodicTable[number];
    else return null; // If the number is out of bounds, return null
}

Pytamath.findElementsByGroup = function(group = 1){
    if(!Pytamath.isNumber(group)){
        group = group.toLowerCase()
        group = group.replace(" ", "")
    }

    const elements = []
    for(let i = 1; i < Pytamath.PeriodicTable.length; i++){
        if(Pytamath.PeriodicTable[i].group == group){
            elements.push({
                number: i,
                sign: Pytamath.PeriodicTable[i].sign,
                name: Pytamath.PeriodicTable[i].name,
                atomicWeight: Pytamath.PeriodicTable[i].atomicWeight,
                period: Pytamath.PeriodicTable[i].period
            })
        }
    }
    return elements;
}

Pytamath.findElementsByPeriod = function(period = 1){
    const elements = []
    for(let i = 1; i < Pytamath.PeriodicTable.length; i++){
        if(Pytamath.PeriodicTable[i].period == period){
            elements.push({
                number: i,
                sign: Pytamath.PeriodicTable[i].sign,
                name: Pytamath.PeriodicTable[i].name,
                atomicWeight: Pytamath.PeriodicTable[i].atomicWeight,
                group: Pytamath.PeriodicTable[i].group
            })
        }
    }
    return elements;
}

Pytamath.randomElement = function(min = 1, max = Pytamath.PeriodicTable.length - 1){
    const i = Pytamath.random(min, max)
    return{
        number: i,
        sign: Pytamath.PeriodicTable[i].sign,
        name: Pytamath.PeriodicTable[i].name,
        atomicWeight: Pytamath.PeriodicTable[i].atomicWeight,
        group: Pytamath.PeriodicTable[i].group,
        period: Pytamath.PeriodicTable[i].period
    };
}