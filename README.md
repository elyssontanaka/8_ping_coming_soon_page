# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da).


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*


### Screenshot

![](./design/Screenshot_ping_coming_soon_page.png)


### Links

- Solution URL: [GitHub](https://github.com/elyssontanaka/8_ping_coming_soon_page/settings/pages)
- Live Site URL: [Ping Coming Soon Page](https://elyssontanaka.github.io/8_ping_coming_soon_page/)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow


### What I learned

In this project I learned how to make the social media icons faster and easier using the property display: inline-flex! There are so many details for the CSS part that took up most of my time. I trained a little bit on how to manipulate the DOM which is still new to me. 
I recalled some concepts of regex as well, but the regex for email validation is relatively common so I've managed to find some solutions on the web.

```js
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
```


### Useful resources

- [Example resource 1](https://www.w3resource.com/javascript/form/email-validation.php) - This helped me for building the email validation


## Author

- Website - [Elysson Tanaka](https://elyssontanaka.github.io/)
- Frontend Mentor - [@elyssontanaka](https://www.frontendmentor.io/profile/elyssontanaka)
