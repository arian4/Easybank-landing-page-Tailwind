// console.log('hello world !')
let sandbox = document.querySelector('#sandbox')
let hamburger = document.querySelector('#hamburger')
let closeIcon = document.querySelector('#close')

hamburger.addEventListener('click' , ()=>{
    document.body.classList.add('fixed')
    sandbox.classList.remove('hidden')
    
    // ########## FLEX#############
    sandbox.classList.add('flex')
    sandbox.classList.add('items-center')
    sandbox.classList.add('justify-center')
    // #########OPACITY ###########
    document.querySelector('#mobile-nav').classList.remove('opacity-0')
    document.querySelector('#mobile-nav').classList.add('opacity-100')
    // ############################
    hamburger.classList.add('hidden')
    closeIcon.classList.remove('hidden')
    
    
})


closeIcon.addEventListener('click' , () => {
    document.body.classList.remove('fixed')
    sandbox.classList.add('hidden')

    hamburger.classList.remove('hidden')
    closeIcon.classList.add('hidden')
})