let type = new Typed ('.typing-text',{
    strings: ['','front end developer','graphic designer','junior developer' ],
    typeSpeed: 120,
    loop:true
});

let themeColor = document.querySelectorAll('.theme-toggler span');
themeColor.forEach(color => color.addEventListener('click', ()=>{
    let background = color.style.background;
    document.querySelector('body').style.background = background;
}));