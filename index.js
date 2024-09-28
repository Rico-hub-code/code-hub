const scriptURL = 'https://script.google.com/macros/s/AKfycbzInNxHax6tkuQHtrD1ZwjZiF734BmNb-BmiTtQHWdAFWvXi38F_7qhErLBLdtKM8k1/exec';
        const form = document.forms['dataForm'];

        form.addEventListener('submit', e => {
            e.preventDefault();

            // Collect form data
            const formData = new FormData(form);

            // Post the data to the backend (Google Apps Script)
            fetch(scriptURL, { method: 'POST', body: formData })
                .then(response => alert('Success! Group submitted.'))
                .catch(error => alert('Error! ' + error.message));
        });
