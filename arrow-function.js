let main = document.createElement('main');
main.classList.add('container');
let table = document.createElement('table');
table.classList.add('table');
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
    for(i=0; i < obj.length; i++){
        let tr = document.createElement('tr');    
        let tdNome = document.createElement('td');    
        tdNome.innerHTML = obj[i].name;
        let tdAltura = document.createElement('td');    
        tdAltura.innerHTML = obj[i].height;
        let tdPeso = document.createElement('td');    
        tdPeso.innerHTML = obj[i].mass;

        tbody.appendChild(tr);
        tr.appendChild(tdNome);
        tr.appendChild(tdAltura);
        tr.appendChild(tdPeso);
    }
    console.log(obj);
}



// const x = (y,z) =>{
//     return y * z;
// }
// console.log(x(2,6));

// //calcular área do quadrado
// const areaQuadrado = (b, h) =>{
//     return b * h;
// }
// console.log(areaQuadrado(4,4));

// const calculaPerimetro = (l1,l2,l3,l4) =>{
//     return l1 + l2 + l3 + l4;
// }

// console.log(calculaPerimetro(4,5,2,9));



// //área do triângulo
// const areaTriangulo = (b, h) =>{
//     let area = (b * h) / 2;
//     return area;
// }
// console.log(areaTriangulo(5,6));