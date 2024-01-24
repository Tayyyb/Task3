//1//
function moveButton(button) {
    // Get reference to the destination div
    let destinationDiv = document.getElementById('destination');

    // Remove the button from the source div
    button.parentNode.removeChild(button);

    // Append the button to the destination div
    destinationDiv.appendChild(button);
}



//2//
// Function to count rows and columns
function countRowsAndColumns() {
    let table = document.getElementById('myTable');
    let rowCount = table.rows.length;
    let colCount = table.rows[0].cells.length;

    return "Number of rows: " + rowCount + "<br>Number of columns: " + colCount;
}

// Click event listener for the button
document.getElementById('countButton').addEventListener('click', function() {
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = countRowsAndColumns();
});


//3//
// Function to add options to the dropdown
function addOption() {
    var dropdown = document.getElementById('myDropdown');

    // Create a new option element
    var newOption = document.createElement('option');
    
    // Set the value and text of the new option
    newOption.value = 'newOption';
    newOption.text = 'New Option';

    // Append the new option to the dropdown
    dropdown.add(newOption);
}


//4//
 // Data structure to store added attributes
 let addedAttributes = {};

 // Function to count child elements
 function countChildElements() {
     let selectedDiv = document.getElementById('selected');
     let childElements = selectedDiv.children;
     let childCount = childElements.length;

     // Display the count of child elements
     alert("Number of child elements: " + childCount);
 }

 // Function to add a new attribute to child elements
 function addAttributeToChildElements() {
     let selectedDiv = document.getElementById('selected');
     let childElements = selectedDiv.children;
     let newAttribute = document.getElementById('newAttribute').value;

     if (newAttribute.trim() !== '') {
         // Store the new attribute in the data structure
         addedAttributes[newAttribute] = 'true';

         // Add the new attribute to each child element
         for (let i = 0; i < childElements.length; i++) {
             let currentChild = childElements[i];
             currentChild.setAttribute(newAttribute, 'true');
         }

         // Display a message after adding the attribute
         alert("New attribute '" + newAttribute + "' added to child elements");
     } else {
         alert("Please enter a valid attribute name");
     }
 }


 //5//
 
     // Function to validate number input
    function validateNumberInput(inputElement, integerOnly) {
        let inputValue = inputElement.value;

        // Regular expression to match numbers, including decimals
        let regexPattern = integerOnly ? /^-?\d+$/ : /^-?\d*\.?\d*$/;

        // Check if the input matches the pattern
        if (!regexPattern.test(inputValue)) {
            // If not, remove invalid characters
            inputElement.value = inputValue.replace(/[^0-9.]/g, '');

            // Display an error message
            let errorMessageElementId = integerOnly ? 'integerErrorMessage' : 'decimalErrorMessage';
            document.getElementById(errorMessageElementId).innerText = 'Please enter a valid number';
        } else {
            // Clear error message if input is valid
            let errorMessageElementId = integerOnly ? 'integerErrorMessage' : 'decimalErrorMessage';
            document.getElementById(errorMessageElementId).innerText = '';
        }

        // Count the number of digits (including decimals)
        let count = inputValue.replace(/[^0-9.]/g, '').length;

        // Display the result and count
        let resultElementId = integerOnly ? 'integerResult' : 'decimalResult';
        let countElementId = integerOnly ? 'integerCount' : 'decimalCount';
        document.getElementById(resultElementId).innerText = 'Result: ' + inputElement.value;
        document.getElementById(countElementId).innerText = 'Count: ' + count;

        // Calculate and display the total result
        let integerResult = parseFloat(document.getElementById('integerInput').value) || 0;
        let decimalResult = parseFloat(document.getElementById('decimalInput').value) || 0;
        let totalResult = integerResult + decimalResult;
        document.getElementById('totalResult').innerText = 'Total Result: ' + totalResult;
    }




//6//
function changeColor(link) {
    if (link.getAttribute('name')) {
        link.style.backgroundColor = 'brown';
    }
}

// Function to do nothing on click
function doNothing() {
    // This function intentionally does nothing
}


//8//
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}




//9//
function countCharacters(textarea) {
    let maxLength = 100; // You can set your desired maximum character count

    let currentLength = textarea.value.length;
    let remainingLength = maxLength - currentLength;

    let charCountElement = document.getElementById('charCount');
    charCountElement.textContent = remainingLength;

    // You can add more logic here if you want to limit the input further or provide user feedback.
}



//..10..//
document.addEventListener('DOMContentLoaded', function () {
    loadData();
});

function loadData() {
    // Simulate fetching data from a server
    var data = [
        { id: 1, name: 'John ', email: 'john@example.com' },
        { id: 2, name: ' Doe', email: 'doe@example.com' },
        // Add more data as needed
    ];

    // Populate the table with data
    populateTable(data);
}

