import { numberInput, wordsTag, numberToWordMain } from './modules/index.js';

/* -------------------------------------------------------------------------- */
/*                       call function with each keyup                        */
/* -------------------------------------------------------------------------- */
numberInput.onkeyup = function() {
    wordsTag.innerHTML = numberToWordMain(numberInput.value);
};
