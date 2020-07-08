//적정 체중구하기
//적정 체중 계산법 : 적정체중 = (본인 신장-100)*0.9
//prompt("질문","응답")--응답은 문자형 데이터로 반환
var name = prompt("이름을 말해주세요!", "");
var height = prompt("키를 말해주세여", "0");
var weight = prompt("몸무게를 말해주세요", "0");

var good_w = (height - 100) * 0.9;
var result = weight >= good_w - 5 && weight <= good_w + 5; //오차범위 5
result = result ? " 적정체중입니당 " : "적정 체중이 아닙니다";

document.write(name + "님은" + result);
