//function setUpPopUpHandlers(contentId, popUpId) {
//    document.querySelector(`.content-container#${contentId}`).addEventListener("click", function () {
//        document.querySelector(`.pop-up#${popUpId}`).style.display = "grid";
//    });
//
//    document.querySelector(`.pop-up#${popUpId} .close`).addEventListener("click", function () {
//        document.querySelector(`.pop-up#${popUpId}`).style.display = "none";
//    });
//}

//setUpPopUpHandlers("katsu", "katsu")
//setUpPopUpHandlers("pancakes", "pancakes")
//setUpPopUpHandlers("japanese_breakfast", "japanese_breakfast")
//setUpPopUpHandlers("sando", "sando")
//setUpPopUpHandlers("chirashi", "chirashi")
//setUpPopUpHandlers("daifuku", "daifuku")
//setUpPopUpHandlers("creampuff", "creampuff")
//setUpPopUpHandlers("ichiran", "ichiran")

function setUpPopUpHandlers(){
    //for visible .content-container elements, add click event listener
    document.querySelectorAll(".section-container .content-container").forEach((content) => {
        content.addEventListener("click", function(){
            console.log("clicked")
            const popUpId = `${this.id}-pop-up`;
            const popUp = document.getElementById(popUpId);
            if (popUp) {
                popUp.classList.remove("hidden");
                document.body.classList.add("no-scroll")
            } else {
                console.error(`Pop-up with ID ${popUpId} not found.`);
            }
        });
    });

    //close pop-up elements
    document.querySelectorAll(".pop-up .close").forEach((closeButton) => {
        closeButton.addEventListener("click", function(){
            this.parentElement.classList.add("hidden");
            document.body.classList.remove("no-scroll")
        });
    });
}

setUpPopUpHandlers();

function updateContentVisibility(filter){
    //hide section containers
    document.querySelectorAll(".section-container").forEach((container) => {
        container.classList.add("hidden");
    });

    //show section containers
    const selectedContainer = document.querySelector(`.section-container[data-filter="${filter}"]`);
    if (selectedContainer){
        selectedContainer.classList.remove("hidden");
    }

    setUpPopUpHandlers();

    //update styling for active tab
    document.querySelectorAll(".filter-tab p").forEach((tab) => {
        if (tab.textContent.trim() === filter) {
            tab.classList.add("active");
        }
        else {
            tab.classList.remove("active");
        }
    });
}
//make filter tab interactable
document.querySelectorAll(".filter-tab p").forEach((tab) => {
    tab.addEventListener("click", function(){
        const selectedFilter = this.textContent.trim();
        updateContentVisibility(selectedFilter);
    });
});

//initialize to food
updateContentVisibility("Food");