document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target.new-task-description.value)
  })
  
})

const taskList = document.getElementById('tasks');
taskList.addEventListener('click', (e) => {
  if (e.target.nodeName === 'BUTTON') { 
    e.target.parentNode.remove(); 
  }
});


const priorityDropdown = document.getElementById('priority-dropdown');
priorityDropdown.addEventListener('change', (e) => {
  const priority = e.target.value;
  const taskDescription = e.target.parentNode.querySelector('input').value;
  const newTask = document.createElement('li');
  newTask.innerHTML = taskDescription + ' <span class="' + priority + '">' + priority + '</span> <button>Delete</button>';
  taskList.appendChild(newTask);
});


const sortingDropdown = document.getElementById('sorting-dropdown');
sortingDropdown.addEventListener('change', (e) => {
  const sortOrder = e.target.value;
  const tasks = Array.from(taskList.children); 
  tasks.sort((a, b) => {
    const priorityA = a.querySelector('span').textContent;
    const priorityB = b.querySelector('span').textContent;
    if (sortOrder === 'ascending') {
      return priorityA.localeCompare(priorityB); 
      return priorityB.localeCompare(priorityA); 
    }
  });
  taskList.innerHTML = ''; 
  tasks.forEach(task => taskList.appendChild(task));


const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskDescription = e.target.querySelector('input').value;
  const priority = document.getElementById('new-task-priority').value;
  const newTask = document.createElement('li');
  newTask.innerHTML = taskDescription + ' <span class="' + priority + '">' + priority + '</span> <button>Delete</button>';
  taskList.appendChild(newTask);
  form.reset();
});
});
