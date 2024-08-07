// drop burger icon list'
document.querySelector(".burger-icon").addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("visiable");
});

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const height = parseFloat(document.querySelector(".height").value);
  const weight = parseFloat(document.querySelector(".weight").value);
  const gender = document.querySelector(".gender").value;
  const age = parseInt(document.querySelector(".age").value);
  const activity = parseInt(document.querySelector(".activity").value);
  const heightMeter = height / 100;
  const personBmi = weight / (heightMeter * heightMeter);

  let proteinReq;

  if (gender === "male") {
    if (activity === 1) {
      proteinReq = weight * (age === 1 ? 0.8 : age === 2 ? 0.75 : 0.7);
    } else {
      proteinReq = weight * (age === 1 ? 1.2 : age === 2 ? 1.1 : 1.0);
    }
  } else {
    if (activity === 1) {
      proteinReq = weight * (age === 1 ? 0.7 : age === 2 ? 0.65 : 0.6);
    } else {
      proteinReq = weight * (age === 1 ? 1.0 : age === 2 ? 0.9 : 0.8);
    }
  }

  Swal.fire({
    text: `Your Needed Protein is ${Math.ceil(proteinReq)}g every day`,
    icon: "success",
  });
});
