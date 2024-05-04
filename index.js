const key = document.querySelectorAll('[data-name="key"]');
const display = document.querySelector('[data-name="display"]');
const clear = document.querySelector('[data-name="clear"]');
const equal = document.querySelector('[data-name="equal"]');
const backspace = document.querySelector('[data-name="backspace"]');

// clear display
clear.addEventListener('click', () => (display.value = ''));

// backspace
backspace.addEventListener(
  'click',
  () => (display.value = display.value.slice(0, -1))
);

// evaluate
equal.addEventListener('click', () => (display.value = eval(display.value)));

// Numpad
key.forEach((element) => {
  element.addEventListener('click', (e) => {
    // guard close so you can't add multiple operators & remove default 0 before adding a number
    if (
      display.value.length > 1 &&
      ['+', '-', '*', '/'].includes(display.value[display.value.length - 1]) &&
      ['+', '-', '*', '/'].includes(e.target.innerText)
    ) {
      return;
    } else if (display.value === '0') display.value = '';

    // display the key pressed
    display.value += e.target.innerText;
  });
});

document.addEventListener('keydown', (e) => {
  // Regex for only allowing numbers and operators
  const regex = /[^0-9+\-*/]/;
  // guard close so you can't add multiple operators & remove default 0 before adding a number
  if (regex.test(e.key)) return;
  else if (display.value === '0') display.value = '';
  else if (
    display.value.length > 1 &&
    ['+', '-', '*', '/'].includes(display.value[display.value.length - 1]) &&
    ['+', '-', '*', '/'].includes(e.key)
  )
    return;

  // display the key pressed
  display.value += e.key.toString();
});

{
  /*
TODO:

- Add keyboard support
- Add decimal support
- Add percentage support
*/
}
