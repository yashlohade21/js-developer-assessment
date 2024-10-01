let data = [
    { id: 1, chemicalName: "Acetone", vender: "ChemCorp", density: "0.791 g/cm³", viscosity: "0.32 mPa·s", packaging: "Drum", packSize: "50 L", unit: "L", quantity: 100 },
    { id: 2, chemicalName: "Benzene", vender: "GlobalChem", density: "0.876 g/cm³", viscosity: "0.65 mPa·s", packaging: "Can", packSize: "30 L", unit: "L", quantity: 200 },
      {
        id: 3,
        chemicalName: "Ethanol",
        vender: "BioSolutions",
        density: "0.789 g/cm³",
        viscosity: "1.20 mPa·s",
        packaging: "Bottle",
        packSize: "10 L",
        unit: "L",
        quantity: 150
      },
      {
        id: 4,
        chemicalName: "Toluene",
        vender: "IndustrialChem",
        density: "0.867 g/cm³",
        viscosity: "0.59 mPa·s",
        packaging: "Drum",
        packSize: "50 L",
        unit: "L",
        quantity: 180
      },
      {
        id: 5,
        chemicalName: "Xylene",
        vender: "ChemX",
        density: "0.870 g/cm³",
        viscosity: "0.75 mPa·s",
        packaging: "Can",
        packSize: "20 L",
        unit: "L",
        quantity: 90
      },
      {
        id: 6,
        chemicalName: "Methanol",
        vender: "GreenChem",
        density: "0.791 g/cm³",
        viscosity: "0.59 mPa·s",
        packaging: "Bottle",
        packSize: "5 L",
        unit: "L",
        quantity: 110
      },
      {
        id: 7,
        chemicalName: "Sulfuric Acid",
        vender: "AcidTech",
        density: "1.84 g/cm³",
        viscosity: "26.7 mPa·s",
        packaging: "Drum",
        packSize: "50 L",
        unit: "L",
        quantity: 120
      },
      {
        id: 8,
        chemicalName: "Hydrochloric Acid",
        vender: "AcidCorp",
        density: "1.18 g/cm³",
        viscosity: "1.4 mPa·s",
        packaging: "Can",
        packSize: "30 L",
        unit: "L",
        quantity: 130
      },
      {
        id: 9,
        chemicalName: "Sodium Hydroxide",
        vender: "BaseChem",
        density: "2.13 g/cm³",
        viscosity: "100 mPa·s",
        packaging: "Bag",
        packSize: "25 kg",
        unit: "kg",
        quantity: 50
      },
      {
        id: 10,
        chemicalName: "Ammonia",
        vender: "GasTech",
        density: "0.73 g/cm³",
        viscosity: "0.255 mPa·s",
        packaging: "Cylinder",
        packSize: "40 L",
        unit: "L",
        quantity: 75
      },
      {
        id: 11,
        chemicalName: "Nitric Acid",
        vender: "AcidSolutions",
        density: "1.51 g/cm³",
        viscosity: "2.23 mPa·s",
        packaging: "Can",
        packSize: "20 L",
        unit: "L",
        quantity: 65
      },
      {
        id: 12,
        chemicalName: "Sodium Chloride",
        vender: "SaltCo",
        density: "2.17 g/cm³",
        viscosity: "N/A",
        packaging: "Bag",
        packSize: "50 kg",
        unit: "kg",
        quantity: 100
      },
      {
        id: 13,
        chemicalName: "Glycerol",
        vender: "BioSolutions",
        density: "1.26 g/cm³",
        viscosity: "1.49 Pa·s",
        packaging: "Drum",
        packSize: "50 L",
        unit: "L",
        quantity: 95
      },
      {
        id: 14,
        chemicalName: "Ethylene Glycol",
        vender: "CoolChem",
        density: "1.11 g/cm³",
        viscosity: "16.1 mPa·s",
        packaging: "Can",
        packSize: "25 L",
        unit: "L",
        quantity: 85
      },
      {
        id: 15,
        chemicalName: "Chloroform",
        vender: "SolvChem",
        density: "1.49 g/cm³",
        viscosity: "0.56 mPa·s",
        packaging: "Can",
        packSize: "20 L",
        unit: "L",
        quantity: 70
      }
];

let selectedRowIndex = -1;

// Load initial data
window.onload = function() {
    loadTableData(data);
};


// Sort function
let sortDirection = false;
function sortTable(columnIndex) {
    sortDirection = !sortDirection;
    const sortedData = [...data].sort((a, b) => {
        const colA = Object.values(a)[columnIndex].toString().toLowerCase();
        const colB = Object.values(b)[columnIndex].toString().toLowerCase();
        return sortDirection ? colA.localeCompare(colB) : colB.localeCompare(colA);
    });
    loadTableData(sortedData);
}

// Add row functionality
function addRow() {
    const newRow = {
        id: data.length + 1,
        chemicalName: "New Chemical",
        vender: "New Vender",
        density: "N/A",
        viscosity: "N/A",
        packaging: "New Packaging",
        packSize: "0 L",
        unit: "L",
        quantity: 0
    };
    data.push(newRow);
    loadTableData(data);
}

// Move row up functionality
document.getElementById('chemicalsTable').onclick = function(event) {
    const rows = Array.from(document.querySelectorAll('#tableBody tr'));
    rows.forEach((row, index) => {
        if (row.contains(event.target)) {
            selectedRowIndex = index;
            row.classList.add('table-active');
        } else {
            row.classList.remove('table-active');
        }
    });
};


