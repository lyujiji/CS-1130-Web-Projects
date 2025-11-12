 function showAlert(message) {
        document.getElementById('messageText').textContent = message;
        document.getElementById('customMessageBox').style.display = 'block';
    }

    
    document.addEventListener('DOMContentLoaded', () => {
        const addBtn    = document.getElementById('addBtn');
        const deleteBtn = document.getElementById('deleteBtn');
        const tableBody = document.querySelector('#payrollTable tbody');

    
        
        function updateLineNumbers() {
            
            for (let i = 0; i < tableBody.rows.length; i++) {
                tableBody.rows[i].cells[0].textContent = i + 1;
            }
        }

        function clearAddFields() {
            document.getElementById('empName').value     = '';
            document.getElementById('daysWorked').value = '';
            document.getElementById('dailyRate').value  = '';
            document.getElementById('deduction').value  = '';
        }

        function formatCurrency(value) {
            return parseFloat(value).toFixed(2);
        }


        function addEmployee() {
            const name      = document.getElementById('empName').value.trim();
            const days      = Number(document.getElementById('daysWorked').value);
            const rate      = Number(document.getElementById('dailyRate').value);
            const deduction = Number(document.getElementById('deduction').value);

   
            if (!name || isNaN(days) || isNaN(rate) || isNaN(deduction) || days < 0 || rate < 0 || deduction < 0) {
                showAlert('Please fill in all fields with valid positive numbers. Deduction defaults to 0 if left blank.');
                return;
            }

            const grossPay = days * rate;
            const netPay   = grossPay - deduction;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td></td>
                <td>${name}</td>
                <td>${days}</td>
                <td>${formatCurrency(rate)}</td>
                <td>${formatCurrency(grossPay)}</td>
                <td>${formatCurrency(deduction)}</td>
                <td>${formatCurrency(netPay)}</td>
            `;

            tableBody.appendChild(row);
            updateLineNumbers();
            clearAddFields();
        }

        function deleteEmployee() {
            const lineInput = document.getElementById('lineNumber');
            const lineNumber = parseInt(lineInput.value, 10);
            const totalRows = tableBody.rows.length;

            if (isNaN(lineNumber) || lineNumber < 1 || lineNumber > totalRows) {
                showAlert(`Please enter a valid line number to delete (1 to ${totalRows}).`);
                return;
            }

            tableBody.deleteRow(lineNumber - 1);
            updateLineNumbers();
            lineInput.value = '';
        }

        addBtn.addEventListener('click', addEmployee);
        deleteBtn.addEventListener('click', deleteEmployee);

    });