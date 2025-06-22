const dateInput = document.getElementById('date');
const fromTimezoneSelect = document.getElementById('from-timezone');
const toTimezoneSelect = document.getElementById('to-timezone');
const convertBtn = document.getElementById('convert-btn');
const resultElement = document.getElementById('result');

const timezones = [
    { name: 'UTC', offset: 0 },
    { name: 'New York', offset: -5 },
    { name: 'Los Angeles', offset: -8 },
    { name: 'London', offset: 0 },
    { name: 'Tokyo', offset: 9 },
    { name: 'Sydney', offset: 10 },
    { name: 'Mumbai', offset: 5.5 },
    { name: 'Beijing', offset: 8 },
  
];

function generateTimezoneOptions() {
    timezones.forEach((timezone) => {
        const option = document.createElement('option');
        option.value = timezone.offset;
        option.textContent = timezone.name;
        fromTimezoneSelect.appendChild(option.cloneNode(true));
        toTimezoneSelect.appendChild(option);
    });
}

function convertTime() {
    const date = new Date(dateInput.value);
    const fromOffset = parseFloat(fromTimezoneSelect.value);
    const toOffset = parseFloat(toTimezoneSelect.value);
    const utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);
    const fromTime = new Date(utcTime + (3600000 * fromOffset));
    const toTime = new Date(utcTime + (3600000 * toOffset));
    const result = `Converted time: ${toTime.toLocaleString()}`;
    resultElement.textContent = result;
}

generateTimezoneOptions();

convertBtn.addEventListener('click', (e) => {
    e.preventDefault();
    convertTime();
});
