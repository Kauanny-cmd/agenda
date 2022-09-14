const valueTask = document.getElementById('task');
const valueTime = document.getElementById('time');
const selectedDay = document.getElementById('daySelect');
const dayModal = document.getElementById("dayModal");
const dayModalText = document.getElementById("dayModalText");
const list = document.querySelector(".listTask ul");

const date = new Date();

let itemList = []

const render = () => {
  date.setDate(1);

  const monthDays = document.querySelector('.days');

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDays = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDay = 7 - lastDayIndex - 1;

  const months = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
  ];

  document.querySelector('.date h1').innerHTML = months[date.getMonth()];

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDays - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDay; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }

};

//Salvando task
const saveTask = () => {

  const li = document.createElement("li");

  const valueDay = selectedDay.options[selectedDay.selectedIndex].value;

  // Checando valores não vazios
  if (
    valueTask &&
    valueDay &&
    valueTime &&
    (dayModal.value && dayModalText.value) != '') {

    if (valueTask.value.length >= 20) {
      alert("Limite de caracteres atingido!");
    } else {
      for (let i = 0; i < 1; i++) {
        itemList.push(
          li.innerHTML = `
        <div class="task-card">
          <p class="title">${valueTask.value}</p>
          <p class="timeDay">${valueTime.value} - ${valueDay}</p>
          <p>${dayModal.value} de ${dayModalText.value}</p>
  
          <button class="trash" onclick="removeTask(${i})"> <img src="./assets/img/trash.svg"></button>
        </div> `
        )
        list.appendChild(li);

        // Limpando valores
        valueTask.value = '';
        valueTime.value = '';
        dayModal.value = '';
        dayModalText.value = '';
      }
    }
  } else {
    alert('Por favor, preencha os campos da tarefa!');
  }
}

const removeTask = (i) => {
  var listSelect = document.getElementsByTagName("ul")[0]
  var item = listSelect.getElementsByTagName('li')

  list.removeChild(item[i])

  itemList.splice(i, 1)
}

// Removendo todas as task
const removeTaskAll = () => {
  list.innerHTML = ''
  itemList.splice(0, itemList.length)
}

document.querySelector('#btn').addEventListener("click", () => {
  saveTask()
})

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  render();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  render();
});

render();
