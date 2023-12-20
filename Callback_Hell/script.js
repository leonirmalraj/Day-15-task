// script.js

const fetchData = (callback) => {
  setTimeout(() => {
    console.log('Data fetched');
    const data = { message: 'Hello' };
    callback(data);
  }, 1000);
};

const processData = (data, callback) => {
  setTimeout(() => {
    console.log('Data processed:', data);
    data.message += ' World';
    callback(data);
  }, 1000);
};

const displayResult = (data) => {
  setTimeout(() => {
    console.log('Final result:', data.message);
    document.getElementById('output-container').innerText = data.message;
  }, 1000);
};

const updateTimer = () => {
  let seconds = 0;
  return setInterval(() => {
    seconds++;
    document.getElementById('timer').innerText = seconds;
  }, 1000);
};

const countdown = (num, callback) => {
  setTimeout(() => {
    document.getElementById('countdown-container').innerText = num;
    if (num > 1) {
      countdown(num - 1, callback);
    } else {
      callback();
    }
  }, 1000);
};

// Initiating the callback hell
const timerInterval = updateTimer();

countdown(10, () => {
  fetchData((data) => {
    processData(data, (processedData) => {
      displayResult(processedData);
      clearInterval(timerInterval); // Stop the timer when the process is complete
    });
  });
});
