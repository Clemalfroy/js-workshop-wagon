# JS Workshop

Go to [workshop site](https://js-workshop-wagon.surge.sh/)

## Worskop course

Checkout the [course](https://learn.lewagon.com/)

### Concepts to remember

- A variable is here to store a value so that you can reuse it later.
- In order to interact with the DOM, you need to use the `document` object and select elements.
- Each HTML elements have a set of properties and methods that you can use to interact with them.

### Help to code

⚠️ Everything that starts with `my` is something that you have to change with your own values. ⚠️

- Display a value in the console

```
console.log('myValue')
```

- Store a value in a variable

```
const myVariableName=myValue
```

- Select an element on a page

```
document.querySelector('<MY_CSS_SELECTOR>')
```

- Select an element on a page and store it
```
const myElement = document.querySelector('<MY_CSS_SELECTOR>')
```

- Modify the text inside an Element
```
myElement.innerText = 'myNewText'
```

- Hide an Element
```
myElement.hidden = true
```

- Select all elements on a page that match selector.
```
document.querySelectorAll('<MY_CSS_SELECTOR>')
```

- Apply a change on all elements that match selector.
```
document.querySelectorAll('<MY_CSS_SELECTOR>').forEach(element => {
  myCode
})
```
- Get Position of an Element

```
element.getBoundingClientRect()
```

- Listen to an Event

```
element.addEventListener('MyEvent', (e) => {
  myCode
})
```

- Things to lookup (google)
  - javascript contentEditable
  - HTML element style javascript
  - Remove HTML node in javascript
  - How to move an element on keyDown javascript
  - Play audio in javascript

