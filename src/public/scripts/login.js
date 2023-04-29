const formLogin = document.getElementById("formLogin");

formLogin.onsubmit = async (e) => {
  e.preventDefault();
  const email = document.getElementById("exampleInputEmail1").value;
  const password = document.getElementById("exampleInputPassword1").value;
  const bodyObj = {
    email: email,
    password: password,
  };

  const response = await fetch("http://localhost:8090/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bodyObj),
  });
  if (response.status === 200) {
    Toastify({
      text: "Se logueo exitosamente",
      className: "info",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      gravity: "bottom",
    }).showToast();

    location.href = "http://localhost:8090/";
  } else {
    Toastify({
      text: "No se pudo loguear",
      className: "info",
      style: {
        background:
          "linear-gradient(to right, rgb(255, 95, 109), rgb(255, 195, 113))",
      },
      gravity: "bottom",
    }).showToast();
  }
};
