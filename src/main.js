import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { auth } from "./app/firebase.js";

import { loginCheck } from "./app/loginCheck.js";

import "./app/logout.js";
import "./app/iniciarsesionForm.js";
import "./app/registroForm.js";
import "./app/googleLogin.js";
import "./app/githubLogin.js";

onAuthStateChanged(auth, async (user) => {
  

  loginCheck(user);
});
