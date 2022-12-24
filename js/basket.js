
/*
구현할 기능

//1. 카운트 시계 구현
//2. 전체 선택 
//3. 선택 삭제
//    ㄴ 추가 , 장바구니가 비었을시 css!
//4. 상품 개수 버튼 
//5.상품의 가격*개수 에 따라 상품금액란 바뀌기 (예상결제 금액 또한 )
//6. 일반 구매, 정기구매시 카트내용물 바뀌는 것 => ajax 


*/
//1.
/*
//일반 시계
function clock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText =`${hours}:${minutes}:${seconds}`;
}

clock();
setInterval(clock, 1000);
*/

function clock(){
    let clock = document.querySelector("#clock");
   // alert(clock.innerHTML);
  
    let date = new Date();
    //거꾸로 가는 것이니까  24, 60에서 빼기
    //const hours = 24 - date.getHours();
    let hours = String(24 - date.getHours()).padStart(2,"0");
    //alert(hours);
    //const minutes = 60 - date.getMinutes();
    let minutes = String(60 - date.getMinutes()).padStart(2,"0");
    //alert(minutes);
    //const seconds = 60 - date.getSeconds();
    let seconds = String(60 - date.getSeconds()).padStart(2,"0");
    //alert(seconds);

    let times = hours +":" + minutes+ ":" + seconds;
    //alert(times);
    clock.innerHTML = times;
  
}
clock();
setInterval(clock, 1000);



//=====================================================================================
//페이지 로드시 바구니가 비어있을시 
function notingBasket(){
    //일반장바구니
    let buyNormal = document.querySelector(".buy-normal");
    //alert(buyNormal);
    let buyListNo = buyNormal.querySelector(".buyList__no");
    //alert(buyListNo);
    let list = buyNormal.querySelector(".buyList");
    //alert(list.childElementCount);

   if(list.childElementCount>=1){
        buyListNo.style.display ="none";
    }else {
        buyListNo.style.display ="block";
    }

    //---------------------------------------------------------------------------------

    //정기 장바구니
    let buySubscrip = document.querySelector(".buy-subscrip");
    //alert(buySubscrip);
    let buyListNo2 = buySubscrip.querySelector(".buyList__no");
    let list2 = buySubscrip.querySelector(".buyList");
    //alert(list2.childElementCount);
    if(list2.childElementCount>=1){
        buyListNo2.style.display ="none";
    }else {
        buyListNo2.style.display ="block";
    }

}

notingBasket();

//=====================================================================================




//2. 각 바구니의 전체 선택 
function allChecked(allcheck){
    let parents = allcheck.parentElement.parentElement.parentElement;
    //alert(parents.className);

    //일반 장바구니 선택
    let buyNormal = parents.querySelector(".buy-normal");
    //alert(buyNormal.className);
    let checkBoxs1 = buyNormal.querySelectorAll('input[type="checkbox"]');
    //alert(checkBoxs1);

    let normalBkSel = parents.querySelector(".normal-bk__sel");
    //alert(normalBkSel.className);
    //alert(normalBkSel.classList.length);  //2

    if(normalBkSel.classList.length == 2 ){
        // checkBoxs.forEach((checkbox) => {
        //     checkbox.checked = selectAll.checked
        // })
        for(let i=0; i < checkBoxs1.length;i++){
            checkBoxs1[i].checked = allcheck.checked;
        }

    }
    /*
    //===============================================================================
    let subscripBkSel= parents.querySelector(".subscrip-bk__sel");
    //alert(subscripBkSel.classList.length);
    //alert(subscripBkSel.className);
    let buySubscrip = parents.querySelector(".buy-subscrip");
    //alert(buySubscrip.className);
    let checkBoxs2 = buySubscrip.querySelectorAll('input[type="checkbox"]');
    //alert(checkBoxs2); //배열로 잘옴

    if(subscripBkSel.classList.length == 2){
        for(let i=0; i < checkBoxs2.length;i++){
            checkBoxs2[i].checked = allcheck.checked;
        }

    }
    */
}



//
function checked(){

}
checked();






