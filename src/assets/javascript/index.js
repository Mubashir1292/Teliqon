const searchIcon = document.querySelector(".fa-search");
const searchContainer = document.getElementById("searchContainer");
console.log(searchIcon.classList);

function toggleSearchContainer() {
  searchContainer.style.display = searchIcon.classList.contains("fa-search")
    ? "block"
    : "none";
  if (searchIcon.classList.contains("fa-search")) {
    searchIcon.classList.remove("fa-search");
    searchIcon.classList.add("fa-times");
  } else if (searchIcon.classList.contains("fa-times")) {
    searchIcon.classList.remove("fa-times");
    searchIcon.classList.add("fa-search");
  }
}

searchIcon.addEventListener("click", toggleSearchContainer);
//const quotesBtn = document.querySelector(".quotesBtn");
