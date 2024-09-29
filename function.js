const form = document.forms['dataForm'];
    const errorMessagesDiv = document.getElementById('errorMessages');

    // Function to validate names (only letters and spaces allowed)
    function validateName(name) {
        const nameRegex = /^[A-Za-z\s]+$/;
        return nameRegex.test(name);
    }

    // Function to validate student numbers (only numbers allowed)
    function validateStudentNumber(number) {
        const numberRegex = /^\d+$/;
        return numberRegex.test(number);
    }

    form.addEventListener('submit', e => {
        e.preventDefault();
        
        let isValid = true;
        const errorMessage = [];

        // Clear previous error messages
        errorMessagesDiv.innerHTML = '';
        errorMessagesDiv.style.display = 'none';

        // Loop through the 10 name and student number pairs
        for (let i = 1; i <= 10; i++) {
            const name = document.getElementById(`name${i}`).value.trim();
            const studentNumber = document.getElementById(`studentNumber${i}`).value.trim();
            
            // Validate Name
            if (!validateName(name)) {
                isValid = false;
                errorMessage.push(`Name ${i} is invalid. Only letters and spaces are allowed.`);
            }

            // Validate Student Number
            if (!validateStudentNumber(studentNumber)) {
                isValid = false;
                errorMessage.push(`Student Number ${i} is invalid. Only numbers are allowed.`);
            }
        }

        // Show error messages if validation fails
        if (!isValid) {
            errorMessagesDiv.innerHTML = errorMessage.join("<br>");
            errorMessagesDiv.style.display = 'block'; // Show the error message div
            return;
        }

        // If all inputs are valid, send data to Google Apps Script
        const formData = new FormData(form);
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzInNxHax6tkuQHtrD1ZwjZiF734BmNb-BmiTtQHWdAFWvXi38F_7qhErLBLdtKM8k1/exec';
        fetch(scriptURL, { method: 'POST', body: formData })
            .then(response => {
                alert('Success! Group submitted.');
                form.reset(); // Optionally reset the form after submission
            })
            .catch(error => {
                errorMessagesDiv.innerHTML = 'Error! ' + error.message;
                errorMessagesDiv.style.display = 'block'; // Show the error message div
            });
    });
