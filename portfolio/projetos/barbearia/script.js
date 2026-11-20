const form = document.querySelector("#booking-form");
const serviceField = form.elements.namedItem("service");
const dateOptions = document.querySelector("#date-options");
const timeOptions = document.querySelector("#time-options");
const dateRange = document.querySelector("#date-range");
const previousDates = document.querySelector("#previous-dates");
const nextDates = document.querySelector("#next-dates");
const submitButton = form.querySelector('button[type="submit"]');
const hint = document.querySelector("#booking-hint");
const result = document.querySelector("#booking-result");

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  dateStyle: "long",
  timeZone: "UTC",
});
const dateLabel = new Intl.DateTimeFormat("pt-BR", {
  weekday: "short",
  day: "2-digit",
  month: "2-digit",
  timeZone: "UTC",
});
const dateRangeLabel = new Intl.DateTimeFormat("pt-BR", {
  dateStyle: "medium",
  timeZone: "UTC",
});

let datePage = 0;

function localCalendarDay(now) {
  return new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
}

function isClosed(day) {
  return day.getUTCDay() < 2;
}

function choice(name, value, label) {
  const container = document.createElement("label");
  container.className = "booking-choice";
  const field = document.createElement("input");
  field.type = "radio";
  field.name = name;
  field.value = value;
  field.required = true;
  const caption = document.createElement("span");
  caption.textContent = label;
  container.append(field, caption);
  return container;
}

function showDates() {
  // Cada página mostra os cinco dias de atendimento de um intervalo de sete dias.
  const firstDay = localCalendarDay(new Date());
  firstDay.setUTCDate(firstDay.getUTCDate() + datePage * 7);
  const openDays = [];
  for (let offset = 0; offset < 7; offset++) {
    const day = new Date(firstDay);
    day.setUTCDate(day.getUTCDate() + offset);
    if (!isClosed(day)) openDays.push(day);
  }

  dateOptions.replaceChildren(...openDays.map(day =>
    choice("date", day.toISOString().slice(0, 10), dateLabel.format(day))
  ));
  dateRange.textContent = dateRangeLabel.formatRange(openDays[0], openDays.at(-1));
  previousDates.disabled = datePage === 0;
  showTimes();
}

function selectedValue(name) {
  return form.querySelector(`input[name="${name}"]:checked`)?.value ?? "";
}

function selectedDay() {
  return new Date(`${selectedValue("date")}T00:00:00Z`);
}

function availableTimes(day, duration) {
  const now = new Date();
  const today = localCalendarDay(now);
  if (!Number.isFinite(day.getTime()) || day < today || isClosed(day) || !duration) return [];

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
  const duration = Number(serviceField.selectedOptions[0].dataset.duration);
  const times = availableTimes(selectedDay(), duration);
  timeOptions.replaceChildren(...times.map(time => choice("time", time, time)));
  submitButton.disabled = true;
  result.textContent = "";

  if (!duration || !selectedValue("date")) {
    hint.textContent = "Escolha um serviço e uma data para ver os horários.";
  } else {
    hint.textContent = times.length
      ? "Escolha um dos horários de exemplo abaixo."
      : "Sem horários disponíveis nesta data. Escolha outra.";
  }
}

previousDates.addEventListener("click", () => {
  datePage--;
  showDates();
  if (previousDates.disabled) nextDates.focus();
});

nextDates.addEventListener("click", () => {
  datePage++;
  showDates();
});

form.addEventListener("change", (event) => {
  if (event.target.name === "time") {
    submitButton.disabled = false;
    result.textContent = "";
  } else {
    showTimes();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const service = serviceField.selectedOptions[0];
  const day = selectedDay();
  const time = selectedValue("time");

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

showDates();
form.hidden = false;
