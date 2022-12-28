
let mainHeader = document.getElementById('mainHeader');
let logoImg = mainHeader.querySelector(".header-content__logo");
//-----------------------------------------------------------------
let aTegs = mainHeader.querySelectorAll(".header-content a");
let icons = mainHeader.querySelectorAll(".icon-color");



/*
//a태그 다 선택됨
for(let i = 0; aTegs.length>i ; i++){
    alert(aTegs[i]);
}
*/
/*
window.addEventListener('scroll', function(){
    console.log( window.scrollY )   //현재 페이지를 얼마나 위에서부터 스크롤했는지 px단위로 알려줌
    console.log( mainHeader.clientHeight);  //내가 선택한 태그의 높이값!
});
*/

/*
window.addEventListener('scroll',function(){
    console.log( mainHeader.scrollTop); //선택한 태그가 위에서부터 얼만큼 내려왔는지 알려줌
    
    
    }

  })
*/
  window.addEventListener("scroll",_.throttle(
    function(){
    
        let a = mainHeader.scrollTop + mainHeader.clientHeight;
        const NUMS = 1000;

        if(window.scrollY >= NUMS){   
        colorSwitch();
        }else if(window.scrollY <= NUMS){
        colorSwitchRe();

        }
    }
  ),500)




function colorSwitch(){
    mainHeader.classList.add('scrollCol');
    logoImg.classList.add('scrollLog');
    

    //글자랑 아이콘들이 안됨
    
}
function colorSwitchRe(){
    mainHeader.classList.remove('scrollCol');
    logoImg.classList.remove('scrollLog');
 
}


// 팝업창 열기
function popup(){
  let popup = document.querySelector(".popup");
  popup.style.display ="block";

}

//팝업창 닫기

function popupClose(){
  let popup = document.querySelector(".popup");
  popup.style.display ="none";
}
//검색 내역 
