
            let tabla = document.createElement('table');
            let tr = document.createElement('tr');
            let img = document.createElement('img');
            img.innerHTML =`<th></th>`;
            let nom = document.createElement('h3');
            nom.innerHTML = `<th><h3>${nombre}</h3><th>`;
            let pre = document.createElement('p');
            pre.innerHTML = `<th><p>${precio}</p></th>`;
            let cant = document.createElement('p');
            cant.innerHTML = `<th><p></p><th>`;
            cursos.appendChild(borrar);
            cursos.appendChild(tabla);
            cursos.appendChild(tr);
            cursos.appendChild(img);
            cursos.appendChild(nom);
            cursos.appendChild(pre);
            cursos.appendChild(cant);
        