const axios = require('axios');
const audio = document.getElementById('audio');
const resultElem = document.getElementById('result');
const date = document.getElementById('date');
console.log(123);
const getData = async () => {
  try {
    console.log(123);
    const data = await axios.get(
      'https://data.sec.gov/submissions/CIK0001418100.json',
    );
    const result = data.data.filings.recent.form[0];
    const dateObj = new Date();
    resultElem.innerText = result;
    date.innerText = `${
      dateObj.getMonth() + 1
    }월 ${dateObj.getDate()}일 ${dateObj.getHours()}시 ${dateObj.getMinutes()}분 ${dateObj.getSeconds()}초`;
    if (!result.includes('13G')) {
      audio.play();
    } else {
      setTimeout(() => {
        getData();
      }, 3000);
    }
  } catch (error) {
    console.log(error);
    getData();
    return;
  }
};

//getData();
