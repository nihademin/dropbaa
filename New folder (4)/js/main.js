"use strice"

$(".dropWrapper .drop").on("dragover",function(e){
    e.preventDefault()
    $(this).addClass("active")

$(this).addClass("active")
})
$(".dropWrapper .drop").on("dragleave",function(){
    $(this).removeClass("active")
    })

    document.querySelector('.dropWrapper .drop').addEventListener("drop",function(e){
        e.preventDefault()
        $(this).removeClass("active")
        })