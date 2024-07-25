
## Hi there, I'm natzsixn 👋

- **Name:** natzsixn
- **Age:** 20
- **Status:** Single
- **Education:** Graduated from SMK Texmaco

I'm passionate about technology and always eager to learn new things. Currently, I'm focusing on improving my coding skills and working on various projects. Feel free to check out my repositories and get in touch if you'd like to collaborate!

# Project Title

## Introduction

Welcome to my project! This project includes various functionalities to handle form validation and interactions using JavaScript.

## Features

- **Preloader Animation**: Displays a loading animation while the page content is being loaded.
- **Form Validation**: Checks if all form fields are filled before proceeding to the next page.
- **Radio Button Interaction**: Manages the selection of radio buttons and enables/disables corresponding text inputs.
- **Checkbox Interaction**: Manages the selection of checkboxes and enables/disables corresponding text inputs.

## Code Explanation

### Preloader Animation

```javascript
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function() {
    document.getElementById('loading').style.opacity = '0';
    setTimeout(function() {
      document.getElementById('loading').style.display = 'none';
      document.querySelector('.ops').style.display = 'block';
      setTimeout(function() {
        document.querySelector('.ops').style.opacity = '1';
      }, 50);
    }, 1000);
  }, 2000);
```
 

## Authors

- [@maousamaNatz](https://github.com/maousamaNatz)


## Installation

Install my-project with git clone

```bash
 git clone https://github.com/maousamaNatz/boring1.git
 cd question
```
    
