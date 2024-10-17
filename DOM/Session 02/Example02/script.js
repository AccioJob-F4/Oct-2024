const button = document.getElementById("btn");

button.addEventListener("click", () => {
  const listItems = document.querySelectorAll(
    "#numberedList li:nth-child(even)"
  );

  listItems.forEach((item) => {
    item.style.backgroundColor = "grey";
  });
});
