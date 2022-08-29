document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form')
  const ul = document.getElementById('tasks')
  const inputDescription = document.getElementById('new-task-description')

  function addTask() {
    let li = document.createElement('li')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = 'Delete'
    li.textContent = `${inputDescription.value}  `
    ul.appendChild(li)
    li.appendChild(btn)
  }

  function handleDelete(event) {
    event.target.parentNode.remove()
  }

  form.addEventListener('submit', e => {
    e.preventDefault()
    addTask()
    form.reset()

  })
});
