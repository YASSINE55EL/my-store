javascript
function orderNow() {
  alert("سيتم التواصل معك على واتساب لتأكيد الطلب. شكرا!");
}`html
<!-- أضف روابط Firebase SDK -->
<script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-auth-compat.js"></script>

<script>
  const firebaseConfig = {
    apiKey: "API_KEY_HERE",
    authDomain: "PROJECT_ID.firebaseapp.com",
    // باقي الإعدادات ...
  };
  firebase.initializeApp(firebaseConfig);

  // تسجيل مستخدم جديد
  function signUp() {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    firebase.auth().createUserWithEmailAndPassword(email, pass)
      .then(() => alert("تم التسجيل بنجاح"))
      .catch(error => alert(error.message));
  }

  // تسجيل دخول
  function login() {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, pass)
      .then(() => alert("تم تسجيل الدخول"))
      .catch(error => alert(error.message));
  }
</script>

<body>
  <input id="email" type="email" placeholder="البريد الإلكتروني" />
  <input id="password" type="password" placeholder="كلمة السر" />
  <button onclick="signUp()">تسجيل جديد</button>
  <button onclick="login()">تسجيل دخول</button>
</body>
```html
<div id="notif" style="display:none; background:#ffdb4d; padding:10px; margin:10px;">
  🔔 تم استلام طلب جديد!
</div>

<script>
  function showNotif(message) {
    const notif = document.getElementById("notif");
    notif.innerText = "🔔 " + message;
    notif.style.display = "block";
    setTimeout(() => notif.style.display = "none", 5000);
  }

  // مثال على استخدامه
  showNotif("وصل طلب جديد من عميل.");
</script>