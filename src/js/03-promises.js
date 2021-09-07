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
  
  const step= form.elements.step.value;
  const amount= form.elements.amount.value;
  const delay = form.elements.delay.value;
   
  const currentDelay = delay + step;
    for (let i = 1; i <=amount; i+=1 ) {
      createPromise(i, currentDelay)
      .then(onSuccess)
      .catch(onError);
    }
}

function onSuccess({ position, delay }) {
  console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  }
  
function onError({ position, delay }) {
  console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  }