/*

기능 구현

1. 원가 * 수량 가격변경 , 예상 가격도 변경
2. 타임세일 시간
3. 장바구니 타입 선택
4. 전체 선택 버튼
5. 상품의 갯수 반영

//pay-PriceInfo의 총합 계산

*/

let selNormalBK = document.getElementById("sel-normalBK");
let selSubscripBK = document.getElementById("sel-subscripBK");
let nlist = selNormalBK.classList;
let slist = selSubscripBK.classList;

let basketNormal =document.getElementById("basket-normal"); //일반바구니 
let buyList1 = basketNormal.querySelector(".buyList");      //안의 리스트

let basketSubscrip =document.getElementById("basket-subscrip");//정기바구니 
let buyList2 = basketSubscrip.querySelector(".buyList");       // 안의 리스트


let payInfo = document.querySelector(".basket__Box2 .pay-PriceInfo");


function basketSelect(apple){
    //alert(apple);
    let myclass =  apple.classList;

    //클릭하면 본인꺼에 추가

    if(nlist.length > 0 ){
        nlist.remove("clickedBk");


    }else if(slist.length > 0){
        slist.remove("clickedBk");
        
    }

    myclass.add("clickedBk");

    //선택한 장바구니 별로 확인가능
    alert(apple.id);
    if(apple.id == selNormalBK.id){
        basketNormal.style.display="block";
        basketSubscrip.style.display="none";
    }else if(apple.id == selSubscripBK.id ){
        basketNormal.style.display="none";
        basketSubscrip.style.display="block";

    }

    
}

function basketTotalCount(){
    let nlist = buyList1.childElementCount;
    let slist = buyList2.childElementCount;
    
    let a = selNormalBK.querySelector("span");
    a.innerText = nlist -1 ;

    let b = selSubscripBK.querySelector("span");
    b.innerText = slist -1;

    //아무것도 없을때!


    if(nlist > 1  ){
        let nottingList = basketNormal.querySelector(".buyList-no");
        nottingList.style.display="none";
    }
    
    if( slist > 1 ){
        let nottingList = basketSubscrip.querySelector(".buyList-no");
        nottingList.style.display="none";
    }

}
basketTotalCount();

//==================================================================================


function allcheck(apple){
    //alert(apple);
    let check = apple.checked;
    alert(check);

    let parentId = apple.parentElement.parentElement.parentElement.id;
    alert(parentId);

    let all1 =buyList1.querySelectorAll("input");
    let all2 =buyList2.querySelectorAll("input");
    if( check == true && parentId == basketNormal.id){

        for(let i =0 ; i< all1.length ; i++){
            all1[i].checked = true;
        }
    }else if(check == false && parentId == basketNormal.id){
        for(let i =0 ; i< all1.length ; i++){
            all1[i].checked = false;
        }
        
        
    }


    if( check == true && parentId == basketSubscrip.id){

        for(let i =0 ; i< all2.length ; i++){
            all2[i].checked = true;
        }
    } else if(check == false && parentId == basketSubscrip.id){
        for(let i =0 ; i< all2.length ; i++){
            all2[i].checked = false;
        }
        
        
    }

}

//=====================================================================================

// 토탈수정중
function itemPrices(){
    //alert("dd");
    let unit = buyList1.querySelectorAll(".item__countBnt input[type=hidden]");
    //alert(unit);
    let itemPrice = document.querySelectorAll(".item-price");
    //alert(unit);
    let amount = document.querySelectorAll(".amount");


    for(let i =0; i<unit.length; i++){
        let price = Number(unit[i].value);
        let count = Number(amount[i].innerHTML);
        let sum  = price * count;
        itemPrice[i].innerHTML = sum;
       
    }



}

itemPrices();

function  priceTotal(){
    

}
priceTotal();