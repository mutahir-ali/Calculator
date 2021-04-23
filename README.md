# How to make a web app calculator using HTML,CSS, Javascript
## Overview
Make a simple calculater using HTML and Javascript.

---

## Demo
![Demo Gif](https://s4.gifyu.com/images/ezgifcom-gif-maker3f64ae87668fda32.gif)

---

## Libraries
* [Bootstrap 4.6](https://getbootstrap.com/docs/4.6/getting-started/introduction/)

Just add this block of code inside your HTML file's \<head> tag to get started with bootstrap.
```HTML
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
```

---

## Getting Started
In the HTML file, our main container includes one heading tag and five divs,
* Display Bar
* Operators (+, -, *, /)
* Numbers
* Zero, Clear and Dot buttons 
* Equals button

```HTML
        <!-- Main Container -->
        <div class="containerr bg-dark">
            <h1>Calculator</h1>
            <!-- Display Bar -->
            <div class="display-bar bg-light">
                
            </div>
            <!-- Operators -->
            <div class="operators row row-cols-4">
                <button type="button" class="btn btn-primary plus">+</button>
                <button type="button" class="btn btn-primary minus">-</button>
                <button type="button" class="btn btn-primary cross">*</button>
                <button type="button" class="btn btn-primary divide">/</button>
            </div>

            <!-- Numbers -->
            <div class="numbers-buttons row row-cols-3 p-2">
                <button type="button" class="btn btn-secondary seven">7</button>
                <button type="button" class="btn btn-secondary  eight">8</button>
                <button type="button" class="btn btn-secondary  nine">9</button>
                <button type="button" class="btn btn-secondary  four">4</button>
                <button type="button" class="btn btn-secondary  five">5</button>
                <button type="button" class="btn btn-secondary  six">6</button>
                <button type="button" class="btn btn-secondary  one">1</button>
                <button type="button" class="btn btn-secondary  two">2</button>
                <button type="button" class="btn btn-secondary  three">3</button>
            </div>

            <!-- Zero, Dot, Clear -->
            <div class="equals-to row row-cols-3 p-2">
                <button type="button" class="btn btn-secondary col zero">0</button>
                <button type="button" class="btn btn-secondary col clearBtn">Clear</button>
                <button type="button" class="btn btn-secondary dot">.</button>
                
            </div>

            <!-- Equals Button -->
            <div class="equals-to">
                <button type="submit" class="btn btn-secondary equals">=</button>
            </div>
        </div>

```

### Alignment
To align all the buttons, we've used the grid system in bootstrap
* row ( All divs will be aligned in row)
* row-cols ( the buttons in the div will be aligned in one row and either 3 or 4 columns e.g row-cols-3 means one row and 3 columns)

### Buttons
For the buttons we've used the btn class in bootstrap and gave them color using btn-primary and btn-secondary.

---

## Styling
We will now adjust the display and tweak some other stylings.
### Display Bar



```CSS
.display-bar{
    width: 100%;
    height: 13%;
    font-size: 1.9rem;
    border: 2px solid grey;
    border-radius: 5px;
    margin-bottom: 5px;
    color: rgba(70, 70, 70, 0.781);
    text-align: right;
    overflow:auto;
}
```
Make sure the overflow is set to auto in order to contain the content inside the display bar.

### Tweaks
Rest are some tweaks resizing and making it responsive.

```CSS
h1{
    text-align: center;
    color: rgba(255, 255, 255, 0.801);
    text-transform: uppercase
}


.containerr{
    width: 400px;
    height: 470px;
    margin-right: auto;
    margin-left: auto;
    border-radius: 6px;
    margin-top: 50px;
    box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.788);
    padding: 40px;
    max-width: 90%;

}

.btn{
    border: 2px solid #343a40;
    width: 100%;
    border-radius: 7px;
    box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.473);
}

.equals{
    width: 100%;
}

```

Now we've given the shape and look to our web app.

---

## Javascript

Firstly link your javascript file with your html file, place this right before the end of \<body> tag.

```HTML
<script src="calculator.js"></script>
```




 We will be using three methods for this app to work:
 * querySelector()
 * addEventListener
 * eval()

 First things first before manipulating a website using Javascript we will always using the querySelector method.

 ``` Javascript
 let displayBar = document.querySelector(".display-bar")
 ```

 Now whenever a button is clicked we need to add it to the display bar using this:

 ``` Javascript
document.querySelector(".nine").addEventListener("click", function() {
    
    displayBar.innerHTML = displayBar.innerHTML + document.querySelector(".nine").innerHTML
  });
 ```

 We will repeat the above code for every number buttons and operators but for the clear button which will be using,

 ``` Javascript
document.querySelector(".clearBtn").addEventListener("click", function() {
    displayBar.innerHTML = ``
})

 ```

 Lastly we want to calculate the expressions that is displayed on the display bar, for this we will use the eval() method.

 ``` Javascript
    document.querySelector(".equals").addEventListener("click", e => {
    e.preventDefault()
    const equation = displayBar.innerText
    
    displayBar.innerHTML = eval(equation)
  });

 ```
---
## Built With

* HTML
* CSS
* Bootstrap
* Javascript
