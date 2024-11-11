document.querySelector(".FilterButton").addEventListener("click", () => {
    document.querySelectorAll("img").forEach(image => {
     image.classList.add("filter");
    });
     console.log("Filter")
 });