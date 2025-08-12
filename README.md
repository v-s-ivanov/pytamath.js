<h1>PYTAMATH.JS</h1>
<h3>A mathematical library written in JavaScript.</h3>

# How to use
You can link this library to your html file using the following link:
https://raw.githubusercontent.com/v-s-ivanov/pytamath.js/refs/heads/main/pytamath.js

You can also download it from GitHub.

# Reciprocal Functions
The Pytamath.js library includes inverse trigonometric functions (cosecant - csc, secant - sec, cotangent - cot):

```
Pytamath.csc = function(csc){ // Cosecant
    return 1 / Math.sin(csc);
}
Pytamath.sec = function(sec){ // Secant
    return 1 / Math.cos(sec);
}
Pytamath.cot = function(cot){ // Cotangent
    return 1 / Math.tan(cot);
}
```

# Inverse Reciprocal Functions
```
Pytamath.acsc = function(csc){ // Inverse cosecant
    return Math.asin(1/csc);
}
Pytamath.asec = function(sec){ // Inverse secant
    return Math.acos(1/sec);
}
Pytamath.acot = function(cot){ // Inverse cotangent
    return Math.atan(1/cot);
}
```

# Rounding Numbers
Uses & adds to the regular Math.Round() function with a new parameter - number digits after the decimal point.
```
Pytamath.roundNum = function(number, digits){ // Rounding to specific digits
    return Math.round(number * Math.pow(10, digits)) / Math.pow(10, digits);
}
```

# Conversion of Degrees and Radians
Degrees and Radians are two measurement units for angles. We can convert the values with the following formulas:

1rad = 1° * π / 180

1° = 1rad * 180 / π

```
Pytamath.toRadians = function(num){ // Degrees to radians converter
    return num * Math.PI / 180;
}

Pytamath.toDegrees = function(num){ // Radians to degrees converter
    return num * 180 / Math.PI;
}
```

# Factorial, Superfactorial & Hyperfactorial
Factorial is the product of an integer and all smaller positive integers. n! is factorial of n. For example, 3! = 3 * 2 * 1 = 6

Superfactorial is the product of an integer's factorial and the factorials of all smaller positive integers. n$ is superfactorial of n. For example, 3$ = 3! * 2! * 1! = 6 * 2 * 1 = 12

Hyperfactorial is the product of an integer to the power of itself and all smaller positive integers to the power of themselves. H(n) is hyperfactorial of n. For example, H(3) = 3<sup>3</sup> * 2<sup>2</sup> * 1<sup>1</sup> = 9 * 4 * 1 = 36

<b>NOTE</b> that 0!, 0$ and H(0) are all equal to 1 

Fun fact: the hyperfactorial of 9 is H(9) = 55696437941726556979200000

```
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
```

# Quadratic & Biquadratic Equations
The quadratic equation: ax<sup>2</sup> + bx + c = 0 (a, b & c are parameters, x is a variable) can be solved using this formula:

x = (-b ± √D) / 2a

D is the discriminant. D = b<sup>2</sup> - 4ac

If D > 0, there will be two values of x.
If D = 0, there will only be one value of x.
If D < 0, there will not be values of x, as there is no sqare root of a negative number.


The biquadratic equation: ax<sup>4</sup> + bx<sup>2</sup> + c = 0 can be solved by creating another variable, let's call it t. t = x<sup>2</sup>, so the equation is now at<sup>2</sup> + bt + c = 0. This is a quadratic equation and can be solved using the formulas above. 

When you have both values of t, take their square roots:

t<sub>1,2</sub> = ±√x<sub>1</sub> 
t<sub>3,4</sub> = ±√x<sub>2</sub>

If t < 0, you can't take it's square root, so if one t value is less than 0, you will only get two x answers. If both t values are less than 0, there will be no x values.

```
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
```

<b>NOTE</b> the ```rule``` parameter. Using the Pytamath.checkCondition(value, condition) function, we can check if the x value meets a certain condition. Valid conditions are: "x > 4", "x <= 5", "= -3", "ANSWER >= 6", "y => 2". The rule parameter is optional.
This will be elaborated on further down.

# Pytamath.isNumber(value)
This function checks if a string value is a number. This function will return ```true``` if the string <b>ONLY</b> includes digits and a decimal point. A zero or a decimal point <b>CANNOT</b> be at the beginning.

The check is made by multiplying the value by 1. If the string is a number, the product will be equal to the original value, but if it's not a number, it cannot be multiplied.

```
Pytamath.isNumber = function(value) { // Checks if a value is a number by multiplying it by 1
  return value * 1 == value
}
```

