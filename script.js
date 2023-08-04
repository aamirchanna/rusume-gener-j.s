function addNewEbtn() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("my-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute('placeholder', 'Enter here');

  let weob = document.getElementById("we");
  let weAddBtn = document.getElementById("addNewBtn");
  weob.insertBefore(newNode, weAddBtn);
}

function addNewbox() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("aqField");
  newNode.setAttribute('placeholder', 'Enter here');
  newNode.setAttribute("rows", 3);

  let aqob = document.getElementById("aq");
  let CVob = document.getElementById("addNewBtn2");
  aqob.insertBefore(newNode, CVob);
}

const generateCV = () => {
  // Name input
  let nameF = document.getElementById("nameField").value;
  let nameT = document.getElementById("nameT");
  nameT.innerHTML = nameF;
  document.getElementById("nameT2").innerHTML = nameF;

  if (nameF.length <= 3) {
    alert("Name must be greater than 3 characters.");
    return;
  }

  // Address column
  let addressField = document.getElementById('addressField').value;
  let addressFT = document.getElementById('addressT');
  addressFT.innerHTML = addressField;

  // Contact
  document.getElementById('fbT').innerHTML = document.getElementById('fbField').value;
  document.getElementById('linkedinT').innerHTML = document.getElementById('linkdField').value;
  document.getElementById('twitterT').innerHTML = document.getElementById('tweetField').value;
  document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value;

  // Work Experience
  let workEx = document.getElementsByClassName('weField');
  let str = "";
  for (let e of workEx) {
    str = str + `<li> ${e.value}</li>`;
  }
  document.getElementById("weT").innerHTML = str;

  // Academic Qualification
  let workaq = document.getElementsByClassName('aqField');
  let str2 = "";
  for (let e of workaq) {
    str2 = str2 + `<li> ${e.value}</li>`;
  }
  document.getElementById("aqT").innerHTML = str2;

  // Set the image to template
  const inputElement = document.getElementById('imgField');
  const imgTemplate = document.getElementById('imgTemplate');

  if (inputElement.files.length === 0) {
    alert('Please attach a new file.');
    return;
  }

  const file = inputElement.files[0];
  const reader = new FileReader();

  reader.addEventListener('load', () => {
    console.log(reader.result);
    console.log(typeof file);
    imgTemplate.src = reader.result;
  });

  reader.readAsDataURL(file);

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
}

const printCV = () => {
  window.print();
}