//3.  각 장바구니에서 선택된것들을 삭제
function selectDelet(){
    //alert("hi");
    /*
    let item = itemCheck[0].parentNode.parentNode;  //부모의 부모선택
    alert(item);    //li선택 해야함! 잘됨

    체크박스 배열
    let checkBoxs = document.querySelectorAll(".buyList input[type='checkbox']");

    let checkBoxs = document.querySelectorAll(".itemCheck");
    alert(checkBoxs);
    alert(checkBoxs[1].checked);
    선택된거 
    */
    //일반 장바구니 선택
    let buyNormal = document.querySelector(".buy-normal");
    let checkBoxs = buyNormal.querySelectorAll(".itemCheck");
    let buyListNo = buyNormal.querySelector(".buyList__no");
    let buyList = buyNormal.querySelector(".buyList");
    //alert(checkBoxs);
    
    for(let i=0; i< checkBoxs.length;i++){
        if(checkBoxs[i].checked){
            let itemList =  checkBoxs[i].parentNode.parentNode; //li선택
            itemList.remove();  //li 삭제
          
        }

    }
     //alert("알림뜨냐?  "+ buyList.childElementCount);
    if(buyList.childElementCount == 1){
        buyListNo.style.display ="block";
    }
    
    //------------------------------------------------------------------------
    //정기 장바구니  선택
    let buySubscrip = document.querySelector(".buy-subscrip");
    let checkBoxs2 = buySubscrip.querySelectorAll(".itemCheck");
    let buyListNo2 = buySubscrip.querySelector(".buyList__no");
    let buyList2 = buySubscrip.querySelector(".buyList");
    //alert(checkBoxs2);
    
    for(let i=0; i< checkBoxs2.length;i++){
        if(checkBoxs2[i].checked){
            let itemList =  checkBoxs2[i].parentNode.parentNode; //li선택
            itemList.remove();  //li 삭제
        }
    }
    if(buyList2.childElementCount == 1){
        buyListNo2.style.display ="block";
    }



}



//4. 각 상품의 개수 증감과 그에 따른 가격 변동

/*
function conutPuls(apple){
    //alert(apple);

    let parent = apple.parentElement;
    //alert( "dd");

    let span  = parent.querySelector(".amount");
    //alert( span);
    let count = Number(span.innerHTML);
    //--------------------------------------------------
     let pricParents = apple.parentElement.parentElement.parentElement;
     alert(pricParents);
     let itemPrice = pricParents.querySelector(".content-item:last-child .item-price")
      alert(itemPrice);
    // let price =Number(itemPrice.innerHTML);
 
    //--------------------------------------------------

    //원래가격 20000
    //alert("dqdqd"+b);
    let a = Number(itemPrice.innerHTML);
    let b = a/count;

    count++;
    span.innerHTML= count;  // 1    2   3   4   5   

    let sum = 0;
    for(let i=1; i<=count;i++){
        sum+=b;
    }
    
    //alert(sum);

    itemPrice.innerHTML = sum;
    

}
function conutMious(apple){
        //alert(apple);

        let parent = apple.parentElement;
        //alert( parent);
        let span  = parent.querySelector(".amount");
        //alert( span);
        let count = Number(span.innerHTML); //
        //--------------------------------------------------
        let pricParents = apple.parentElement.parentElement.parentElement;
        alert(pricParents);
        let itemPrice = pricParents.querySelector(".content-item:last-child .item-price")
         alert(itemPrice);
       // let price =Number(itemPrice.innerHTML);
    
       //--------------------------------------------------
   
       //원래가격 20000
       //alert("dqdqd"+b);
       let a = Number(itemPrice.innerHTML);
       let b = a/count;

        alert(b);

        count--;
        if(count < 1){
            count = 1;
        }
        let sum = 0
        for(let i=1; i<=count;i++){
            sum+=b;
        }
        alert(sum);       
       

        span.innerHTML= count;
        itemPrice.innerHTML = sum;


}
*/
function conutPuls(apple) {
    //alert(apple);
    let parent = apple.parentElement;
    //alert( parent);
    let span  = parent.querySelector(".amount");
    //alert( span);
    let count = Number(span.innerHTML);
    //-----------------------------------------------------------------------------
    let hiddenPrice  = parent.querySelector(".item-price__hidden");
    //alert(hiddenPrice);
    let price = Number(hiddenPrice.innerHTML);
    //alert(price);
    //====================================================================================
    let parents = apple.parentElement.parentElement.parentElement;
    //alert(parents);
    let itemPrice = parents.querySelector(".content-item:last-child .item-price");
    //alert(itemPrice);

    count++;
    span.innerHTML = count;
    //alert(count);
    let sum = price *count ;
    //alert(sum);

    itemPrice.innerHTML = sum;
    totals();

  
}
function conutMious(apple){
      //alert(apple);
      let parent = apple.parentElement;
      //alert( "dd");
      let span  = parent.querySelector(".amount");
      //alert( span);
      let count = Number(span.innerHTML);
      //-----------------------------------------------------------------------------
      let hiddenPrice  = parent.querySelector(".item-price__hidden");
      //alert(hiddenPrice);
      let price = Number(hiddenPrice.innerHTML);
      //alert(price);
      //====================================================================================
      let parents = apple.parentElement.parentElement.parentElement;
      //alert(parents);
      let itemPrice = parents.querySelector(".content-item:last-child .item-price");
      //alert(itemPrice);
  
      count--;
      if(count<1){
        count =1;
      }
      span.innerHTML = count;
      let sum = price *count ;
      //alert(sum);
  
      itemPrice.innerHTML = sum;
      totals();
      
}


