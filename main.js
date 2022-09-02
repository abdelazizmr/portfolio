//progress animation to skills section
console.log('yoo');
let skillsSection = document.querySelector('.skills')
window.onscroll = function(){
    let windowScrollTop = this.pageYOffset;
    let skillsOfssetTop = skillsSection.offsetTop
    let skillsOfssetHeight = skillsSection.offsetHeight
    let windowHeight = this.innerHeight

    //console.log(windowScrollTop,skillsOfssetTop,skillsOfssetHeight,windowHeight);

    if (windowScrollTop >= (skillsOfssetTop + skillsOfssetHeight - windowHeight)){
        console.log('here');
        let allskills = document.querySelectorAll('.skill .progress span')
        console.log(allskills);
        allskills.forEach(skill =>{
            skill.style.width = skill.dataset.progress
        })
    }
}