




let lista = document.getElementById("form")
lista.addEventListener("submit", function(e){

e.preventDefault()



const scrittura = document.getElementById("list")

const cosaDaFare = {
    listaCosaFare : scrittura.value 
}

console.log(cosaDaFare)




const coseDaFareCard = document.createElement("div")

coseDaFareCard.classList.add("card")



coseDaFareCard.innerHTML = `

<p>  Remember to do </p>

${cosaDaFare.listaCosaFare}

<button onclick="deleteCard(event)" type="submit"> Delete </button>

`


const boh = document.getElementById("saved-list")

boh.appendChild(coseDaFareCard)

scrittura.value = ""


})

const deleteCard = function(e){

 console.log("Delete It now", e.target)

const sulClick= e.target
console.log( sulClick.parentElement)

sulClick.parentElement.remove()

const sicurezza= confirm("are you sure?")

if (sicurezza){parentElement.remove()}


}