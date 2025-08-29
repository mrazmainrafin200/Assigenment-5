# My Assigenment-5 🚀

This is a simple project that shows how to write a good README.md

# 1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

### 1. `getElementById("id")`
- Finds **one element** by its unique **id**.  
- Always returns a **single element**.

### 2. `getElementsByClassName("class")`
- Finds **all elements** with the given class.  
- Returns an **HTMLCollection** (like an array, but not exactly).

### 3. `querySelector("selector")`
- Finds the **first element** that matches a **CSS selector** (id, class, tag, etc.).

### 4. `querySelectorAll("selector")`
- Finds **all elements** that match a CSS selector.  
- Returns a **NodeList** (similar to an array, you can loop).

---


**In short:**
- **ID → one unique element**  
- **Class → multiple elements**  
- **querySelector → first match**  
- **querySelectorAll → all matches**



# 2.How do you **create and insert a new element into the DOM**?

You can create and insert a new element into the DOM using JavaScript like this:

1. First, create a new element using `document.createElement()`.
2. Then, add content or attributes (like text, id, class).
3. Finally, insert it into the DOM using methods like `appendChild()` or `append()`.



# 3.What is **Event Bubbling** and how does it work?

**Event Bubbling** is the process in the DOM where an event starts from the target element and then bubbles (moves) up to its parent elements, one by one, until it reaches the root (`document`).

For example:
```html

**html**
<div id="parent">
   <button id="child">Click Me</button>
</div>


**js**
document.getElementById("parent").addEventListener("click", function() {
  console.log("Parent clicked!");
});

document.getElementById("child").addEventListener("click", function() {
  console.log("Child clicked!");
});

```
# 4.What is **Event Delegation** in JavaScript? Why is it useful?

**Event Delegation** is a technique in JavaScript where instead of adding event listeners to multiple child elements, you add a single event listener to their parent element. The event uses **event bubbling** to detect which child triggered the event.

✅ **How it works:**
- Events in JavaScript bubble up from the target element to its parent, then to the document.
- By placing the listener on the parent, you can handle events for all current and future child elements.

✅ **Why it’s useful:**
1. Improves performance (fewer event listeners in memory).
2. Makes code cleaner and easier to manage.
3. Handles dynamically added elements without extra code.


# 5.What is the difference between **preventDefault() and stopPropagation()** methods?

- **preventDefault()** → Stops the browser’s default action.  
  **Example:** Prevents a form from submitting or a link from opening.

- **stopPropagation()** → Stops the event from bubbling up to parent elements.  
  **Example:** A click on a child element won’t trigger the parent’s event listener.
