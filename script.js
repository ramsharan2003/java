// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var categoryValue = document.getElementById("categorySelect").value;
    var taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.textContent = inputValue;
    var taskCategory = document.createElement("span");
    taskCategory.className = "task-category";
    taskCategory.textContent = " (" + categoryValue + ")";
  
    li.appendChild(taskText);
    li.appendChild(taskCategory);
  
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (var i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
  
  // Click on a close button to hide the current list item
  var close = document.getElementsByClassName("close");
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  