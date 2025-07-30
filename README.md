<h1>PYTAMATH.JS</h1>
<h3>A mathematical library written in JavaScript.</h3>

# How to use
You can link this library to your html file using the following link:
https://raw.githubusercontent.com/v-s-ivanov/pytamath.js/refs/heads/main/pytamath.js

You can also download it from GitHub.

# Reciprocal Functions
Since the regular Math Javascript library does not support inverse trigonometric functions (cosecant - csc,
secant - sec, cotangent - cot), Pytamath.js includes them.

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