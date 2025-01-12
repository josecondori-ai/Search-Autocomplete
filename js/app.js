// sector variables 
const words = ["facebook", "facetime", "factory",
    "google", "github", "gmail", "amazon", "apple",
    "adobe", "figma", "airbnb"
]; 

// Obtener el input 

const searchInput = document.getElementById('search');  
// searchInput = input 
const list = document.getElementById('list');  
// list = ul


searchInput.addEventListener("input", () => {
console.log(searchInput)
console.log(list)
    // obtener el valor del input
    const inputValue = searchInput.value.toLowerCase(); 


    console.log(inputValue)
    list.innerHTML = '';

    // Verifico si hay algun texto ingresado en el input 

    if(inputValue){
        // filtro los valores 
        console.log('soy un condicional') 
        const wordsFilter = words.filter(word =>
            word.toLowerCase().startsWith(inputValue)
        )
        console.log(wordsFilter)

        // creamos un elemento lista por cada palabra agregada
        wordsFilter.forEach(word => {
            const item = document.createElement("li"); 
            item.textContent = word; 
           
            item.addEventListener("click", () =>{
                searchInput.value = word; 
                list.innerHTML = "";

            })

            list.appendChild(item)
        })
    }



})