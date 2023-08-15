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

// let miscursos = [];

// evenlistners();


// function evenlistners(){
//     cursooos.addEventListener('click',agregarcurso);
//     document.addEventListener('DOMContentLoaded',()=>{
//         miscursos = JSON.parse(localStorage.getItem('miscursos')) || [];
//         console.log(miscursos);
//     })
// }

cursooos.forEach(boton => {
    boton.addEventListener('click', agregarcurso);
  });

function agregarcurso(e) { // limpiar();

    const productos = e.target.parentElement;
    const img = productos.querySelector('img').src;
    const nombre = productos.querySelector('h2').innerHTML;
    const precio = productos.querySelector('p').innerHTML;
    console.log(nombre);
    console.log(precio)
            const borrar = document.createElement('a');
            borrar.classList = 'borrar-curso';
            borrar.innerText = 'eliminar';
            let tabla = document.createElement('div');
            tabla.classList ='añadir'
            // let divh = document.createElement('tr');
            let img1 = document.createElement('img');
            img1.src = img;
            img1.style.width = '80px';
            img1.style.height = '60px';
            let nom = document.createElement('h3');
            nom.innerHTML = `<h3>${nombre}</h3>`;
            let pre = document.createElement('p');
            pre.innerHTML = `<p>${precio}</p>`;
            
            // cursos.appendChild(divh);

            borrar.onclick = () =>{
                borrarcurso(cursooos);
                cursos.remove();
                
            }

            let i = 0;

            while(i < 1){
            tabla.appendChild(nom);
            tabla.appendChild(pre);
            tabla.appendChild(img1);
            tabla.appendChild(borrar);
            cursos.appendChild(tabla);
        i++;}
            
            

            // tabla.appendChild(nom);
            // tabla.appendChild(pre);
            // tabla.appendChild(img1);
            // tabla.appendChild(borrar);
            // cursos.appendChild(tabla);
            
           
            // cursos.appendChild(borrar);
    
            
           
        
    
    // agregarstorage();

        }

function borrarcurso(id) {
    console.log('Borrado');
    // cursos = cursos.filter(curso => curso.id !== id);
}

// function limpiar(){
//     while(cursos.firstChild){
//         cursos.removeChild(cursos.firstChild);
//     }
// }

// function agregarstorage() {
//     localStorage.setItem('miscursos',JSON.stringify(miscursos));
// }