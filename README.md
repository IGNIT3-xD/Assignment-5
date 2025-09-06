1) The difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll are :
  getElementById : Select a id attribute from html document and it returns a single object if found.
  getElementsByClassName : Selects class attribute elements from html document and it returns Html collection.
  querySelector : Select the first element from html document that matches id, class or tag. It writes like css selectors (#id, .class)
  querySelectorAll : Select all the elements from html document that matches class. It returns Node list.

2) Create element : const newElement = document.createElement("element name") element name that i want to create like: div, p, h1 etc.
   Find the object where i want to insert or add the element : const existDiv = document.getElementById("id-name");
   Show the element : existDiv.append(newElement);

3) When an element is clicked, an event is directed to the element. If an event handler is set for the element, the event handler is triggered.
   Then the event bubbles up to the elements parent. The event continues to bubble, until it reaches the top document element.

4) Event Delegation is used the concept of event bubbling. Normally, instead of handling the click event on the several buttons. We can handle it on the
   parent element. We can handle event delegation using conditional statements like if-else. It is useful because it's more cleaner. It enhance our website
   perfomance by reducing memory usage. It enhanced scalability and easy to manage the events.

5) The difference between preventDefault() and stopPropagation() methods are :
   preventDefault() : By default when we add event on the form and clicked on the submit button it automatically reload the page. By using preventDefault()
   method we can stop this reloading behaviour and can got our value from the user. But it does not stop the event from bubbling up or down the DOM tree.
   stopPropagation() : This method prevents the further propagation from bubbling of the current event through the DOM tree. It's use When you want to prevent
   an event from affecting parent or child elements in the DOM.
