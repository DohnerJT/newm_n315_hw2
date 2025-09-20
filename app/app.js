import { ModualLinked, ChangeFontSize, UpdateView } from "../module/module.js"


function initListeners() {
    //Controle Conected message
    console.log("Document Ready and listaning");
    //Viewer conected message
    ModualLinked();

    //Listaneres for page linkes

    //Nav bar Listeners
    $("nav a").on("mouseenter", (e) => {
        let hoverID = e.currentTarget.id;
        ChangeFontSize("40px", `#${hoverID}`);
    });

    $("nav a").on("mouseleave", (e) => {
        let hoverID = e.currentTarget.id;
        ChangeFontSize("20px", `#${hoverID}`);
    });

    $("nav a").on("click", (e) => {
        // let clickID = e.currentTarget.id;
        Sort(e.currentTarget.id)
        // console.log(clickID);
    });

}

function Sort(clickID) {

    switch (clickID) {
        case "Home":

            UpdateView(clickID)
            break;
        case "Lollipop":
            UpdateView(clickID)

            break;
        case "Gumdrop":
            UpdateView(clickID)
            break;
        case "Licorice":
            UpdateView(clickID)
            break;
        default:
            console.log(`Invalid Event Triger`)
            break;
    }
}


//Docuemnt ready starting point
$(document).ready(function () {
    //Add initial page function
    UpdateView('Home')

    initListeners();
})