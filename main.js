let main = document.createElement('main');
main.classList.add('container');
let table = document.createElement('table');
table.classList.add('table');
table.classList.add('striped');
let thead = document.createElement('thead');
let th1   = document.createElement('th');
th1.innerHTML = "nome";
let th2   = document.createElement('th');
th2.innerHTML = "altura";
let th3   = document.createElement('th');
th3.innerHTML = "peso";

main.appendChild(table);
table.appendChild(thead);
thead.appendChild(th1);
thead.appendChild(th2);
thead.appendChild(th3);

let tbody = document.createElement('tbody');
table.appendChild(tbody);




let root = document.getElementById('root');
root.appendChild(main);



var xmlhttp = new XMLHttpRequest();
var url = "https://swapi.co/api/people/";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        renderContent(data);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();


const renderContent = (data) =>{
    let obj = data.results;
    obj.forEach(people =>{
        let tr = document.createElement('tr');    
        let tdNome = document.createElement('td');    
        tdNome.innerHTML = people.name;
        let tdAltura = document.createElement('td');    
        tdAltura.innerHTML = people.height;
        let tdPeso = document.createElement('td');    
        tdPeso.innerHTML = people.mass;

        tbody.appendChild(tr);
        tr.appendChild(tdNome);
        tr.appendChild(tdAltura);
        tr.appendChild(tdPeso);
    });
        
}
