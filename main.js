//xdata now represents array w/ 200 items w. 3 values each

//keep count of completed todos?
//display not completed

let xdata = fetch("https://jsonplaceholder.typicode.com/todos")
  .then((resp) => resp.json())
  .then((list) => {
    // let arr = list.map((x) => x.title)
    let arr = list
      .map((x) => `<li id="${x.id}" class="li">${x.title} </li>`)
      .join("")
    // arr = arr.join("")
    return (document.getElementById("todos").innerHTML = arr)

    // console.log(list.map((x) => `<li>${x.title}</li>`))
    // console.log(list)
    // document.getElementById("todos").innerHTML = list
  })

// remove if string includes ID

document.getElementById("container").addEventListener("click", function (e) {
  const isLi = e.target.className.includes("li")

  if (isLi) {
    const selection = e.target.id
    document.getElementById(selection).remove()
  }
})

// add class display: none
// let filteredData = xdata[1].filter(function (a) {
//   if (a.completed === false) {
//     return `${a.title}`
//   }
// })

// if item includes id then remove
