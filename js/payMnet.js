/*
구현할 기능 

//1. 구매 제품 목록에서 (-)클릭하면 접히고 펼쳐지는 기능!
//2. 이메일 선택시 자동 입력
//3. 주문고객과 동일 => 위의 데이터를 가지고와서 붙여넣기
//4. 결제수단 선택하면 css 바뀌기 
//5. 유효성검사
//6. 총 건수 자동 입력
*/

//alert("hi");

//1.
function listshow() {
    //alert("메롱");
    let productInfo = document.querySelector(".productInfo");
    let onBnt = document.querySelector(".productInfo__title > div");
    let iconC = document.querySelector(".foldBnt>i");
   // alert(iconC);
    //alert(iconC.className);   //있네 ㅋㅋ 클래스 네임 가져오기 ㅠㅠ

    //<i class="fa-solid fa-angle-up"></i>

    if(productInfo.style.display == 'none'){
        productInfo.style.display ='block';
        iconC.className ='fa-solid fa-angle-down';

    }else{
        productInfo.style.display ='none';
        iconC.className ='fa-solid fa-angle-up';
    }

}

//2.
function emails(){
    //alert("hi");
    let emailSel = document.querySelector(".email-back2");
    //let emailIndex = emailSel.selectedIndex;
    //alert(emailIndex);  //선택됨 0 1 2 3 나옴
    let emailText = emailSel.options[emailSel.selectedIndex].text;
    let emailValue = emailSel.options[emailSel.selectedIndex].value;
    //alert(emailText);
    //----------------------------------------------------------
    let emailBack = document.querySelector(".email-back");
    //----------------------------------------------------------

    emailBack.value = emailValue;

}

//3.
function sameCustomer(){
    let orderInfo = document.querySelector(".pay-orderCustomer .nemaInput:first-child");
    let orderName = orderInfo.value;
    //alert(orderName);
    //-----------------------------------------------------------------------------------
    let deliveryInfo = document.querySelector(".pay-deliveryInfo .nemaInput:first-child");
    // let deliName = deliveryInfo.value;
    // alert( deliName);

    deliveryInfo.value = orderName;
    //alert( deliveryInfo.value);

//=========================================================================================================

    let phoneFn = document.querySelector('.pay-orderCustomer .phone-Fn');
    let phoneBn = document.querySelector('.pay-orderCustomer .phone-Bn');


    let p = phoneFn.value;
    let p2 = phoneBn.value;

    //alert(p);
    //alert(p2);


    //--------------------------------------------------------------------------------------------------------

    let phoneFn2 = document.querySelector('.pay-deliveryInfo .phone-Fn');
    let phoneBn2 = document.querySelector('.pay-deliveryInfo .phone-Bn');

   // alert(phoneFn2.value);
   // alert(phoneBn2.value);

    phoneFn2.value =p;
    phoneBn2.value =p2;
}

//4.함수 확장을 모르겠습니다 ㅠ
function boxClicked( obj) {
   //alert("hi");
//------------------------------------------------------------------------------------------

   let labelInput = obj.previousSibling;
   //alert(labelInput.value);
   let labelbox = obj.parentNode;
  // alert(labelbox);

  
  //초기화
   let boxs= document.querySelectorAll('.box');   //배열로 옴
  // alert(boxs.length);
   //let list =box.length.classList;
   for(let i=0; i< boxs.length;i++){
        let item = boxs[i].classList.length;
        NUMS= 2;
        //alert(item);
        if(item >= NUMS ){
            boxs[i].classList.remove('checked-on'); 
            //지워짐 
        }
   }
   
   labelbox.classList.add('checked-on');
    } 

 /*
window.addEventListener('scroll',function(){
    console.log( window.scrollY );  //대충 1200px 정도
   
   if( this.window.scrollY >=500)
   window.scrollTo(0,1200);     //  0
      // window.scrollTo(1200);

});
*/


//5.
function dataSet(){
    //alert("hi");

    
    /*
    //상단에 fixed 메뉴영역이 있다면, 메뉴때문에 메뉴의 높이만큼 스크롤이 가려질 수 있다.
    var menuHeight = document.querySelector(".menu").offsetHeight; // 메뉴의 높이
    var divTop = document.querySelector("#div_id").offsetTop; // 스크롤 위치
    
    //메뉴의 높이만큼 빼서 스크롤을 메뉴 높이만큼 올라가게 해준다.
    window.scrollTop({top:divTop - menuHeight, behavior:'smooth'});

    
    */
    
    //let odName = document.querySelector(".pay-orderCustomer .nemaInput:first-child");
    //alert(odName);
    //alert(odName.value);
    let emailFn = document.querySelector(".email-front");
    //let emailBn = document.querySelector(".email-back");
    let phone = document.querySelector(".pay-orderCustomer .phone-Bn");
    let phone2 = document.querySelector(".pay-deliveryInfo .phone-Bn");
    //let odName2 = document.querySelector(".pay-orderCustomer .nemaInput:");
    let odNames = document.querySelectorAll('.nemaInput');  //배열
    //alert(odNames[1].value);
    let deliInput = document.querySelectorAll(".deliInput");
    let addressBtn = document.querySelector(".address-btn");

    let selectR = document.querySelector(".payType-list input[type='radio']");
    //alert(selectR.checked);

    if(odNames[0].value == ""){
        alert("이름 입력하셈");
        odNames[0].focus();
    }else if(emailFn.value ==""){
        alert("이메일 입력하셈");
        emailFn.focus();
    }else if(phone.value ==""){
        alert("폰번호 입력하셈");
        phone.focus();
    }else if(odNames[1].value ==""){
        alert("보내는분 입력하셈");
        odNames[1].focus();
    }else if(odNames[2].value ==""){
        alert("받는분 입력하셈");
        odNames[2].focus();
    }else if(phone2.value ==""){
        alert("받는분 핸드폰번호입력하셈");
        phone2.focus();
    }else if(deliInput[0].value ==""){
        alert("주소를 입력해주세요");
        addressBtn.focus();
    }else if(deliInput[1].value ==""){
        alert("상세 주소를 입력해주세요");
        deliInput[1].focus();
    }else if(selectR.checked == false){
        alert("결제수단을 선택해주세요");
        window.scrollTo(0,1200);   
    }else{
        alert("결제가 완료되었습니다.");
        //서드밋하기 form 넣어서
    }

}




//6. 총 건수 자동 입력
let productCnt = document.querySelector(".product-cnt>span");
let productUl = document.querySelector(".productInfo");

productCnt.innerHTML =  productUl.childElementCount;


//7


function onlyNum(apple){
    apple.value = apple.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');

}


//8.API

function sample6_execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 각 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var addr = ''; // 주소 변수
            var extraAddr = ''; // 참고항목 변수

            //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }

            // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
            if(data.userSelectedType === 'R'){
                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraAddr += data.bname;
                }
                // 건물명이 있고, 공동주택일 경우 추가한다.
                if(data.buildingName !== '' && data.apartment === 'Y'){
                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                if(extraAddr !== ''){
                    extraAddr = ' (' + extraAddr + ')';
                }
                // 조합된 참고항목을 해당 필드에 넣는다.
                //document.getElementById("sample6_extraAddress").value = extraAddr;
            
            } else {
                document.getElementById("sample6_extraAddress").value = '';
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('sample6_postcode').value = data.zonecode;
            document.getElementById("sample6_address").value = addr;
            // 커서를 상세주소 필드로 이동한다.
            document.getElementById("sample6_detailAddress").focus();
        }
    }).open();
}
