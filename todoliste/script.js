function add() {
    todolist.innerHTML += "<li><input type='checkbox'>" + todofield.value + "</li>";
    todofield.value = "";
}
