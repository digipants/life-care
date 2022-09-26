const drpdwn = document.querySelector("#drpdwn");
const drpdwnMenu = document.querySelector(".drpdwn");
drpdwn.addEventListener('click', function() {
    if (drpdwnMenu.style.display === 'block'){
        drpdwnMenu.style.display = 'none';
    } else {
        drpdwnMenu.style.display = 'block';
    }   
})

document.addEventListener('mouseup', function(e) {
    if (!drpdwn.contains(e.target)) {
        drpdwnMenu.style.display = 'none';
    }
})

