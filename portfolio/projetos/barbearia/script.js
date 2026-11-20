const form = document.querySelector("#booking-form");
const serviceField = form.elements.namedItem("service");
const dateField = form.elements.namedItem("date");
const timeField = form.elements.namedItem("time");
const submitButton = form.querySelector('button[type="submit"]');
const hint = document.querySelector("#booking-hint");
const result = document.querySelector("#booking-result");

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  dateStyle: "long",
  timeZone: "UTC",
});

function dateInputValue(date) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

function refreshTimes() {
  const now = new Date();
  dateField.min = dateInputValue(now);
  dateField.setCustomValidity("");
  timeField.replaceChildren(new Option("Selecione um horário", ""));
  timeField.disabled = true;
  submitButton.disabled = true;
  result.textContent = "";
  hint.textContent = "Escolha um serviço e uma data para ver os horários.";

  if (dateField.validity.rangeUnderflow) {
    hint.textContent = "Escolha uma data de hoje em diante.";
    return;
  }
  if (!dateField.value || !dateField.validity.valid) return;

  // O campo de data representa o dia em UTC, sem a hora local do visitante.
  const weekday = dateField.valueAsDate.getUTCDay();
  if (weekday === 0 || weekday === 1) {
    const message = "A barbearia fecha aos domingos e às segundas. Escolha outro dia.";
    dateField.setCustomValidity(message);
    hint.textContent = message;
    return;
  }
  if (!serviceField.value) return;

  const duration = Number(serviceField.selectedOptions[0].dataset.duration);
  const opening = (weekday === 6 ? 9 : 10) * 60;
  const closing = (weekday === 6 ? 17 : 19) * 60;
  const currentMinute = dateField.value === dateField.min
    ? now.getHours() * 60 + now.getMinutes()
    : -1;

  for (let minute = opening; minute + duration <= closing; minute += 30) {
    if (minute <= currentMinute) continue;
    const hours = String(Math.floor(minute / 60)).padStart(2, "0");
    const minutes = String(minute % 60).padStart(2, "0");
    const label = `${hours}:${minutes}`;
    timeField.add(new Option(label, label));
  }

  timeField.disabled = timeField.options.length === 1;
  hint.textContent = timeField.disabled
    ? "Os horários deste dia já passaram. Escolha outra data."
    : "Escolha um dos horários de exemplo.";
}

serviceField.addEventListener("change", refreshTimes);
dateField.addEventListener("input", refreshTimes);

timeField.addEventListener("change", () => {
  submitButton.disabled = !timeField.value;
  result.textContent = "";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const time = timeField.value;
  refreshTimes();

  // Revalide o horário, pois o minuto atual pode ter mudado com a página aberta.
  timeField.value = time;
  if (!timeField.value) {
    timeField.selectedIndex = 0;
    if (!timeField.disabled) {
      hint.textContent = "Este horário deixou de estar disponível. Revise a data e escolha outro.";
    }
    return;
  }

  submitButton.disabled = false;
  const service = serviceField.selectedOptions[0].textContent;
  const date = dateFormatter.format(dateField.valueAsDate);
  result.textContent = `Simulação concluída. ${service} em ${date}, às ${time}. Nenhuma reserva foi registrada.`;
});

refreshTimes();
form.hidden = false;
