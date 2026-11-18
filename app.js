const form = document.getElementById("regForm");
const msg = document.getElementById("message");
const dialog = document.getElementById("courseDialog");
const closeDialog = document.getElementById("closeDialog");
const dialogRegister = document.getElementById("dialogRegister");
let selectedCourse = "";

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("stuName").value.trim();
  const id = document.getElementById("stuId").value.trim();
  const course = document.getElementById("courseSelect").value;

  if (name === "" || id === "") {
    msg.style.color = "red";
    msg.textContent = "Please complete all required fields.";
  } else {
    msg.style.color = "#16794a";
    msg.textContent = `Registration successful! ${name} (ID: ${id}) registered for ${course}.`;
    form.reset();
  }
});

document.querySelectorAll(".detail-button").forEach((button) => {
  button.addEventListener("click", function () {
    selectedCourse = button.dataset.course;
    document.getElementById("dialogTitle").textContent = selectedCourse;
    document.getElementById("dialogDescription").textContent = button.dataset.description;
    document.getElementById("dialogCredit").textContent = button.dataset.credit;
    document.getElementById("dialogDuration").textContent = button.dataset.duration;
    document.getElementById("dialogLevel").textContent = button.dataset.level;

    const points = document.getElementById("dialogPoints");
    points.replaceChildren();
    button.dataset.points.split("|").forEach((point) => {
      const item = document.createElement("li");
      item.textContent = point;
      points.appendChild(item);
    });

    dialog.showModal();
  });
});

closeDialog.addEventListener("click", function () {
  dialog.close();
});

dialog.addEventListener("click", function (event) {
  if (event.target === dialog) {
    dialog.close();
  }
});

dialogRegister.addEventListener("click", function () {
  document.getElementById("courseSelect").value = selectedCourse;
  dialog.close();
  document.getElementById("register").scrollIntoView({ behavior: "smooth" });
});
