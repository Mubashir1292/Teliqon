// Get the search icon element
const searchIcon = document.querySelector(".fa-search");
// Get the search container element
const searchContainer = document.getElementById("searchContainer");
// Get the close icon element

// Function to toggle search container visibility
function toggleSearchContainer() {
  if (searchIcon.classList.contains("fa-search")) {
    searchIcon.classList.remove("fa-search");
    searchIcon.classList.add("fa-times");
  } else if (searchIcon.classList.contains("fa-times")) {
    searchIcon.classList.remove("fa-times");
    searchIcon.classList.add("fa-search");
  }
  searchContainer.style.display =
    searchContainer.style.display === "none" ? "block" : "none";
}

// Add click event listener to search icon
searchIcon.addEventListener("click", toggleSearchContainer);
// Add click event listener to close icon
