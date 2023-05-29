function enviarpresupuesto(){
    let valorcajapresupuesto = document.getElementById('txtpresupuesto').value;
    let elparrafopresupuesto = document.getElementById('parrafopresupuesto');
    elparrafopresupuesto.innerText = valorcajapresupuesto;

}

var arrnombregastos = [];
var arrnombregastoseliminar = [];
var arrcantidadgastos = [];
var arrcantidadgastoseleiminar = [];

function acumulargastos(){
    let acumuladogastos = 0;
    for (let i=0; i<arrcantidadgastos.length;i++){
        acumuladogastos = acumuladogastos + arrcantidadgastos[i];

    }
    return acumuladogastos;
}

function eliminarelemento(indice){
    arrnombregastoseliminar = [];
    arrcantidadgastoseleiminar= [];
    console.log(indice);
    arrnombregastos.splice(indice,1);
    arrcantidadgastos.splice(indice,1);

    eliminarcontenido();

    for (let i=0; i<arrnombregastos.length;i++){
        arrnombregastoseliminar.push(arrnombregastos[i]);
        arrcantidadgastoseleiminar.push(arrcantidadgastos[i]);
    }
    let valorparrafopresupuesto = document.getElementById('parrafopresupuesto').innerText;
    let elparrafogasto = document.getElementById('parrafogasto');
    let elparrafosaldo = document.getElementById('parrafosaldo');
    let elacumuladogastos = 0;

    for(let i=0; i<arrcantidadgastos.length; i++){
        elacumuladogastos = elacumuladogastos +arrcantidadgastos[i];
    }
    elparrafogasto.innerText = elacumuladogastos;

    let elsaldo = parseFloat(valorparrafopresupuesto) - parseFloat(elacumuladogastos);
    elparrafosaldo.innerText =elsaldo;

    pintargastoseliminar();

}

function eliminarcontenido(){
    let elparrafonombregasto = document.getElementById('parrafodosgastos');
    let elparrafovalor = document.getElementById('parrafovalor');
    let elparrafoaccion = document.getElementById('parrafoaccion');


    elparrafonombregasto.innerText = '';
    elparrafovalor.innerText= '';
    elparrafoaccion.innerText = '';
}

function pintargastoseliminar(){
    let elparrafonombregasto = document.getElementById('parrafodosgastos');
    let elparrafovalor = document.getElementById('parrafovalor');
    let elparrafoaccion = document.getElementById('parrafoaccion');

    let limiteeliminar = arrnombregastoseliminar.length;

    for( let j=0; j<limiteeliminar; j++){
        let unparrafonuevo = document.createElement('p');
        let unparrafovalor = document.createElement('p');
        let unparrafoaccionnuevo = document.createElement('p');
        let unboton = document.createElement('i');

        unparrafonuevo.innerText =arrnombregastoseliminar[j];
        unparrafovalor.innerText= arrcantidadgastoseleiminar[j];

        unboton.innerText= ' ';
        unboton.setAttribute('onclick', `eliminarelemento(${j}) `);
        unboton.classList.add("fa-regular", "fa-trash-can");

        elparrafonombregasto.appendChild(unparrafonuevo);
        elparrafovalor.appendChild(unparrafovalor);
        unparrafoaccionnuevo.appendChild(unboton);
        elparrafoaccion.appendChild(unparrafoaccionnuevo);
    }



}

function mostrargastos(){

    let elparrafonombregasto = document.getElementById('parrafodosgastos');
    let elparrafovalor = document.getElementById('parrafovalor');
    let elparrafoaccion = document.getElementById('parrafoaccion');

    let unparrafonuevo = document.createElement('p');
    

    let unparrafovalor = document.createElement('p');
    let unparrafoaccionnuevo = document.createElement('p');
    let unboton = document.createElement('i');
    


    for (let i=0; i<arrnombregastos.length; i++){
        unparrafonuevo.innerText = arrnombregastos[i];
        unparrafovalor.innerText = arrcantidadgastos[i];
        unboton.innerText = ' ';
        unboton.setAttribute('onclick', `eliminarelemento(${i})`);
        unboton.classList.add("fa-regular", "fa-trash-can");


        elparrafonombregasto.appendChild(unparrafonuevo);
        elparrafovalor.appendChild(unparrafovalor);
        unparrafoaccionnuevo.appendChild(unboton);
        elparrafoaccion.appendChild(unparrafoaccionnuevo);

    }
    //elparrafonombregasto.innerText = valorcajagasto;
    //elparrafovalor.innerText = valorcantidadgasto;
    

}


function enviargasto(){
    let valorcajagasto = document.getElementById('txtnombregasto').value;
    let valorcantidadgasto = document.getElementById('txtcantidadgasto').value;

    arrnombregastos.push(valorcajagasto);
    arrcantidadgastos.push(parseFloat(valorcantidadgasto));

    /*
    console.log('arreglo gastos');
    console.log(arrnombregastos);
    console.log('cantidad gastos');
    console.log(arrcantidadgastos);
    */

    let elacumuladogastos = acumulargastos();
    console.log(elacumuladogastos);


    let valorparrafopresupuesto = document.getElementById('parrafopresupuesto').innerText;
    let elparrafogasto = document.getElementById('parrafogasto');
    let elparrafosaldo = document.getElementById('parrafosaldo'); 
    /*
    let elparrafonombregasto = document.getElementById('parrafodosgastos');
    let elparrafovalor = document.getElementById('parrafovalor');*/
    /*
    elparrafonombregasto.innerText = valorcajagasto;
    elparrafovalor.innerText = valorcantidadgasto;*/
    elparrafogasto.innerText = elacumuladogastos;

    let elsaldo = parseFloat(valorparrafopresupuesto) - parseFloat(elacumuladogastos);
    elparrafosaldo.innerText = elsaldo;

    mostrargastos();

    
}


function asignareventos(){
    let elbotoncalcular = document.getElementById('btncalcular');
    elbotoncalcular.addEventListener('click', enviarpresupuesto);
    
    let elbotonanadir = document.getElementById('btnanadirgasto');
    elbotonanadir.addEventListener('click',enviargasto);
}