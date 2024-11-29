let personnes = [];

class Personne {
  constructor(prenom, nom) {
    this.prenom = prenom;
    this.nom = nom;
    this.status = true;
  }
}

const saveLocal = () => {
  localStorage.setItem("personnes", JSON.stringify(personnes));
};

const loadLocal = () => {
  const data = localStorage.getItem("personnes");
  if (data) {
    personnes = JSON.parse(data);
  }
};

const afficherHTML = () => {
  const tbody = document.getElementById("myTbody");
  tbody.innerHTML = "";
  personnes.forEach((p, index) => {
    const template = document.getElementById("templateTr");
    const clone = template.content.cloneNode(true);

    const tr = clone.querySelector("tr");
    const td = tr.querySelectorAll("td");

    td[0].textContent = p.prenom;
    td[1].textContent = p.nom;

    if (p.status) {
      tr.classList.add("table-success");
    } else {
      tr.classList.add("table-danger");
    }

    const btnSupprimer = tr.querySelector(".btn-danger");
    btnSupprimer.onclick = () => {
      personnes.splice(index, 1);
      saveLocal();
      afficherHTML();
    };

    const btnModifier = tr.querySelector(".btn-warning");
    btnModifier.onclick = () => {
      p.status = !p.status;
      saveLocal();
      afficherHTML();
    };

    tbody.appendChild(tr);
  });
};

document.getElementById("btnAjouter").onclick = () => {
  const prenom = document.getElementById("prenom").value.trim();
  const nom = document.getElementById("nom").value.trim();
  const personne = new Personne(prenom, nom);
  personnes.push(personne);
  saveLocal();
  afficherHTML();
  document.getElementById("prenom").value = "";
  document.getElementById("nom").value = "";
};

loadLocal();
afficherHTML();
