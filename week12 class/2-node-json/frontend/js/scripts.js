const button = document.getElementById('GetUsers');

button.addEventListener("click", processCall);

async function processCall() {
  try {
    const first_resp = await getData('http://localhost:3002/students/');
    console.log(first_resp);
    document.getElementById("Output").innerHTML += `Data returned is: ${JSON.stringify(first_resp)}`;
  } catch(error) {
    document.getElementById("Output").innerHTML = error; // TypeError: failed to fetch
  }
  console.log('done');
}



const form = document.getElementById('createUser')
form.addEventListener("submit", processSubmit);

async function processSubmit(e) {
  e.preventDefault();
  const FD  = new FormData(form);
  FD.append("first_name",form.first_name.value);
  FD.append("last_name",form.last_name.value);
  FD.append("email",form.email.value);
  let jsonObject = {};
  for (let pair  of FD.entries()) {
      jsonObject[pair[0]] = pair[1];
  }
  try {
    const first_resp = await saveData('http://localhost:3002/students/', jsonObject);
    console.log('sdsd',first_resp);
    document.getElementById("Output").innerHTML += `Saved. Data returned is: ${JSON.stringify(first_resp)}`;
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

function saveData( url, data ) {
  return new Promise( function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open( 'POST', url, true );
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(data));
    xhr.onload = function () {
      if (xhr.status === 201) {
         const response = JSON.parse(xhr.responseText);
         resolve(response);
      } else {
          const error = xhr.statusText || 'The reason is mysterious. Call Yoda!';
          reject(error);
      }
    }
  });
};