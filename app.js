
const label = document.querySelector('.input');
const ul = document.querySelector('.lista');
const section = document.querySelector('.section');

function clickear() {
    if (label.value !== "") {
    const li = document.createElement('li');
    li.className = 'tarea';
    const p = document.createElement('p');
    p.className = 'texto';
    p.textContent = label.value;
    label.value = "";
    ul.appendChild(li)
    li.appendChild(p)
    li.appendChild(agregarBoton());
    section.style.display = "none";
    }
    else {
        alert("Ingrese una tarea");
    }
}
function agregarBoton() {
    const btnBorrar = document.createElement('button');
    btnBorrar.classList.add('btnBorrar');
    btnBorrar.textContent = "X";
    btnBorrar.addEventListener('click',(e) => {
        const item = e.target.parentNode;
        item.remove(item);

        const items = document.querySelectorAll('.tarea');
        if (items.length === 0) {
            section.style.display = "block";
        }
    });
    return btnBorrar;
};
