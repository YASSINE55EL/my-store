js
// إعداد Firebase (غيّر القيم حسب مشروعك)
const firebaseConfig = {
  apiKey: "API_KEY_HERE",
  authDomain: "PROJECT_ID.firebaseapp.com",
  // أضف باقي الإعدادات حسب مشروعك
};
firebase.initializeApp(firebaseConfig);

// دالة تسجيل جديد
function signUp() {
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;
  firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then(() => alert("تم التسجيل بنجاح"))
    .catch(error => alert(error.message));
}

// دالة تسجيل دخول
function login() {
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;
  firebase.auth().signInWithEmailAndPassword(email, pass)
    .then(() => alert("تم تسجيل الدخول"))
    .catch(error => alert(error.message));
}js
// إضافة Firestore
const db = firebase.firestore();

function signUp() {
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;

  firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then((userCredential) => {
      const uid = userCredential.user.uid;
      return db.collection("users").doc(uid).set({
        email: email,
        name: name,
        phone: phone
      });
    })
    .then(() => alert("تم التسجيل وتخزين المعلومات"))
    .catch(error => alert(error.message));
}``js
firebase.auth().onAuthStateChanged(user => {
  if (user) {const uid = user.uid;
    db.collection("users").doc(uid).get()
      .then(doc => {
        if (doc.exists) {
          const data = doc.data();
          console.log("مرحبا، " + data.name);
        }
      });
  }
})


