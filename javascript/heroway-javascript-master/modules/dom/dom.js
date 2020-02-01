const input = document.getElementById('input');
const button = document.getElementById('button');

const number = document.getElementById('number');
const result = document.getElementById('result');

/* ---- */

button.addEventListener('click', () => {
  console.log(input.value);
  number.innerText = input.value;
  result.innerText = Number(input.value) + number(sumNumber.innerText);
})

button.addEventListener('click', () => {
  const parsedValue = Number(input.value);

  if (Number.isNaN(parsedValue)) {
    result.style.color = 'red';
    result.textContent = 'ERROR!';
  } else {
    number.textContent = parsedValue;
    result.textContent = parsedValue + 10;
  }
});