// Initialize Firebase
const config = {
  apiKey: "AIzaSyD9Wra4wPC0Vz21wIi7LJOFEpfwr5oRd1M",
  authDomain: "dt-webadvanced-js.firebaseapp.com",
  databaseURL: "https://dt-webadvanced-js.firebaseio.com",
  projectId: "dt-webadvanced-js",
  storageBucket: "dt-webadvanced-js.appspot.com",
  messagingSenderId: "339163927955"
};
const db = firebase.initializeApp(config);

const st_ref = db.database().ref('students');
console.log(st_ref);

const button = document.getElementById('GetUsers');

button.addEventListener("click", processCall);

function processCall() {
    console.log(st_ref);
    st_ref.on("value", function(snapshot) {
      document.getElementById("Output").innerHTML = JSON.stringify(snapshot.val());
    }, function (error) {
      document.getElementById("Output").innerHTML = "Error: " + error.code;
    });
    console.log('done');
}


const form = document.getElementById('createUser')
form.addEventListener("submit", processSubmit);

async function processSubmit(e) {
  e.preventDefault();
  let jsonObject = {
    first_name: form.first_name.value,
    last_name: form.last_name.value,
    email: form.email.value
  };

  const status_insert = st_ref.push(jsonObject);
  console.log('inserted', status_insert.key);

  const status_update = st_ref.child(status_insert.key).update({
        email: form.email.value
  });
  console.log('updated', status_update.key);

}
