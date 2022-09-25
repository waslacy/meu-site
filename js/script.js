$(document).ready(() => {
    $(window).scroll(() => {
        if(this.scrollY > 20){
            $('#site-header').addClass('sticky')
        } else {
            $('#site-header').removeClass('sticky')
        }
    })
})

const skills = {
    html: '',
    css: '',
    js: '',
    php: '',
    python: ''
}

function getSkills(lang) {
    placeholder = document.getElementById('skillPlaceholder')

    placeholder.innerHTML(skills.lang)
}