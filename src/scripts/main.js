'use strict';

const table = document.querySelector('table');

const thead = table.querySelector('thead');
const ths = thead.querySelectorAll('th')

function sortTable(columnIndex) {
  const tbody = table.querySelector('tbody');
  const [...rows] = tbody.querySelectorAll('tr');
  
  rows.forEach(row => tbody.removeChild(row));

  rows.sort((a, b) => {
    const aCellValue = a.querySelectorAll('td')[columnIndex].textContent;
    const bCellValue = b.querySelectorAll('td')[columnIndex].textContent;

    return aCellValue.localeCompare(bCellValue, undefined, { numeric: true });
  });
  
  rows.forEach(row => tbody.appendChild(row));
}

ths.forEach((th, i) => {
  th.addEventListener('click', () => sortTable(i));
});
