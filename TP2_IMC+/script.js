document.getElementById('btnCalculer').onclick = function () {
    // lecture des champs input
    let poids = document.getElementById('poids').value;
    let taille = document.getElementById('taille').value;
    let objectif = document.getElementById('objectif').value
    // vider les champs input
    document.getElementById('poids').value = '';
    document.getElementById('taille').value = '';
    let imc = poids / (taille * taille);
    objectif = 22 * (taille * taille);
    let stat = 0
    let difference = poids - objectif;

    let divElement = document.getElementById('container');
    

    // afficher imc;
    document.getElementById('imc').innerHTML = imc.toFixed(1);
    let tranche = '';
    if (poids > objectif){
      stat = '-'
    } else {
      stat = '+'
    }
    
    if (imc < 18.5) {
      tranche = 'maigreur';
      divElement.style.backgroundColor = 'lightcoral';
    } else if (imc < 25) {
      tranche = 'normal';
      divElement.style.backgroundColor = 'lightgreen';
    } else if (imc < 30) {
      tranche = 'surpoids';
      divElement.style.backgroundColor = 'lightcoral';
    } else if (imc < 35) {
      tranche = 'obésité';
      divElement.style.backgroundColor = 'lightcoral';
    } else if (imc < 40) {
      tranche = 'obésité sévère';
      divElement.style.backgroundColor = 'lightcoral';
    } else if (imc >= 40) {
      tranche = 'obésité morbide';
      divElement.style.backgroundColor = 'lightcoral';
    }
    document.getElementById('tranche').innerHTML = tranche;
    document.getElementById('objectif').innerHTML = "Objectif : " + objectif.toFixed(1) + " (" + stat + difference + "kg" + ")";
  };