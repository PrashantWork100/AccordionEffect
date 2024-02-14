document.addEventListener("click", function(event) {

    document.querySelectorAll(".desc").forEach(a => {a.style.display = "none"});

    const section= event.target.parentNode;
    const desc = section.querySelector(".desc");
    desc.style.display = "block";
  
});
