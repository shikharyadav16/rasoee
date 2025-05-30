
    const mainCat = document.querySelectorAll(".main-class");

    mainCat.forEach(item => {
        item.addEventListener("click", (event) => {
            event.preventDefault();

            mainCat.forEach(el => el.classList.remove("active"));
            event.target.classList.add("active");
        });
    });

    const buttons = document.querySelectorAll(".main-class");
    const containers = {
        "jain-cat": document.querySelector(".bev-container"),
        "veg-cat": document.querySelector(".veg-container"),
        "nonveg-cat": document.querySelector(".non-veg-container")
    };

    function hideAllContainers() {
        Object.values(containers).forEach(container => {
            container.style.display = "none";
        });
    }

    function showContainer(className) {
        hideAllContainers();
        containers[className].style.display = "block";
    }

    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();

            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            showContainer(button.classList[0]);
        });
    });

    showContainer("veg-cat");
    document.querySelector(".veg-cat").classList.add("active");