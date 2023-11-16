window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
});


const menuBtn = document.querySelector('.nav-menu-btn')
const closeBtn = document.querySelector('.nav-close')
const navigation = document.querySelector('.main_navigate_sec')
const navItems = document.querySelector('.navigate_sec')

menuBtn.addEventListener("click", () => {
    navigation.classList.add('active');
})

closeBtn.addEventListener('click', function () {
    navigation.classList.remove('active');
})

navItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
        navigation.classList.remove('active');
    })
});

