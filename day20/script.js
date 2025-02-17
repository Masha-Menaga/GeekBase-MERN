function ChangeContent() {
  const title = document.getElementById("heading");
  title.style.color = "red";
  console.log(title);
}
let btn = document.getElementById("btn");
btn.addEventListener("click", ChangeContent);
