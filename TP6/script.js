document.getElementById('btnadd').onclick = () => {
    let prenom = document.getElementById("prenom");
    let nom = document.getElementById("nom");

    let tr1 = document.createElement('tr');
    let td1_1 = document.createElement('td');
    let td1_2 = document.createElement('td');
    let td1_3 = document.createElement('td');
    let td1_4 = document.createElement('td');

    td1_1.textContent = prenom.value;
    td1_2.textContent = nom.value;

    let btn = document.createElement('button');
    btn.className = "btn btn-danger"; // Optional for styling
    btn.onclick = () => {
        tr1.remove();
    };
    let icon = document.createElement('i');
    icon.className = "fa fa-trash";
    btn.appendChild(icon)


    let btn2 = document.createElement('button');
    btn2.className = "btn btn-warning"
    let icon2 = document.createElement('i')
    icon2.className = "fa fa-check"
    btn2.appendChild(icon2)
    btn2.onclick = () => {
        tr1.classList.toggle("table-danger");
    }
//boutons
    td1_3.appendChild(btn);
    td1_4.appendChild(btn2);


//cellules
    tr1.appendChild(td1_1);
    tr1.appendChild(td1_2);
    tr1.appendChild(td1_3);
    tr1.appendChild(td1_4);
    document.getElementById('vip').querySelector('tbody').appendChild(tr1);

    prenom.value = '';
    nom.value = '';
};
