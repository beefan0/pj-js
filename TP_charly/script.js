function NombreGeneration(count) {
  let Nombres = [];
  for (let i = 0; i < count; i++) Nombres.push(i);
  return Nombres;
}

function mix(array) {
  let mixed = [];
  for (let i = 0; i < array.length; i++) {
    let randomIndex;
    while (
      mixed[(randomIndex = Math.floor(Math.random() * array.length))] != null
    );
    mixed[randomIndex] = array[i];
  }
  return mixed;
}

function Debut() {
  const uniqueNombres = mix(NombreGeneration(12));
  const paires = mix(uniqueNombres.concat(uniqueNombres));

  const container = document.querySelector(".container");

  for (let Nombre of paires) {
    let cardDiv = document.createElement("div");
    let cardImage = document.createElement("img");
    cardImage.src = "img/" + Nombre + ".webp";
    cardDiv.appendChild(cardImage);
    container.appendChild(cardDiv);
  }

  clics(paires);
}

function clics(cartes) {
  const Images = document.querySelectorAll(".container img");

  let IndexCarte = -1;
  let matchedPaires = 0;
  const startTime = new Date();

  for (let i = 0; i < Images.length; i++) {
    Images[i].onclick = (event) => {
      const currentDiv = Images[i].parentElement; 
  
      if (IndexCarte === -1) {
        IndexCarte = i;
        currentDiv.classList.add("selected"); 
      } else {
        const previousDiv = Images[IndexCarte].parentElement; 
        previousDiv.classList.remove("selected"); 
  
        if (IndexCarte !== i && cartes[IndexCarte] === cartes[i]) {
          Images[IndexCarte].parentElement.remove(); 
          Images[i].parentElement.remove(); 
          matchedPaires++;
        }
  
        if (matchedPaires === 12) {
          const elapsedTime = (new Date().getTime() - startTime.getTime()) / 1000;
          alert("Félicitations ! Temps total : " + elapsedTime + " secondes");
        }
  
        IndexCarte = -1; 
      }
    };
  }
}  

Debut();
