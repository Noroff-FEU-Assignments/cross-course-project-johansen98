let count = 0;
// ↓↓↓ desktop menu ↓↓↓
function openMenu() {
    document.getElementById("mySideMenu").style.width = "400px";
    document.getElementById("overlay").style.display = "block";
  }
  
  function closeMenu() {
    document.getElementById("mySideMenu").style.width = "0";
    document.getElementById("overlay").style.display = "none";

  }



// ↓↓↓ mobile menu ↓↓↓

  function openMobileMenu() {
    document.getElementById("myMobileSideMenu").style.width = "100vw";
    
  }
  
  function closeMobileMenu() {
    document.getElementById("myMobileSideMenu").style.width = "0";
    
  }




  
// ↓↓↓ mobile Search ↓↓↓  

  function search(){
    let elm = document.getElementById("searchbar"); 
    if(elm.style.display === 'block')
        elm.style.display = 'none'
    else
        elm.style.display = 'block'

        if(count === 0){
        elm.addEventListener("keyup" , function(event) {
          if(event.keyCode === 13){
            event.preventDefault();
            window.location.href="index.html"
          }
        })
      }
      count++;
  }










// ↓↓↓ for the people who are checking console and my code :D ↓↓↓

const style = 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)';

console.log('%c Thanks for checking out my page and thanks for looking at the code ;D' , style);