# 🚀 Assignment-05

This project is built as part of **Assignment-005**.  
It is a responsive website that includes **Navbar, Hero Section, Hotline Cards, and Call History functionality** using only **HTML, CSS, and Vanilla JavaScript**.

---

## 📌 Features

### ✅ Navbar

- Website logo and name (left side).
- Heart icon 💗, Coin count (default: `100`), and Copy count (right side).

### ✅ Hero Section

- Gradient background for the full section.
- Logo at top-center.
- Section title at center.
- Slogan at bottom-center.

### ✅ Main Section

- **Emergency Hotline Section**:
  - Icon / Image
  - Service name (Bangla + English)
  - Hotline number
  - Category badge
  - Heart icon 💗 (clickable)
  - Copy and Call buttons with icons
- **Call History Section**:
  - White background
  - Title with icon
  - Clear History button
  - Dynamic list of called services (name, number, time)

### ✅ Functionalities

1. Clicking 💗 increases the Navbar heart count.
2. Clicking **Call button**:
   - Shows alert with service name & number.
   - Deducts 20 coins from the balance (if enough coins).
   - If coins < 20 → shows warning and stops.
   - Adds record into Call History (with time).
3. Clicking **Copy button**:
   - Copies hotline number to clipboard.
   - Increases Copy count in the Navbar.
   - Shows an alert on success.
4. **Clear History button** removes all call history.

### ✅ Responsiveness

- Mobile-friendly responsive design.

---

## ⚙️ Technology Stack

- **HTML**
- **Vanilla CSS**
- **DaisyUI**
- **TailwindCSS**
- **JavaScript (Vanilla only, No frameworks)**

---

## 📝 Q&A Section

### 1. Difference between `getElementById`, `getElementsByClassName`, and `querySelector / querySelectorAll`?

- `getElementById("id")` → Selects **one element** by ID. Returns a single element.
- `getElementsByClassName("class")` → Selects **all elements** with that class. Returns an **HTMLCollection** (array-like).
- `querySelector("selector")` → Selects the **first element** that matches CSS selector.
- `querySelectorAll("selector")` → Selects **all elements** that match CSS selector. Returns a **NodeList**.

---

### 2. How to create and insert a new element into the DOM?

You can use `document.createElement()` and `appendChild()` / `append()` methods. Example:

```js
const newDiv = document.createElement("div");
newDiv.textContent = "Hello World!";
document.body.appendChild(newDiv);
```

---

### 3. What is Event Bubbling and how does it work?

Event bubbling means when an event occurs on a child element, it first runs on the child, then moves upward (bubbles) to its parent, then grandparent, until it reaches the root ( `document` ).

```js
parent.addEventListener("click", () => console.log("Parent clicked"));
child.addEventListener("click", () => console.log("Child clicked"));
```

If you click the child element, output will be:

```js
Child clicked
Parent clicked
```

### 4. What is Event Delegation in JavaScript? Why is it useful? c

Event delegation is the technique of adding a single event listener on a parent element to manage events of its child elements by checking `event.target`.

```js
document.getElementById("list").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});
```

### 5. What is the difference between preventDefault() and stopPropagation()?

- **preventDefault()** → Stops the browser’s default action.
  Example: Prevent form submission.

```js
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form not submitted");
});
```

- **stopPropagation()** → Stops the event from bubbling up to parent elements.
  Example: Prevent parent click when child is clicked.

```js
child.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Child only");
});
```

### 👉 In short:

- **preventDefault()** = stop default browser behavior.
- **stopPropagation()** = stop bubbling of event to parent.
