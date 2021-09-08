const form = document.querySelector('.form')
form.addEventListener('submit',log)


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function log (e) {
  e.preventDefault();
  
  const step= Number(form.elements.step.value);
  const amount= Number(form.elements.amount.value);
  let delay = Number(form.elements.delay.value);

    for (let i = 1; i <=amount; i+=1 ) {

      createPromise(i, delay)
      .then(onSuccess)
      .catch(onError)
      delay +=step
    }
}

function onSuccess({ position, delay }) {
  console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  }
  
function onError({ position, delay }) {
  console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  }