# Frontend Mentor - Launch Countdown Timer

This is a solution to the [Launch Countdown Timer Challenge](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    <!-- -   [Useful resources](#useful-resources) -->
-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   See hover states for all interactive elements on the page.
-   See a live countdown timer that ticks down every second.
-   **Bonus**: When a number changes, make the card flip from the middle. :star: (not added yet)

### Screenshot

-   [Desktop Screenshot](https://github.com/PhilopaterHany/Launching-Soon-Template/blob/main/screenshots/desktop.jpg)
-   [Mobile Screenshot](https://github.com/PhilopaterHany/Launching-Soon-Template/blob/main/screenshots/mobile.jpg)

### Links

-   Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions//)
-   Live Site URL: [Github Pages](https://philopaterhany.github.io/Launching-Soon-Template/)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS3 custom properties
-   Vanilla JavaScript

### What I learned

```html
<div>
    <div class="number">
        <p id="days-p"></p>
        <div class="background top"></div>
        <div class="background bottom"></div>
        <div class="bullet left"></div>
        <div class="bullet right"></div>
    </div>
    <span>days</span>
</div>
```

<!-- ```css
.proud-of-this-css {
    color: papayawhip;
}
``` -->

```js
let dateDiff = countDownDate.getTime() - new Date().getTime();

if (dateDiff <= 0) {
    countDownDate = new Date(`Aug 4, ${currDate.getFullYear() + 1} 00:00:01`);
}

let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
```

<!-- ### Useful resources

-   [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
-   [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept. -->

## Author

-   Website - Portfolio Is Coming Out Soon!
-   Frontend Mentor - [@PhilopaterHany](https://www.frontendmentor.io/profile/PhilopaterHany/)
-   Twitter - [@PhilopaterHany4](https://www.twitter.com/PhilopaterHany4/)
-   Linkedin - [@phth](https://www.linkedin.com/in/phth/)
-   Facebook - [Philopater Hany](https://www.facebook.com/philopater.hany.3)
-   Discord - [#8178](https://discord.com/#8178/)
