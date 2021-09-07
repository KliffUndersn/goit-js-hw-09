import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
    btnStart:document.querySelector('[data-start]'),
    btnStop:document.querySelector('[data-stop]'),
    day:document.querySelector('[data-days]'),
    hour:document.querySelector('[data-hours]'),
    minute:document.querySelector('[data-minutes]'),
    second:document.querySelector('[data-seconds]'),
}
let selectedDate;
let intervalId;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      selectedDate = Date.parse(selectedDates);
      if(selectedDate<new Date()){alert("Please choose a date in the future");}
      if(selectedDate>new Date()){refs.btnStart.disabled=false;}
    },
  };
  flatpickr("#date-selector",options);
  refs.btnStart.disabled=true;
const counterMarkup = ({ days, hours, minutes, seconds }) => {
    refs.day.textContent = days;
    refs.hour.textContent = hours;
    refs.minute.textContent = minutes;
    refs.second.textContent = seconds;
}
refs.btnStart.addEventListener('click',() => {
  
    intervalId = setInterval(() => {
        const timeleft = selectedDate-new Date();
        const dateDifference = convertMs(timeleft);
        if (timeleft > 0) {
            counterMarkup(dateDifference);
        }
        else {
            clearInterval(intervalId);
            document.querySelector('.timer').insertAdjacentHTML("beforeend",`<img src="https://cutt.ly/HWPPSLq"></img>`);
        }
    }, 1000);
})
    
refs.btnStop.addEventListener('click',() => {
    clearInterval(intervalId)
});
function pad(value) {
    return String(value).padStart(2, '0');
    }
  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = pad(Math.floor(ms / day));
    const hours = pad(Math.floor((ms % day) / hour));
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
    return { days, hours, minutes, seconds };
  };