function populateTable(data) {
    var tableBody = document.querySelector('#dataTable tbody');
    tableBody.innerHTML = '';

    data.forEach(function (row) {
        var newRow = tableBody.insertRow();

        var cellId = newRow.insertCell(0);
        var cellName = newRow.insertCell(1);
        var cellEmail = newRow.insertCell(2);
        var cellAction = newRow.insertCell(3);

        cellId.textContent = row.id;
        cellName.textContent = row.name;
        cellEmail.textContent = row.email;

        // Add buttons for actions (update and delete)
        var updateButton = document.createElement('button');
        updateButton.textContent = 'Update';
        updateButton.addEventListener('click', function () {
            updateRow(row.id);
        });

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            deleteRow(row.id);
        });

        cellAction.appendChild(updateButton);
        cellAction.appendChild(deleteButton);
    });
}

function addRow() {
    var newName = prompt('Enter Name:');
    var newEmail = prompt('Enter Email:');

    // Simulate adding data to a server
    var newData = {
        id: Date.now(), // Use a unique ID (you may get it from the server in a real scenario)
        name: newName,
        email: newEmail
    };

    // Simulate updating the table with the new data
    var currentData = getCurrentData();
    currentData.push(newData);
    populateTable(currentData);
}

function updateRow(id) {
    var newName = prompt('Enter Updated Name:');
    var newEmail = prompt('Enter Updated Email:');

    // Simulate updating data on a server
    var updatedData = {
        id: id,
        name: newName,
        email: newEmail
    };

    // Simulate updating the table with the updated data
    var currentData = getCurrentData();
    var index = currentData.findIndex(row => row.id === id);
    if (index !== -1) {
        currentData[index] = updatedData;
        populateTable(currentData);
    }
}

function deleteRow(id) {
    // Simulate deleting data on a server
    var currentData = getCurrentData();
    var newData = currentData.filter(row => row.id !== id);

    // Simulate updating the table after deleting the data
    populateTable(newData);
}

function getCurrentData() {
    // Simulate fetching the current data from a server
    var tableRows = document.querySelectorAll('#dataTable tbody tr');
    var currentData = [];

    tableRows.forEach(function (row) {
        var id = row.cells[0].textContent;
        var name = row.cells[1].textContent;
        var email = row.cells[2].textContent;

        currentData.push({
            id: parseInt(id),
            name: name,
            email: email
        });
    });

    return currentData;
}



//11//
function submitForm() {
    // Validate the form using jQuery
    if ($('#userForm')[0].checkValidity()) {
        // Hide individual input fields
        $('#userForm input').addClass('hidden');
        
        // Show the form values
        showFormValues();
    } else {
        // Trigger HTML5 form validation UI
        $('#userForm')[0].reportValidity();
    }
}

function showFormValues() {
    // Get form values
    var fullName = $('#fullName').val();
    var email = $('#email').val();
    var password = '********'; // Hide the password for security reasons

    // Display form values using AJAX
    $.ajax({
        type: 'POST',
        url: 'submit_form.php', // Replace with your server-side script
        data: {
            fullName: fullName,
            email: email,
            password: password
        },
        success: function (response) {
            // Display the form values in a designated div
            $('#formValues').html('<p>Form values:</p>' +
                '<p><strong>Full Name:</strong> ' + fullName + '</p>' +
                '<p><strong>Email:</strong> ' + email + '</p>' +
                '<p><strong>Password:</strong> ' + password + '</p>'
            ).show();
        },
        error: function (error) {
            console.error('Error submitting form:', error);
        }
    });
}



//12//
function search() {
    var searchText = $('#searchText').val().toLowerCase();
    var townsList = $('#towns li');

    var matches = 0;

    townsList.each(function () {
        var currentTown = $(this).text().toLowerCase();

        if (currentTown.includes(searchText)) {
            $(this).css('font-weight', 'bold');
            matches++;
        } else {
            $(this).css('font-weight', 'normal');
        }
    });

    $('#result').text(matches + ' matches found.');
}
function search() {
    var searchText = $('#searchText').val().toLowerCase();
    var townsList = $('#towns li');

    var matches = 0;

    townsList.each(function () {
        var currentTown = $(this).text().toLowerCase();

        if (currentTown.includes(searchText)) {
            $(this).html($(this).text().replace(new RegExp(searchText, 'ig'), '<strong>$&</strong>'));
            matches++;
        } else {
            $(this).html($(this).text());
        }
    });

    $('#result').html(matches + ' matches found.');
}




function search() {
    var searchText = $('#searchText').val().toLowerCase();
    var townsList = $('#towns li');

    var matches = 0;

    townsList.each(function () {
        var currentTown = $(this).text().toLowerCase();

        if (currentTown.includes(searchText)) {
            $(this).addClass('highlight');
            matches++;
        } else {
            $(this).removeClass('highlight');
        }
    });

    $('#result').text(matches + ' matches found.');
}

