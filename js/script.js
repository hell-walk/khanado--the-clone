document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");

  searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
      alert(`Searching for: ${query}`);
    } else {
      alert("Please enter a dish or restaurant name.");
    }
  });
});
