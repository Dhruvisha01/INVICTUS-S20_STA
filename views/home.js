//get the form by its id
const form = document.getElementById("query"); 

//1.
const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();

  //2.
  let mail = new FormData(form);

  //3.
  sendMail1(mail);
})

const sendMail = (mail) => {
    //1.
    fetch("http://127.0.0.1:3000/askQuery", {
      method: "post", //2.
      body: mail, //3.
  
    }).then((response) => {
      return response.json();
    });
  };