//5. 총 합계 변경
function totals(){

    let noemalBKSel = document.querySelector(".normal-bk__sel");
    let subscripBKSel = document.querySelector(".subscrip-bk__sel");
    let selectN = noemalBKSel.classList.length;
    let selectS = subscripBKSel.classList.length;

    //-----------------------------------------------------------------

    let totals = document.querySelector(".totaPrice-item");
    let anticipate = document.querySelector(".antiPay-item");
    let endTotal = document.querySelector(".total-item__price");


    let sum1 = 0;
    let sum2 = 0;

    if(selectN == 2 && selectS ==1){
        
        sum2 = 0;

        let buyNormal = document.querySelector(".buy-normal");
        let list = buyNormal.querySelectorAll(".item-price");

        
        for(let i=0; i<list.length;i++){
            sum1 += Number(list[i].innerHTML);
        }

        //alert("sum1 = "+sum1 +"  /  "+"sum2 = "+ sum2);

        totals.innerHTML= sum1;
        anticipate.innerText = sum1;
        endTotal.innerHTML= sum1;

    }else if(selectS == 2 && selectN ==1){

        sum1= 0;

        let buySubscrip = document.querySelector(".buy-subscrip");
        let list = buySubscrip.querySelectorAll(".item-price");
        
        for(let i=0; i<list.length;i++){
            sum2 += Number(list[i].innerHTML);
        }
       // alert("sum1 = "+sum1 +"  /  "+"sum2 = "+ sum2);

        totals.innerHTML= sum2;
        anticipate.innerText = sum2;
        endTotal.innerHTML= sum2;
    }

}  





//6.     
function normalBk(apple) {
    let buyNormal = document.querySelector(".buy-normal");
    let buySubscrip = document.querySelector(".buy-subscrip");
    buyNormal.style.display="block";
    buySubscrip.style.display="none";

    apple.classList.add("clickedBk");
    let subscrip = apple.nextElementSibling;
    //alert(subscrip.className);
    //alert(subscrip.classList.length);
    // if(subscrip.classList == 2){
    //     subscrip.classList.remove("clickedBk");
    // }
    

    //클래스 이름 비교
    for(let i = 0; i<subscrip.classList.length; i++){
        //alert(subscrip.classList.item(i));
        if(subscrip.classList.item(i) == "clickedBk"){
            subscrip.classList.remove("clickedBk");
        }
    }

    //----------------------------------------------------------
    //일반 장바구니 선택
    //alert(buyNormal.className);
    let checkBoxs1 = buyNormal.querySelectorAll('input[type="checkbox"]');
   // alert(checkBoxs1);
    let parents = buyNormal.parentElement;
   // alert(parents);
    let normalBkSel = parents.querySelector(".normal-bk__sel");
    //alert(normalBkSel.className);
   // alert(normalBkSel.classList.length);  //2
    let alls = parents.querySelector(".allcheck");
    //alert(alls);
    let checkBoxs2 = buySubscrip.querySelectorAll('input[type="checkbox"]');

    if(normalBkSel.classList.length == 2 ){
        
        alls.checked = true;
        for(let i=0; i < checkBoxs1.length;i++){
            checkBoxs1[i].checked = true;
        }
        for(let i=0; i < checkBoxs2.length;i++){
            checkBoxs2[i].checked = false;
        }

    }
    totals();
    
}

function subcripBk(apple) {
    let buyNormal = document.querySelector(".buy-normal");
    let buySubscrip = document.querySelector(".buy-subscrip");
    buyNormal.style.display="none";
    buySubscrip.style.display="block";

    apple.classList.add("clickedBk");
    let normal = apple.previousElementSibling;
    normal.classList.remove("clickedBk");


    //----------------------------------------------------------

    let checkBoxs1 = buyNormal.querySelectorAll('input[type="checkbox"]');
    let checkBoxs2 = buySubscrip.querySelectorAll('input[type="checkbox"]');
    let parents = buySubscrip.parentElement;
    let subscripBkSel = parents.querySelector(".subscrip-bk__sel");
    //alert(normalBkSel.className);
   // alert(normalBkSel.classList.length);  //2
    let alls = parents.querySelector(".allcheck");
    //alert(alls);
   

    if(subscripBkSel.classList.length == 2 ){
        
        alls.checked = true;
        for(let i=0; i < checkBoxs1.length;i++){
            checkBoxs1[i].checked = false;
        }
        for(let i=0; i < checkBoxs2.length;i++){
            checkBoxs2[i].checked = true;
        }

    }

    totals();
}

