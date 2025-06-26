const ctx = document.getElementById('expenseChart').getContext('2d');

// Initial empty data
let expenseData = {
  labels: [],
  datasets: [{
    label: 'Expenses',
    data: [],
    backgroundColor: [],
    borderColor: '#fff',
    borderWidth: 2
  }]
};

// Initialize Chart
const expenseChart = new Chart(ctx, {
  type: 'pie',
  data: expenseData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      },
      title: {
        display: false
      }
    }
  }
});

// Random color generator
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Add expense button handler
document.getElementById('addExpense').addEventListener('click', () => {
  const category = document.getElementById('category').value.trim();
  const amount = parseFloat(document.getElementById('amount').value);

  if (!category || isNaN(amount) || amount <= 0) {
    alert('Please enter a valid category and amount.');
    return;
  }

  // Add data to chart
  expenseData.labels.push(category);
  expenseData.datasets[0].data.push(amount);
  expenseData.datasets[0].backgroundColor.push(getRandomColor());

  expenseChart.update();

  // Clear input fields
  document.getElementById('category').value = '';
  document.getElementById('amount').value = '';
});
