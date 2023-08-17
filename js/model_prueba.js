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

let miscursos = [];

evenlistners();

function evenlistners() {
    document.addEventListener('DOMContentLoaded', () => {
        miscursos = JSON.parse(localStorage.getItem('miscursos')) || [];
        console.log(miscursos);
        actualizarCarrito();
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
        cantidad: 1,
    };

    const cursoExistente = miscursos.find(curso => curso.nombre === cursitosobj.nombre);

    if (cursoExistente) {
        cursoExistente.cantidad++;
    } else {
        miscursos.push(cursitosobj);
    }

    agregarstorage();
    actualizarCarrito();
}

function actualizarCarrito() {
    cursos.innerHTML = '';

    miscursos.forEach(curso => {
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
        cant.innerHTML = `<p>Cantidad: ${curso.cantidad}</p>`;
        cant.classList = 'hijos-añadir';

        tabla.appendChild(nom);
        tabla.appendChild(pre);
        tabla.appendChild(img1);
        tabla.appendChild(cant);

        cursos.appendChild(tabla);
    });

    const subtotal = document.createElement('p');
    const total = miscursos.reduce((accumulator, curso) => accumulator + curso.precio * curso.cantidad, 0);
    subtotal.textContent = `Subtotal: ${total}`;
    cursos.appendChild(subtotal);
}

function agregarstorage() {
    localStorage.setItem('miscursos', JSON.stringify(miscursos));
}

function borrarcurso(id) {
    console.log('Borrado');
    miscursos = miscursos.filter(curso => curso.id !== id);
    actualizarCarrito();
}
