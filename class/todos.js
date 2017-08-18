document.addEventListener('DOMContentLoaded', function(){

// 1. // Toggle tass from complete to incomplete
var allTasks = document.querySelector('.task');
// we grab every task

// add for loop
for (var i = 0; i < allTasks.length; i++) {
  allTasks[i].addEventListener('click', function(){
    // if (this.className === 'task'){
    //   this.className = 'task is-complete';
    // }else {
    //   this.className = 'task';
    //
    // }

    // this gives array and toggles over each element
    this.classList.toggle('is-complete');
  });
}

var taskList = document.querySelector('#tasks-list');

// the event created by the Object e = eventObject
taskList.addEventListener('click', function(e){
  // NOTE: This didnt work when clicking directly on anchor
if( e.targer.classList.contains('.task')){
  e.target.classList.toggle('is-complete');
}


  var closestTaskElement = e.target.closest('.task');

  if (closestTaskElement){
    closestTaskElement.classList.toggle('is-complete');
    calculateRemainingTasks();
  }

// 3. Add new itesm to the list via form
var newTodoForm = document.querySelector('#new-todo');

newTodoForm.addEventListener('submit', function(e){
  e.preventDefault();

  // 1. Grab the user input from the field
  var newTask = document.querySelector('#todo-task').value;
  // 2. Create a new li
  var taskElement = document.createElement'li');
  taskElement.className = 'task'
  // 3. creat a new a
  var taskAnchor = document.createElement'a');
  // 4. PUt the inpu in the anchor tag
taskAnchor.innerHTML = newTask;
  // 5. Put the anchor into the li
  taskElement.append(taskAnchor);

  // 6. Append the new li into the task list
  taskElement.append(taskElement);

  // 7. update the number of remaining task
  calculateRemaingTasks();

  // 8. Clear out the input element
  newTodoForm.reset()
})

  // 1.Select the couter
  var counter = document.querySelector('#counter');
  // 2.Select all the tasks
  var allTasks = document.querySelector('.task');
  // 3.Select all the tasks that are complete
  var completedTasks = document.querySelectorAll('.task.is-completed')

// 4. Toggle todo items on filters

// 5. Optional Ability to remove items from list




  // 4.Calculate the remaining tasks
  var remainingTasks = allTasks.length - completedTasks.length;
  // 5.Set the value of counter
  counter.innerHTML = remainingTasks;
}
});





});