# Condition checker
With this function, you can check whether a number meets a certain condition. All you need to enter as the condition parameter is a sign (">", "<", "=", ">=", "<=", also "==" - it's the same as "=") and a value. These are examples of accepted values for the condition parameter: "x > 4", "x <= 5", "= -3", "ANSWER >= 6", "y => 2". <b>NOTE</b> that "2 > x", "7 < y" and such will be read as "x > 2", "y < 7".

```
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
```

# Temperature conversion
The pytamath.js library has 3 functions for temperature conversion - one for each unit of measurement. Default units: toCelsius - fahrenheit, toFahrenheit & toKelvin - celsius.
```
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
```

# Day of the year
With the following function, you can check the number of a day in the year. Parameters: ```value``` (required), ```leapYear``` (optional, default = false), ```format``` (optional, default = "DD/MM"). Here is an example of accepted values for the ```value``` parameter:<br>
<b>'dd/mm' format (default):</b><br>
"30th of June"<br>
"24th October"<br>
"18 february"<br>
"9 mar"<br>
"25/12"<br>
"09/07"<br>
"5/8"<br>
<b>'mm/dd' format:</b><br>
"June 30th"<br>
"October 24"<br>
"Feb 18"<br>
"mar 14"<br>
"12/25"<br>
"07/09"<br>
"8/5"<br>
Example of accepted values for the ```format``` parameter:<br>
"DD/MM" (default)<br>
"dd/mm"<br>
"dd-mm"<br>
"dd.mm"<br>
"MM/DD"<br>
"mm/dd"<br>
"mm-dd"<br>
"mm.dd"<br>
<b>NOTE</b> that you don't have to make the ```leapYear``` parameter true in order to enter the date '29/02'.

```
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
```

# Leap year checker
A leap year is a year that has the date 29th of February. It's once every 4 years, except for years divided by 100, but not by 400. For example:<br>
1958 - not a leap year<br>
1960 - leap year<br>
2000 - leap year<br>
1900 - not a leap year<br>
2100 - not a leap year<br>
2400 - leap year<br>
Here is a function that determines whether a year is leap or not:
```
Pytamath.isLeapYear = function(year){ // Checks if a year is a leap year
    if(year < 0) return null // Negative years are not supported
    if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
        return true // Leap year
    }
    else{
        return false // Not a leap year
    }
}
```

# Root
The following function calculates the root of a number. By default, the root is 2, but you can make it bigger.
```
Pytamath.root = function(value, root = 2){ // Returns the root of a number
    return Math.pow(value, 1 / root);
}
```
For example, Pytamath.root(27, 3) returns 3.

# Greatest common divider
The greatest common divider of two or more numbers is the biggest number that can divide all of the numbers.
```
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
```

# Least common multiple
The least common multiple of two or more numbers is the biggest number that can be divided by all numbers. It's highest possible value is the product of all numbers.
```
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
```

# Prime number checker
This function checks if a number is prime. A prime number is a number which can be divided only by 1 and itself. <b>NOTE</b> that 1 is <b>NOT A PRIME NUMBER</b>. The smallest prime number is 2.
```
Pytamath.isPrime = function(num){ // Checks if a number is prime
    if(num < 2) return false; // 0 and 1 are not prime numbers
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i == 0) return false; // If the number is divisible by any number other than 1 and itself, it is not prime
    }
    return true; // If no divisors were found, the number is prime
}
```

# Nth prime number
This function checks the order of a prime number. For example:<br>
2 - 1st prime<br>
3 - 2nd prime<br>
5 - 3rd prime<br>
7 - 4th prime<br>
11 - 5th prime<br>
13 - 6th prime<br>
17 - 7th prime<br>
19 - 8th prime<br>
23 - 9th prime<br>
29 - 10th prime
```
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
```

# Nth Fibonacci number
The Fibonacci line of numbers is as follows: 0, 1, 0+1 = 1, 1+1 = 2, 1+2 = 3, 2+3 = 5, 3+5 = 8, 5+8 = 13 and so on... <br>
0 - 0th Fibonacci<br>
1 - 1st Fibonacci<br>
0 + 1 = 1 - 2nd Fibonacci<br>
1 + 1 = 2 - 3rd Fibonacci<br>
1 + 2 = 3 - 4th Fibonacci<br>
2 + 3 = 5 - 5th Fibonacci<br>
3 + 5 = 8 - 6th Fibonacci<br>
5 + 8 = 13 - 7th Fibonacci<br>
8 + 13 = 21 - 8th Fibonacci<br>
13 + 21 = 34 - 9th Fibonacci<br>
21 + 34 = 55 - 10th Fibonacci<br>

```
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
```

# Fibonacci number checker
This function checks whether the provided number is part of the Fibonacci line or not. It uses Pytamath.nthFibonacci() and checks all Fibonacci numbers lower than or equal to the provided value. If there is no match, the function returns ```false```.

```
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
```

# Random number generator with decimal numbers
Pytamath.random() generates a random number in a provided interval. The function can also be configured to generate a decimal number with the ```digits``` parameter (default value = 0). For example, ```Pytamath.random(0,10,2)``` will generate a random number between 0 and 10 with up to 2 digits after the decimal point (might be less if the last digit is 0, for example 1.60 will be displayed as 1.6 and 1.00 as 1). <br>

```
Pytamath.random = function(min, max, digits = 0){
    return (Math.floor(Math.random() * (max * Math.pow(10, digits) - min * Math.pow(10, digits))) + min * Math.pow(10, digits)) / Math.pow(10, digits)
}
``` 

# Random date generator
Pytamath.randomDate() generates a random valid date. It has 2 parameters: ```leapyear``` (default value = true) and ```format``` ("dd/mm" by default, but could also be "mm/dd" and the divider sign can be changed to any other character, which will be displayed in the final result).

```
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
```

Example usage:
```
console.log(Pytamath.randomDate(true, "mm-dd"))
console.log(Pytamath.randomDate(false, "dd.mm"))
console.log(Pytamath.randomDate(false, "dd\\mm")) // When using a backslash, MAKE SURE TO TYPE ANOTHER ONE AFTER IT!!!
```

Console (result is an example, you will probably get a different date):
```
03-26
27.08
24\07
```

# Random Time
With Pytamath.randomTime(), you can now generate a random hour, minute and second. Formats can be "hh:mm:ss", "hh:mm", "mm:ss". ":" can be replaced with any other sign you like.

```
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
```

# Random Date & Time
Pytamath.randomDateTime() combines the previous 2 functions into one result. Two formats need to be provided.

```
Pytamath.randomDateTime = function(leapYear = true, dateFormat = "dd/mm", timeFormat = "hh:mm:ss"){
    const date = Pytamath.randomDate(leapYear, dateFormat)
    const time = Pytamath.randomTime(timeFormat)
    return `${date} ${time}`
}
```

# Current Date
With Pytamath.currentDate() you can check the current date and use it for other functions, such as Pytamath.dateDifference.

```
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
```

# Date Difference
Pytamath.dateDifference() calculates the difference between two dates (with the years as well). Leap years are also considered. If ```date2``` is left empty or is equal to "today", the difference between date1 and the current date will be calculated. The function returns the following object:

```
{ // Example values
    years: 12,
    months: 7,
    weeks: 0,
    days: 5,
    totalDays: 4202
}
```

Here is the code:

```
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
```

# Finding An Element Of The Periodic Table By Its Sign
The ```Pytamath.PeriodicTable``` array contains 1 null value and 118 objects - one for each element of the Periodic table. Each object contains these elements: sign, name, atomicWeight, group and period.
<br>
The ```Pytamath.findElementBySign()``` function finds an element by looping through all of the objects in the array and checking if the ```sign``` element is equal to the ```sign``` parameter. Values are <b>NOT</b> case-sensitive.
```
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
```
Here is an example usage:<br>
Code:
```
console.log(Pytamath.findElementBySign("H"));
```
Console:
```
{
    number: 1, 
    name: "Hydrogen", 
    atomicWeight: 1.008, 
    group: 1, 
    period: 1
}
```

# Finding An Element of The Periodic Table By Its Atomic Number
The function ```Pytamath.findElementByNumber()``` returns the element of the array with the provided index:

```
Pytamath.findElementByNumber = function(number = 1){
    if(number >= 0 && number < Pytamath.PeriodicTable.length) return Pytamath.PeriodicTable[number];
    else return null; // If the number is out of bounds, return null
} 
```

Example usage: <br>
Code:
```
console.log(Pytamath.findElementByNumber(1));
```
Console:
```
{
    sign: "h", 
    name: "Hydrogen", 
    atomicWeight: 1.008, 
    group: 1, 
    period: 1
}
```

# Finding Elements By Their Group:
```Pytamath.findElementsByGroup()``` will return all of the chemical elements which are part of the provided group. Note that while the value may be an integer, it can also be ```"lanthanoid"``` or ```"actinoid"```, depending on which elements you want.
```
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
```

Example usage:<br>
Code:
```
console.log(Pytamath.findElementsByGroup(1));
```
Console:
```
[
    {number: 1, sign: "h", name: "Hydrogen", atomicWeight: 1.008, period: 1},
    {number: 3, sign: "li", name: "Lithium", atomicWeight: 6.94, period: 2},
    {number: 11, sign: "na", name: "Sodium", atomicWeight: 22.99, period: 3},
    {number: 19, sign: "k", name: "Potassium", atomicWeight: 39.098, period: 4},
    {number: 37, sign: "rb", name: "Rubidium", atomicWeight: 85.468, period: 5},
    {number: 55, sign: "cs", name: "Cesium", atomicWeight: 132.91, period: 6},
    {number: 87, sign: "fr", name: "Francium", atomicWeight: 223, period: 7}
]
```

# Finding Elements By Their Period:
```Pytamath.findElementsByPeriod()``` will return all of the chemical elements which are part of the provided period:
```
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
```
Example usage: <br>
Code:
```
console.log(Pytamath.findElementsByPeriod(1));
```
Console:
```
[
    {number: 1, sign: "h", name: "Hydrogen", atomicWeight: 1.008, group: 1},
    {number: 2, sign: "he", name: "Helium", atomicWeight: 4.0026, group: 18}
]
```

# Random Element
```Pytamath.randomElement()``` returns an element within the provided range:
```
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
```
Example usage: <br>
Code:
```
console.log(Pytamath.randomElement(1, 20));
```
Console:
```
{ // Example Random Values
    number: 12, 
    sign: "mg", 
    name: "Magnesium", 
    atomicWeight: 24.305, 
    group: 2, 
    period: 3
}
```