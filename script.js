// Function to create a close button
function createCloseButton() {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  return span;
}

// Function to add a new list item
function newElement() {
  var inputValue = document.getElementById("myInput").value;
  var categoryValue = document.getElementById("category").value;

  if (inputValue === '' || categoryValue === '') {
    alert("You must write something and select a category!");
    return;
  }

  var li = document.createElement("li");
  var taskSpan = document.createElement("SPAN");
  var categorySpan = document.createElement("SPAN");

  taskSpan.className = "task";
  categorySpan.className = "category";
  taskSpan.textContent = inputValue;
  categorySpan.textContent = categoryValue;

  li.appendChild(taskSpan);
  li.appendChild(document.createTextNode(" - "));
  li.appendChild(categorySpan);

  switch (categoryValue) {
    case 'Personal':
      li.classList.add('category-personal');
      break;
    case 'Books to read':
      li.classList.add('category-books');
      break;
    case 'To Buy':
      li.classList.add('category-shopping');
      break;
    case 'Priority Basis':
      li.classList.add('category-priority');
      break;
  }

  li.appendChild(createCloseButton());
  document.getElementById("myUL").appendChild(li);

  // Alert when a new category is added
  alert(`New category '${categoryValue}' added`);

  document.getElementById("myInput").value = "";
  document.getElementById("category").value = "";
}

// Event delegation for closing items
document.getElementById("myUL").addEventListener('click', function(ev) {
  if (ev.target.classList.contains('close')) {
    var div = ev.target.parentElement;
    var categoryValue = div.querySelector(".category").textContent;
    div.style.display = "none";
    

    // Alert when a category is deleted

    alert(` ${categoryValue} Category deleted`);
  }
}, false);

// Event delegation for checking items
document.querySelector('ul').addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create close buttons for existing list items
var myNodelist = document.getElementsByTagName("LI");
for (var i = 0; i < myNodelist.length; i++) {
  myNodelist[i].appendChild(createCloseButton());
}