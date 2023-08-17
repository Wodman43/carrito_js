const openmodal = document.querySelector('.imagenp');
const modal = document.querySelector('.modal');
const closemodal = document.querySelector('.modal-close');
openmodal.addEventListener('mouseover', () => {
    modal.classList.add('modal--show');
});

closemodal.addEventListener('click', () => {
    modal.classList.remove('modal--show');
});

const cursooos = document.querySelectorAll('.btn');
const cursos = document.getElementById('miscursos');
const botones = document.querySelectorAll('btn-2');

let miscursos = [];

evenlistners();

function evenlistners() {
    document.addEventListener('DOMContentLoaded', () => {
        miscursos = JSON.parse(localStorage.getItem('miscursos')) || [];
        console.log(miscursos);
        crearcurso();
    });

    cursooos.forEach((boton) => {
        boton.addEventListener('click', agregarcurso);
    });

   
}

function agregarcurso(e) {
    const productos = e.target.parentElement;
    const img = productos.querySelector('img').src;
    const nombre = productos.querySelector('h2').innerHTML;
    const precio = parseFloat(productos.querySelector('p').innerHTML);

    const cursitosobj = {
        id: Date.now(),
        img: img,
        nombre: nombre,
        precio: precio,
        cant: 1,
    };

    const cursoExistente = miscursos.find(curso => curso.nombre === cursitosobj.nombre);
    if (cursoExistente) {
        cursoExistente.cant++;
    } else {
        miscursos.push(cursitosobj);
    }

   
    crearcurso();
}

function crearcurso() { //limpiarhtml(); 

    cursos.innerHTML = '';

    miscursos.forEach(curso => {
        const borrar = document.createElement('img');
        borrar.classList = 'hijos-añadir';
        borrar.style.width = '30px';
        borrar.style.height = '30px';
        borrar.src = 'https://cdn-icons-png.flaticon.com/128/5974/5974771.png';
        const tabla = document.createElement('div');
        tabla.classList = 'añadir';

        const img1 = document.createElement('img');
        img1.src = curso.img;
        img1.style.width = '80px';
        img1.style.height = '60px';
        img1.classList = 'hijos-añadir';

        const nom = document.createElement('h3');
        nom.innerHTML = `<h3>${curso.nombre}</h3>`;
        nom.classList = 'hijos-añadir';

        const pre = document.createElement('p');
        pre.innerHTML = `<p>Precio: ${curso.precio}</p>`;
        pre.classList = 'hijos-añadir';

        const cant = document.createElement('p');
        cant.innerHTML = `<p>Cantidad: ${curso.cant}</p>`;
        cant.classList = 'hijos-añadir';

        tabla.appendChild(nom);
        tabla.appendChild(pre);
        tabla.appendChild(img1);
        tabla.appendChild(cant);
        tabla.appendChild(borrar);
        borrar.onclick = () =>{
            borrarcurso(curso.id);
            // localStorage.clear();
            
        }

        cursos.appendChild(tabla);
       

        let vaciar = document.getElementById('vaciar');
            vaciar.addEventListener('click', () =>{
                vaciarC(curso.id);
            }
            );
    });
    

    const subtotal = document.createElement('h3');
    subtotal.classList = 'añadir'
    const total = miscursos.reduce((accumulator, curso) => accumulator + curso.precio * curso.cant, 0);
    subtotal.textContent = `Subtotal: ${total}`;
    
    cursos.appendChild(subtotal);
    
    agregarstorage();
}
function borrarcurso(id) {
    console.log('Borrado',id);
    miscursos = miscursos.filter(curso => curso.id !== id);
    crearcurso();
}

function vaciarC(id){
    miscursos = miscursos.splice(id);
    crearcurso();

}


function agregarstorage() {
    localStorage.setItem('miscursos', JSON.stringify(miscursos));
}

// function limpiarhtml(){
//     while (cursos.firstChild){
//         cursos.removeChild(cursos.firstChild);
//     }
// }
 

