

let paragraphShort = `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis culpa laudantium deleniti neque eum dolorem voluptatum! Libero fugit exercitationem consequatur?</p>`

let paragraphMediam = `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus repellat blanditiis voluptas eius dolor aliquid fugit asperiores dolore dicta, sed unde aut temporibus, non est sapiente pariatur deserunt ducimus iure consequuntur accusantium ullam, eum rerum necessitatibus. Architecto quia dolorum a.</p>`

let paragraphLong = '<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus facere velit, in explicabo harum culpa fuga cupiditate similique quas, expedita quasi necessitatibus eum magnam unde, nostrum reprehenderit quaerat iure. Laudantium repellat perferendis asperiores, distinctio veritatis corporis exercitationem, magni consequatur quidem, commodi in sed itaque error nisi voluptas numquam ad autem! Perspiciatis ipsam, aliquam corporis rerum autem sapiente. Molestias, veritatis eos!</p>'

//Lollipop Page------------------------------------------------------------------------
const pageLollipopColOne = [
    AddParagraph("Short"),
    AddParagraph("Mediam"),
    ImageBox("Lollipop"),
    AddParagraph("Long"),
    AddParagraph("Short"),
    AddParagraph("Long"),

]
const pageLollipopColTwo = [
        AddParagraph("Mediam"),
        AddParagraph("Long"),
        AddParagraph("Short"),
        AddParagraph("Long"),
]

//Home Page---------------------------------------------------------------------------------
let pageHome = `<div class="singlCol">
                    <div id="HomeImg" style="background-image: url(images/AdobeStock_27294248.jpeg);"></div>
                    
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam architecto similique laudantium aliquam nisi ratione? Consequuntur quo libero iure qui tempora doloribus nemo mollitia voluptatibus vero, harum debitis quidem nesciunt.</p>
                </div>`
//Gumdrop Page-------------------------------------------------------------------------------
const pageGumdropColOne = [
    AddParagraph("Short"),
    AddParagraph("Mediam"),
    AddParagraph("Long"),
    AddParagraph("Short"),
    AddParagraph("Long"),
    AddParagraph("Long"),
    AddParagraph("Long"),

]
const pageGumdropColTwo = [
        AddParagraph("Mediam"),
        AddParagraph("Long"),
        AddParagraph("Short"),
        ImageBox("Gumdrop"),
        AddParagraph("Long"),
        
]
//Licorice Page----------------------------------------------------------------------------

const pageLicoriceColOne = [
    AddParagraph("Short"),
    AddParagraph("Mediam"),
    AddParagraph("Long"),
    AddParagraph("Short"),
    AddParagraph("Long"),
    AddParagraph("Long"),
    AddParagraph("Long"),

]
const pageLicoriceColTwo = [
        ImageBox("Licorice"),
        AddParagraph("Mediam"),
        AddParagraph("Long"),
        AddParagraph("Short"),
        AddParagraph("Long"),
        
]

export function ModualLinked() {
    console.log("Modual Is also Linked and ready")
}

export function ChangeFontSize(size, target) {
    $(target).css("font-size", size)
}

export function UpdateView(page) {

    let content = ""

    if (page != "Home")
    {
        content += ParentDoubleCol(MakeCole( eval(`page${page}ColOne`), page ), MakeCole(eval(`page${page}ColTwo`), page ) )
    }
    else{
        content += pageHome
    }
    
    $("a").removeAttr("style")
    $(`#${page}`).attr("style", "background-color: #2daefd ;")

     $("#contentContaner").empty()
     $("#pageTitle").empty()

     $("#pageTitle").append(`${page} Page`)
     $("#contentContaner").append(content)

    // console.log(AddParagraph("Short"))
    // console.log(AddParagraph("Mediam"))
    // console.log(AddParagraph("Long"))
}

function MakeCole(colContent, type) {
    
    let colInner = ""
    colContent.forEach(element => {
        
        colInner += element
    });

    return colInner
}

function ParentDoubleCol(colOne, colTwo) {


    let frame = `<div class="contentCol">
                    ${colOne}
                </div>
                <div class="contentCol">
                    ${colTwo}
                </div>`

    return frame;
}

function ImageBox(type) {

    let box = `<div class="colImg" style="background-image: url(images/img${type}.jpg);"></div>`

    return box
}

function AddParagraph(length) {
    return eval(`paragraph${length}`)
}

