document.getElementById('add').onclick = () => {
    let fae = document.getElementById('fruit').value;

    if (fae.trim() === '') {
      alert("Veuillez entrer un nom de fruit.");
      return;
    }
    let tr1 = document.createElement('tr');
    let td1_1 = document.createElement('td');
    let td1_2 = document.createElement('td');
    td1_1.textContent = fae;

    let btn = document.createElement('button');
    btn.textContent = "X";
    btn.onclick = () => {
      tr1.remove(); 
    };

    td1_2.appendChild(btn); 
    tr1.appendChild(td1_1);
    tr1.appendChild(td1_2);

    document.getElementById('tableau').querySelector('tbody').appendChild(tr1);

    document.getElementById('fruit').value = '';
  };