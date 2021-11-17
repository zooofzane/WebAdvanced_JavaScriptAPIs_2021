const button = document.getElementById('GetUsers');

button.addEventListener("click", processCall);

async function processCall() {
  try {
    const first_resp = await getData('http://localhost:8002/students');
    console.log(first_resp);
    document.getElementById("Output").innerHTML += `Data returned is: ${JSON.stringify(first_resp)}`;
  } catch(error) {
    document.getElementById("Output").innerHTML = error; // TypeError: failed to fetch
  }
  console.log('done');
}





function getData( url ) {
  return new Promise( function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open( 'GET', url, true );
    xhr.send();
    xhr.onload = function () {
      console.log(xhr);
      if (xhr.status === 200) {
         const response = JSON.parse(xhr.responseText);
          resolve(response);
      } else {
          const error = xhr.statusText || 'The reason is mysterious. Call Yoda!';
          reject(error);
      }
    }
  });
}

