//document.addEventListener("DOMContentLoaded", () => {
  // your code here
const taskLister = document.getElementById("create-task-form")
taskLister.addEventListener("submit",e => {
  e.preventDefault()
  const list = document.getElementById("tasks")
  const li = document.createElement("li")
  li.textContent = e.target["new-task-description"].value
  const button = document.createElement("button")
  button.textContent = "X"
  button.addEventListener("click",e => { li.remove() })
  li.append(button)
  list.append(li)
})
//});








//As a user, I should be able to type a task into the input field.
//- As a user, I should be able to click some form of a submit button.
//- As a user, I expect to see the task string that I provided appear in the DOM
//  after the submit button has been activated.