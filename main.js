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
    box.style.height = "40vh"
    box.style.border = "1px solid"
    box.style.borderRadius = "25px"
    box.style.boxShadow = "1px 5px 10px gray";

    let titlebox = document.createElement("h1")
    box.appendChild(titlebox)
    titlebox.textContent = item.name

    let imgdiv = document.createElement("div")
    box.appendChild(imgdiv)

    let imagebox = document.createElement("img")
    box.appendChild(imagebox)
    imagebox.src = item.image

    imagebox.style.height = "20vh"
    imagebox.style.width = "25vh"
   } )


}))