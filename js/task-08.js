const form = document.querySelector(".login-form");

form.addEventListener("submit", handleFormSubmit);

// 1 option

// function handleFormSubmit(event) {
//   event.preventDefault();
//   let anyError = false;

//   const formData = new FormData(event.currentTarget);
//   formData.forEach((value, name) => {
//     if (value.length === 0) {
//       anyError = true;
//     } else {
//       console.log("name", name);
//       console.log("value", value);
//     }
//   });

//   if (anyError) {
//     alert("all fields must be filled!");
//   } else {
//     form.reset();
//   }
// }

//2 option

function handleFormSubmit(event) {
  event.preventDefault();
  let anyError = false;

  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;
  const formData = {
    mail,
    password,
  };

  if (mail === "" || password === "") {
    anyError = true;
  } else {
    console.log(formData);
  }

  if (anyError) {
    alert("all fields must be filled!");
  } else {
    form.reset();
  }
}
