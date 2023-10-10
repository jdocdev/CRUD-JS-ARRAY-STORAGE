// Obtener elementos del DOM
const form = document.getElementById("formRegister"); // Obtener el formulario por su ID
const nameInput = document.getElementById("nameInput"); // Obtener el input del nombre por su IDjuan07285

const emailInput = document.getElementById("emailInput"); // Obtener el input del correo electrónico por su ID
const tableBody = document.getElementById("tableBody"); // Obtener el cuerpo de la tabla por su ID

let data = []; // Array para almacenar los datos ingresados en el formulario

// Event Listener para el evento "submit" del formulario
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

  const name = nameInput.value; // Obtener el valor del input del nombre
  const email = emailInput.value; // Obtener el valor del input del correo electrónico

  if (name && email) {
    // Verificar que el nombre y el correo electrónico no estén vacíos
    const newData = { name, email }; // Crear un nuevo objeto con los datos ingresados
    data.push(newData); // Agregar el nuevo objeto al array de datos
    renderTable(); // Llamar a la función para renderizar la tabla con los datos actualizados
    form.reset(); // Reiniciar el formulario
  }
});

// Función para renderizar la tabla con los datos
function renderTable() {
  tableBody.innerHTML = ""; // Limpiar el contenido actual del cuerpo de la tabla

  data.forEach(function (item, index) {
    // Iterar sobre los elementos del array de datos
    const row = document.createElement("tr"); // Crear una nueva fila en la tabla
    const nameCell = document.createElement("td"); // Crear una celda para el nombre
    const emailCell = document.createElement("td"); // Crear una celda para el correo electrónico
    const actionCell = document.createElement("td"); // Crear una celda para las acciones
    const editButton = document.createElement("button"); // Crear un botón para editar
    const deleteButton = document.createElement("button"); // Crear un botón para eliminar

    nameCell.textContent = item.name; // Establecer el contenido de la celda del nombre
    emailCell.textContent = item.email; // Establecer el contenido de la celda del correo electrónico
    editButton.textContent = "Edit"; // Establecer el texto del botón de editar
    deleteButton.textContent = "Delete"; // Establecer el texto del botón de eliminar

    editButton.classList.add("button","button--secondary"); // Agregar una clase al botón de editar
    deleteButton.classList.add("button","button--tertiary"); // Agregar una clase al botón de eliminar

    editButton.addEventListener("click", function () {
      // Agregar un Event Listener al botón de editar
      editData(index); // Llamar a la función para editar los datos en la posición del índice
    });

    deleteButton.addEventListener("click", function () {
      // Agregar un Event Listener al botón de eliminar
      deleteData(index); // Llamar a la función para eliminar los datos en la posición del índice
    });

    actionCell.appendChild(editButton); // Agregar el botón de editar a la celda de acciones
    actionCell.appendChild(deleteButton); // Agregar el botón de eliminar a la celda de acciones

    row.appendChild(nameCell); // Agregar la celda del nombre a la fila
    row.appendChild(emailCell); // Agregar la celda del correo electrónico a la fila
    row.appendChild(actionCell); // Agregar la celda de acciones a la fila

    tableBody.appendChild(row); // Agregar la fila al cuerpo de la tabla
  });
}

// Función para editar los datos
function editData(index) {
  const item = data[index]; // Obtener el objeto de datos en la posición del índice
  nameInput.value = item.name; // Establecer el valor del input del nombre con el nombre correspondiente
  emailInput.value = item.email; // Establecer el valor del input del correo electrónico con el correo electrónico correspondiente
  data.splice(index, 1); // Eliminar los datos en la posición del índice del array
  renderTable(); // Renderizar la tabla con los datos actualizados
}

// Función para eliminar los datos
function deleteData(index) {
  data.splice(index, 1); // Eliminar los datos en la posición del índice del array
  renderTable(); // Renderizar la tabla con los datos actualizados
}
