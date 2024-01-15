const cardNumberInput = document.querySelector('#card-number-input');
const cvcNumberInput = document.querySelector('#cvc-number-input');
const dateNumberInput = document.querySelector('#date-number-input');

function maxLengthLimit(input) {
    input.addEventListener('input', () => {
        if (input === cardNumberInput) {
            if (input.value.length > 16) {
                input.value = input.value.substring(0, 16);
            }

        } else if (input === cvcNumberInput) {
            if (input.value.length > 3) {
                input.value = input.value.substring(0, 3);
            }

            // dateNumberInput
        } else {
            input.addEventListener('keydown', function (event) {
                if (event.code == 'Backspace' || (event.ctrlKey && event.code == 'Backspace')) {
                    dateNumberInput.value = '';
                }
            });

            if (input.value.split('/')[0] > 12) {
                input.value = '12';
            }

            if (input.value.length == 2) {
                input.value = input.value + '/';
            } else if (input.value.length > 5) {
                input.value = input.value.substring(0, 5);
            }
        }
    })
}

maxLengthLimit(cardNumberInput);
maxLengthLimit(cvcNumberInput);
maxLengthLimit(dateNumberInput);