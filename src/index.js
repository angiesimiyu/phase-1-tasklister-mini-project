document.addEventListener("DOMContentLoaded", () => {
  //your code here
  const form = document.querySelector("#create-task-form")
  form.addEventListener("submit", v, false);

  function v(event) {
    let input  = document.getElementById("new-task-description").value;
    document.getElementById("tasks").innerHTML += input;
    event.preventDefault();
  }

});

// function buildTask(tasks){
//   let p = document.createElement("p")
//   let btn = document.createElement("button")
//   btn.addEventListener("click", handleDelet)
//   btn.textContent = "X"
//   p.textContent = tasks
//   p.appendChild(btn)
//   console.log(p)
//   document.querySelector("list", "tasks").appendChild(p)
// }

// function handleDelet(v) {
//   v.target.parentNode.remove()
// }
//document.addEventListener("DOMContentLoaded", () => {
//   //your code here
//    const form = document.querySelector("create-task-form")
//    form.addEventListener("submit", (v) => {
//     v.preventDefault
//     console.log(v.target.new-task-description.value)
//     form.reset()
//   })

// });

