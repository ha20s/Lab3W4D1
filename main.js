let url = "https://rickandmortyapi.com/api/character"
let container = document.getElementById("container")


fetch(url)
.then((res) => res.json())

.then((data => {
   let items = data.results

   items.map(item => {
    let box = document.createElement("div")
    container.appendChild(box)
    box.style.width = "40vh"
    box.style.height = "50vh"
    // box.style.border = "1px solid"
    box.style.boxShadow = "1px 2px 3px gray";

    let titlebox = document.createElement("h1")
    box.appendChild(titlebox)
    titlebox.textContent = item.name
    let imagebox = document.createElement("img")
    box.appendChild(imagebox)
    imagebox.src = item.image
   } )


}))