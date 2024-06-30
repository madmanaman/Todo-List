const btnAgregar = document.getElementById("btnAgregar");
const tareaInput = document.getElementById("tareaInput");
const tareaid = document.getElementById("t_id");
const tarea = document.getElementById("t_tarea");
const chekcboxTarea = document.getElementById("t_check");
const btnEliminar = document.getElementById("t_btn")
const agregarDiv = document.getElementById("tareas")


let tareasArray = [
    {id: 16, tarea:"Hacer mercado", completada: false},
    {id: 60, tarea:"Estudiar", completada: false},
    {id: 24, tarea:"Pasear el perro", completada: false},
]

btnAgregar.addEventListener("click", () =>{
    let nuevaTarea = { id: Date.now(), tarea: tareaInput.value, completada: false};
    tareasArray.push(nuevaTarea);
    tareaInput.value = "";
    renderTareas()
})


function renderTareas (){
    let html=`<div class="tareasContainer">
                <div class="t_id" id="t_id">
                    <h4>ID</h4>
                </div>
                <div class="t_tarea" id="t_tarea">
                    <h4>Tarea</h4>
                </div>
                <div class="t_check" id="t_check">
                </div>
                <div class="t_btn" id="t_btn">
                </div>
            </div>`;
    for (let hacer of tareasArray)
        html += `
            <div class="tareasContainer">
                <div class="t_id" id="t_id">
                    <p>${hacer.id}</p>
                </div>
                <div class="t_tarea" id="t_tarea">
                    <p>${hacer.tarea}</p>
                </div>
                <div class="t_check" id="t_check">
                    <input type="checkbox" onclick="check(${hacer.id})" ${hacer.completada ? 'checked' : null}>
                </div>
                <div class="t_btn" id="t_btn">
                    <i class="fa-solid fa-rectangle-xmark fa-lg" style="color: #fe0606;" onclick="borrar(${hacer.id})"></i>
                    
                </div>
            </div>
    
    `
    document.getElementById("total").innerHTML = tareasArray.length
    agregarDiv.innerHTML = html;      
}

const borrar =(id) => {
    const index = tareasArray.findIndex((elemento) => elemento.id == id)
    tareasArray.splice(index,1)
    renderTareas()
    tareasRealizadas()
}

const check =(id) => {
    const index = tareasArray.findIndex((elemento) => elemento.id == id)
    tareasArray[index].completada = !tareasArray[index].completada
    tareasRealizadas()
    }

const tareasRealizadas = () =>{ 
    let realizadas = tareasArray.filter(ele => ele.completada == true)
    document.getElementById("realizadas").innerHTML = `${realizadas.length}`
}

renderTareas()
tareasRealizadas()

