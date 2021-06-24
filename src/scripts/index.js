// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/

import { recipesJSON } from "./data";

// \/ All of your javascript should go here \/

console.log("hello")

const recipes = JSON.parse(recipesJSON);

console.log(recipes)

for (const items in recipes) {

    console.log(recipes[items])
    for (let i = 0; i < recipes[items].length; i++) {
        const element = recipes[items][i];
        console.log(element.author)
        //   let image = document.createElement("img");
        //   image.src = element.image

        //   document.querySelector(".container").appendChild(image)
        document.getElementById(`${items}`).innerHTML += `<div class="card m-3" style="width: 18rem;">

    <img src="${element.image}" style="width: 18rem; height:18rem" alt="...">

<div class="card-body">
  <h5 class="card-title">${element.title}</h5>
  <p class="card-text">${element.author}</p>
  <hr>
  <div>ingredients:${element.ingredients.join(" ")}</div>
</div>
</div>`
       
    }

}