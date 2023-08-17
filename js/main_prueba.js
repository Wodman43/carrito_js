const openmodal = document.querySelector('.imagenp');
const modal = document.querySelector('.modal');
const closemodal = document.querySelector('.modal-close');
openmodal.addEventListener('mouseover',()=>{
    modal.classList.add('modal--show');
});

closemodal.addEventListener('click',()=>{
    modal.classList.remove('modal--show');
});

const cursooos = document.querySelectorAll('.btn');
const cursos = document.getElementById('miscursos');

let miscursos = [];

evenlistners();

function evenlistners(){

    document.addEventListener('DOMContentLoaded',()=>{
        miscursos = JSON.parse(localStorage.getItem('miscursos')) || [];
        console.log(miscursos);
        crearcurso();
    })


cursooos.forEach((boton) => {
    boton.addEventListener('click', agregarcurso);
  });
}

function agregarcurso(e) { // limpiarhtml();

    const productos = e.target.parentElement;
    const img = productos.querySelector('img').src;
    const nombre = productos.querySelector('h2').innerHTML;
    const precio = parseFloat(productos.querySelector('p').innerHTML);
    let suma = 0;
    
  suma+=productos[precio];
   
   
   
    let contador = 0;
    contador ++;
   
            // const borrar = document.createElement('a');
            // borrar.classList = 'borrar-curso';
            // borrar.innerText = 'eliminar';
            // // let vaciar = document.createElement('a');
            // // vaciar.classList = 'btn'
            // // vaciar.innerHTML = '<a>Vaciar Carrito</a>';
            // let tabla = document.createElement('div');
            // tabla.classList ='añadir'
            // // let divh = document.createElement('tr');
            // let img1 = document.createElement('img');
            // img1.src = img;
            // img1.style.width = '80px';
            // img1.style.height = '60px';
            // img1.classList = 'hijos-añadir';
            // let nom = document.createElement('h3');
            // nom.innerHTML = `<h3>${nombre}</h3>`;
            // nom.classList = 'hijos-añadir';
            // let pre = document.createElement('p');
            // pre.innerHTML = `<p>Precio: ${precio}</p>`;
            // pre.classList = 'hijos-añadir';
            // let cant = document.createElement('p');
            // cant.innerHTML= `<p>${contador}</p>`;
            // cant.classList = 'hijos-añadir';
            // let subtotal = document.getElementById('subtotal');
            // subtotal.textContent = `Subtotal: ${suma}`;

            const cursitosobj = {
                id: Date.now(),
                img : img,
                nombre : nombre,
                precio : precio,
                cant : 1
            }

            const cursoE = miscursos.find(curso => curso.nombre === cursitosobj.nombre);

            if (cursoE) {
                cursoE.cant++;
            } else {
                miscursos.push(cursitosobj);
            }

            // miscursos = [...miscursos,cursitosobj];
            // miscursos.push(img,nombre,precio,cant);
            // cursos.appendChild(divh);
            // tabla.appendChild(nom);
            // tabla.appendChild(pre);
            // tabla.appendChild(img1);
            // tabla.appendChild(cant);
            // tabla.appendChild(borrar);
            // // let contar = 0;
           


            // cursos.appendChild(tabla);
            // cursos.appendChild(subtotal);
            // console.log(nombre);
            // console.log(precio);
            // contar = 1;
     
          
     
  

            // let vaciar = document.getElementById('vaciar');
            // vaciar.addEventListener('click', () =>{
            //     cursos.remove();
            // }
            // );

    agregarstorage();
    crearcurso();

        }


        function crearcurso(){
            cursos.innerHTML = '';

            miscursos.forEach(curso =>{
                const borrar = document.createElement('a');
                borrar.classList = 'borrar-curso';
                borrar.innerText = 'eliminar';
                // let vaciar = document.createElement('a');
                // vaciar.classList = 'btn'
                // vaciar.innerHTML = '<a>Vaciar Carrito</a>';
                let tabla = document.createElement('div');
                tabla.classList ='añadir'
                // let divh = document.createElement('tr');
                let img1 = document.createElement('img');
                img1.src = curso.img;
                img1.style.width = '80px';
                img1.style.height = '60px';
                img1.classList = 'hijos-añadir';
                let nom = document.createElement('h3');
                nom.innerHTML = `<h3>${curso.nombre}</h3>`;
                nom.classList = 'hijos-añadir';
                let pre = document.createElement('p');
                pre.innerHTML = `<p>Precio: ${curso.precio}</p>`;
                pre.classList = 'hijos-añadir';
                let cant1 = document.createElement('p');
                cant1.innerHTML= `<p>${curso.cant}</p>`;
                cant1.classList = 'hijos-añadir';
                const total = miscursos.reduce((accumulator, curso) => accumulator + curso.precio * curso.cantidad, 0);
                let subtotal = document.getElementById('subtotal');
                subtotal.innerHTML = `<p>Subtotal: ${total}</p>`;
                tabla.appendChild(nom);
                tabla.appendChild(pre);
                tabla.appendChild(img1);
                tabla.appendChild(cant1);
                tabla.appendChild(borrar);
                cursos.appendChild(tabla);
                cursos.appendChild(subtotal);

                      
        borrar.onclick = () =>{
            tabla.remove();
            borrarcurso(tabla.id);
            
        }

            })

        }

function borrarcurso(id) {
    console.log('Borrado');
    miscursos = miscursos.filter(curso => curso.id !== id);
    crearcurso();
}


function agregarstorage() {
    localStorage.setItem('miscursos',JSON.stringify(miscursos));
}