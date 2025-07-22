`js
const auth = firebase.auth();
const db = firebase.firestore();

auth.onAuthStateChanged(user => {
  if (user) {
    const uid = user.uid;
    db.collection("users").doc(uid).get().then(doc => {
      if (doc.exists) {
        const data = doc.data();
        document.getElementById("profile").innerHTML = `
          <p><strong>الاسم:</strong> data.name</p>
          <p><strong>البريد:</strong>{data.email}</p>
          <p><strong>الهاتف:</strong> ${data.phone}</p>
        `;
      }
    });
  } else {window.location.href = "login.html"; // إذا لم يسجل الدخول
  }
});

function logout() {
  auth.signOut().then(() => {
    window.location.href = "login.html";
  });
}