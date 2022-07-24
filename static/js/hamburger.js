const modal = document.getElementById('hamburger-modal');
const trigger = document.getElementById('trigger');
const modalNavContainer = document.getElementsByClassName('modal-nav-container')[0];
const modalHeader = document.getElementsByClassName('modal-header')[0];

trigger.onclick = () => {
    modal.style.display = 'block';

    setTimeout(() => {
        modalNavContainer.style.left = '0px';
        modalHeader.style.left = '0%';
    },200);

};

window.onclick = function(event){
    if(event.target==modal){
        modalNavContainer.style.left = '-260px';
        modalHeader.style.left = '-100%';

        setTimeout(() => {
            modal.style.display = 'none';
        },500)
    };
};

