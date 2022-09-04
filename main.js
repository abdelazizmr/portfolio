//responsive nav bar 

let openMenu = document.querySelector('#btn-menu')
openMenu.addEventListener('click',()=>{
    document.querySelector('.mobile-view ul').classList.toggle('show')
})

let closeMenu = document.querySelector('#close-menu')
closeMenu.addEventListener('click',()=>{
    document.querySelector('.mobile-view ul').classList.remove('show')
})
window.addEventListener('scroll',()=>{
    document.querySelector('.mobile-view ul').classList.remove('show')
})

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

//clicking on see more projects
let seeMore = document.querySelector('.see-more .main-title h4')
seeMore.addEventListener('click',()=>{
    if (seeMore.textContent = 'See More <i class="fa-solid fa-arrow-right-long"></i>'){
        document.querySelector('.more-projects').style.display = 'flex'
        seeMore.style.display = 'none'
    }
    
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