$(document).ready(() => {
    $(window).scroll(() => {
        if(this.scrollY > 20){
            $('#site-header').addClass('sticky')
        } else {
            $('#site-header').removeClass('sticky')
        }
    })
})

function addSkill(span){
    let el = '#' + span.id
    $('.skill div').css('display', 'flex')
    $(el).css("opacity", 1)
}

function rmSkill(span){
    let el = '#' + span.id
    $('.skill div').css('display', 'none')
    $(el).css("opacity", 0)
}
