


const holderOne = document.getElementById('radiooneholder');
const holderTwo = document.getElementById('radiotwoholder');
const holderThree = document.getElementById('radiothreeholder');
const radioOneShow = document.getElementById('radiooneonfocus');
const radioTwoShow = document.getElementById('radiotwoonfocus');
const radioThreeShow = document.getElementById('radiothreeonfocus');
const projectPop = document.getElementById('backprojectpop');
const closePopBtn = document.getElementById('closepopbtn');
const openPop = document.getElementById('backprojectbtn');
const modaL = document.getElementById('completedmodal');
const openMenu = document.getElementById('menu');
const closeMenu = document.getElementById('closemenu');
const navLinks = document.getElementById('navlink');
const aboutHolder = document.getElementById('aboutholder');






holderOne.style.cursor = 'pointer';
holderTwo.style.cursor = 'pointer'
holderThree.style.cursor = 'pointer'

function openModal(){
    modaL.style.display = "block";
}
function closeModal(){
    modaL.style.display = 'none';
    projectPop.style.display = 'none';
    aboutHolder.style.display = 'block';

    radioOneShow.style.display = "none";
    holderOne.style.border = '1px solid rgb(182, 182, 182)';
    radioTwoShow.style.display = 'none';
    holderTwo.style.border = '1px solid rgb(182, 182, 182)';
    holderThree.style.border = '1px solid rgb(182, 182, 182)';
    radioThreeShow.style.display = 'none';
    formInputOne.value = '';
    formInputTwo.value = '';
}

function bookMarkAlert(){
    alert('Page has been bookmarked successfully!');
}



function showPop(){
    projectPop.style.display = 'block';
    aboutHolder.style.display = 'none';
}
function closePop(){
    projectPop.style.display = 'none';
    radioOneShow.style.display = "none";
    holderOne.style.border = '1px solid rgb(182, 182, 182)';
    radioTwoShow.style.display = 'none';
    holderTwo.style.border = '1px solid rgb(182, 182, 182)';
    holderThree.style.border = '1px solid rgb(182, 182, 182)';
    radioThreeShow.style.display = 'none';
    aboutHolder.style.display = 'block';
}


function focusFuncOne() {
    radioOneShow.style.display = "block"
    holderOne.style.border = '3px solid aqua';
    radioTwoShow.style.display = 'none';
    holderTwo.style.border = '1px solid rgb(182, 182, 182)';
    holderThree.style.border = '1px solid rgb(182, 182, 182)';
    radioThreeShow.style.display = 'none';
}

function focusFunctwo() {
    holderTwo.style.border = '3px solid aqua';
    radioTwoShow.style.display = 'block';

    radioOneShow.style.display = 'none';
    holderOne.style.border = '1px solid rgb(182, 182, 182)';
    holderThree.style.border = '1px solid rgb(182, 182, 182)';
    radioThreeShow.style.display = 'none';
}

function focusFuncThree() {
    holderThree.style.border = '3px solid aqua';
    radioThreeShow.style.display = 'block';

    radioOneShow.style.display = 'none';

    radioTwoShow.style.display = 'none';
    holderTwo.style.border = '1px solid rgb(182, 182, 182)';    
}






// script for open and close nav

function openNav(){
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';

    navLinks.style.transform = 'scale(1)';
    navLinks.style.transition = 'all 1s';
}

function closeNav(){
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';

    navLinks.style.transform = 'scale(0)';
}


// form validating

let formInputOne = document.getElementById('priceone');
let formInputTwo = document.getElementById('pricetwo');

function validateFormOne(){

    if (formInputOne.value < 25) {
        alert('Pledge should not be below 25');
        formInputOne.style.border = '1px solid red';
    }else if(formInputOne.value > 74){
        alert('We noticed you want to pledge more than the required amount for the bamboo stand please make a pledge with the black edition stand');
    }
    else{
        return openModal();
    }
};
function validateFormTwo() {
    
    if (formInputTwo.value < 75) {
        alert('Make use of the bamboo stand pledge if you want to make a pledge lower than $75')
    }else{
        return openModal();
    }
}