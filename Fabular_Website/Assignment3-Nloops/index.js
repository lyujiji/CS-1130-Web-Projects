document.getElementById('computeBtn').addEventListener('click', function() {
  const nInput           = document.getElementById('n');
  const factorialInput   = document.getElementById('factorialResult');
  const sumInput         = document.getElementById('sumResult');
  const averageInput     = document.getElementById('averageResult');

  const n = parseInt(nInput.value, 10);

  if (isNaN(n) || n < 1) {
    factorialInput.value = 'Please enter a valid N (≥ 1).';
    sumInput.value       = '';
    averageInput.value   = '';
    return;
  }


  let factorial = 1;
  let i = 1;
  while (i <= n) {
    factorial *= i;
    i++;
  }
  factorialInput.value = factorial;


  let sum   = 0;
  let j     = 1;
  if (n >= 1) {
    do {
      sum += j;
      j++;
    } while (j <= n);
  }
  sumInput.value = sum;


  let total = sum;
  let average = total / n;
  averageInput.value = average;

});

document.getElementById('clearBtn').addEventListener('click', function() {
  document.getElementById('n').value               = '';
  document.getElementById('factorialResult').value = '';
  document.getElementById('sumResult').value       = '';
  document.getElementById('averageResult').value   = '';
});