// Load initial data
window.onload = function() {
    loadTableData(data);
};

// Function to load the table data
function loadTableData(data) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';
    data.forEach((item, index) => {
        const row = `<tr onclick="selectRow(${index}); editRow(${index})" id="row-${index}">
                      <td>${item.id}</td>
                      <td>${item.chemicalName}</td>
                      <td>${item.vender}</td>
                      <td>${item.density}</td>
                      <td>${item.viscosity}</td>
                      <td>${item.packaging}</td>
                      <td>${item.packSize}</td>
                      <td>${item.unit}</td>
                      <td>${item.quantity}</td>
                    </tr>`;
        tableBody.innerHTML += row;
    });
}

// Select a row and highlight it
function selectRow(index) {
    const rows = document.querySelectorAll('#tableBody tr');

    // Remove highlight from previously selected row
    if (selectedRowIndex >= 0) {
        rows[selectedRowIndex].classList.remove('selected');
    }

    // Highlight the new selected row
    selectedRowIndex = index;
    rows[selectedRowIndex].classList.add('selected');
}

// Function to edit a row and show the check icon
function editRow(index) {
    const tableBody = document.getElementById('tableBody');
    const row = tableBody.rows[index];

    // Prevent editing if already editing
    if (row.querySelector('input')) {
        return; // Prevent editing if input fields already exist
    }

    // Change the row to contain input fields and show the check icon
    row.innerHTML = `<td>${data[index].id}</td>
                     <td><input type="text" value="${data[index].chemicalName}" onchange="updateData(${index}, 'chemicalName', this.value)" onblur="saveRow(${index})" onkeypress="handleKeyPress(event, ${index})"></td>
                     <td><input type="text" value="${data[index].vender}" onchange="updateData(${index}, 'vender', this.value)" onblur="saveRow(${index})" onkeypress="handleKeyPress(event, ${index})"></td>
                     <td><input type="text" value="${data[index].density}" onchange="updateData(${index}, 'density', this.value)" onblur="saveRow(${index})" onkeypress="handleKeyPress(event, ${index})"></td>
                     <td><input type="text" value="${data[index].viscosity}" onchange="updateData(${index}, 'viscosity', this.value)" onblur="saveRow(${index})" onkeypress="handleKeyPress(event, ${index})"></td>
                     <td><input type="text" value="${data[index].packaging}" onchange="updateData(${index}, 'packaging', this.value)" onblur="saveRow(${index})" onkeypress="handleKeyPress(event, ${index})"></td>
                     <td><input type="text" value="${data[index].packSize}" onchange="updateData(${index}, 'packSize', this.value)" onblur="saveRow(${index})" onkeypress="handleKeyPress(event, ${index})"></td>
                     <td><input type="text" value="${data[index].unit}" onchange="updateData(${index}, 'unit', this.value)" onblur="saveRow(${index})" onkeypress="handleKeyPress(event, ${index})"></td>
                     <td><input type="number" value="${data[index].quantity}" onchange="updateData(${index}, 'quantity', this.value)" onblur="saveRow(${index})" onkeypress="handleKeyPress(event, ${index})"></td>`;
    
    // Disable further click events on this row while editing
    row.onclick = null;

    // Highlight the row being edited
    row.classList.add('selected'); // Keep it highlighted
}

// Function to handle key press events
function handleKeyPress(event, index) {
    if (event.key === 'Enter') {
        saveRow(index); // Save the row if Enter is pressed
    }
}

// Function to save the row and remove the check icon
function saveRow(index) {
    // Reload the table to show updated data and remove the check icon
    loadTableData(data);

    // Optionally, clear the selectedRowIndex if you want to unselect the row after saving
    selectedRowIndex = -1;
}

// Move row up functionality
function moveRowUp() {
    if (selectedRowIndex > 0) {
        const temp = data[selectedRowIndex - 1];
        data[selectedRowIndex - 1] = data[selectedRowIndex];
        data[selectedRowIndex] = temp;
        selectedRowIndex--; // Update selected index
        loadTableData(data);
    }
}

// Move row down functionality
function moveRowDown() {
    if (selectedRowIndex < data.length - 1 && selectedRowIndex >= 0) {
        const temp = data[selectedRowIndex + 1];
        data[selectedRowIndex + 1] = data[selectedRowIndex];
        data[selectedRowIndex] = temp;
        selectedRowIndex++; // Update selected index
        loadTableData(data);
    }
}

// Delete row functionality
function deleteRow() {
    if (selectedRowIndex >= 0) {
        data.splice(selectedRowIndex, 1);
        selectedRowIndex = -1; // Reset selected index
        loadTableData(data);
    }
}

// Refresh table data functionality (reload original data)
function refreshData() {
    data = [
        { id: 1, chemicalName: "Acetone", vender: "ChemCorp", density: "0.791 g/cm³", viscosity: "0.32 mPa·s", packaging: "Drum", packSize: "50 L", unit: "L", quantity: 100 },
        { id: 2, chemicalName: "Benzene", vender: "GlobalChem", density: "0.876 g/cm³", viscosity: "0.65 mPa·s", packaging: "Can", packSize: "30 L", unit: "L", quantity: 200 },
        // More rows...
    ];
    loadTableData(data);
}

// Save data functionality (to localStorage)
function saveData() {
    localStorage.setItem('chemicalsData', JSON.stringify(data));
    alert('Data saved to local storage.');
}

// Update data based on input changes
function updateData(index, field, value) {
    data[index][field] = value;  // Update the specific field in the data array
}