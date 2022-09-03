//progress animation to skills section
let skillsSection = document.querySelector('.skills')
window.onscroll = function(){
    let windowScrollTop = this.pageYOffset;
    let skillsOfssetTop = skillsSection.offsetTop
    let skillsOfssetHeight = skillsSection.offsetHeight
    let windowHeight = this.innerHeight

    //console.log(windowScrollTop,skillsOfssetTop,skillsOfssetHeight,windowHeight);

    if (windowScrollTop >= (skillsOfssetTop + skillsOfssetHeight - windowHeight)){
        let allskills = document.querySelectorAll('.skill .progress span')
        allskills.forEach(skill =>{
            skill.style.width = skill.dataset.progress
        })
    }
}

// clicking on the title and taking you to the target section 

let allTitles = document.querySelectorAll('.title')
allTitles.forEach(title=>{
    let word = title.textContent.toLowerCase().split(' ')
    console.log(word);
    title.addEventListener('click',()=>{
    let target = word[1]
    window.location.href = `#${target}`
    })
})




//hovering on projects images 

// let projectImgs = document.querySelectorAll('.project img')
// projectImgs.forEach(img=>{
//     let span = img.nextElementSibling
//     img.addEventListener('mouseover',()=>{
//         span.style.width = '100%'
//     })

//     img.addEventListener('mouseout',()=>{
//         span.style.width = '0%'
//     })
// })