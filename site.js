const currentPage = document.body.dataset.page;
if (currentPage) {
  document.querySelectorAll(".nav a").forEach((link) => {
    if (link.dataset.page === currentPage) {
      link.classList.add("active");
    }
  });
}
