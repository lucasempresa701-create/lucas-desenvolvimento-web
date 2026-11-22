const form = document.querySelector("#booking-form");
const serviceField = form.elements.namedItem("service");
const dateField = form.elements.namedItem("date");
const timeOptions = document.querySelector("#time-options");
const submitButton = form.querySelector('button[type="submit"]');
const hint = document.querySelector("#booking-hint");
const result = document.querySelector("#booking-result");

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  dateStyle: "long",
  timeZone: "UTC",
});
function localCalendarDay(now) {
  return new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
}

function isClosed(day) {
  return day.getUTCDay() < 2;
}

function timeChoice(time) {
  const container = document.createElement("label");
  container.className = "booking-choice";
  const field = document.createElement("input");
  field.type = "radio";
  field.name = "time";
  field.value = time;
  field.required = true;
  const caption = document.createElement("span");
  caption.textContent = time;
  container.append(field, caption);
  return container;
}

function availableTimes(day, duration, now = new Date()) {
  const today = localCalendarDay(now);
  if (!day || day < today || isClosed(day) || !duration) return [];

  const isSaturday = day.getUTCDay() === 6;
  const opening = (isSaturday ? 9 : 10) * 60;
  const closing = (isSaturday ? 17 : 19) * 60;
  const currentMinute = day.getTime() === today.getTime()
    ? now.getHours() * 60 + now.getMinutes()
    : -1;
  const times = [];
  for (let minute = opening; minute + duration <= closing; minute += 30) {
    if (minute <= currentMinute) continue;
    const hours = String(Math.floor(minute / 60)).padStart(2, "0");
    const minutes = String(minute % 60).padStart(2, "0");
    times.push(`${hours}:${minutes}`);
  }
  return times;
}

function showTimes() {
  const now = new Date();
  const day = dateField.valueAsDate;
  const duration = Number(serviceField.selectedOptions[0].dataset.duration);
  const times = availableTimes(day, duration, now);
  dateField.min = localCalendarDay(now).toISOString().slice(0, 10);
  dateField.setCustomValidity("");
  timeOptions.replaceChildren(...times.map(timeChoice));
  submitButton.disabled = true;
  result.textContent = "";

  if (dateField.validity.rangeUnderflow) {
    hint.textContent = "Escolha uma data de hoje em diante.";
  } else if (day && isClosed(day)) {
    const message = "A barbearia fecha aos domingos e às segundas. Escolha outro dia.";
    dateField.setCustomValidity(message);
    hint.textContent = message;
  } else if (!duration || !day) {
    hint.textContent = "Escolha um serviço e uma data para ver os horários.";
  } else {
    hint.textContent = times.length
      ? "Escolha um dos horários de exemplo abaixo."
      : "Sem horários disponíveis nesta data. Escolha outra.";
  }
}

serviceField.addEventListener("change", showTimes);
dateField.addEventListener("input", showTimes);
timeOptions.addEventListener("change", () => {
  submitButton.disabled = false;
  result.textContent = "";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const service = serviceField.selectedOptions[0];
  const day = dateField.valueAsDate;
  const time = timeOptions.querySelector("input:checked")?.value;

  // A página pode ter ficado aberta até o horário escolhido passar.
  if (!availableTimes(day, Number(service.dataset.duration)).includes(time)) {
    showTimes();
    const firstTime = timeOptions.querySelector("input");
    if (firstTime) {
      hint.textContent = "Esse horário passou. Escolha outro horário de exemplo.";
      firstTime.focus();
    }
    return;
  }

  const date = dateFormatter.format(day);
  result.textContent = `Simulação concluída. ${service.textContent} em ${date}, às ${time}. Nenhuma reserva foi registrada.`;
});

showTimes();
form.hidden = false;
