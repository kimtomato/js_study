//산술 연산자 연습
{
  var num1 = 1;
  var num2 = 5;

  var result;
  //더하기 +
  result = num1 + num2;
  document.write(result, "<br>");
  //빼기 -
  result = num1 - num2;
  document.write(result, "<br>");
  //곱하기 *
  result = num1 * num2;
  document.write(result, "<br>");

  //나누기 /
  result = num1 / num2;
  document.write(result, "<br>");

  //나머지 %
  result = num1 % num2;
  document.write(result, "<br>");
}

//문자 결합 연산자  피연산자가 문자형 데이터
{
  /***더하기에 피연산자로 문자형 데이터가 한 개라도 포함되어
 있으면 다른 피연산자의 데이터는 자동으로 문자형 데이터로 형변환, 하나의 문자 데이터 반환
*/

  var a = "김은지";
  var b = 201801653;
  var c = "1234";
  var result;

  result = a + b;
  document.write(result, "<br>");
  //문자형+숫자형 = 문자형
  result = b + c;
  document.write(result, "<br>");
}

//대입 연산자 : 연산된 데이터를 변수에 저장할때 사용
{
  var n3 = 20;
  var n4 = 2;

  //n3= n3+n4
  n3 += n4;
  document.write(n3, "<br>"); // n3 = 22

  n3 -= n4;
  document.write(n3, "<br>"); //n3 = 20

  n3 *= n4;
  document.write(n3, "<br>"); //n3 = 40

  n3 %= n4;
  document.write(n3, "<br>"); // n3= 0
}

//증감 연산자 : 숫자형 데이터를 1씩 증가 ++, 1씩 감소 -- *위치에 따라 결과값이 달라짐 *
{
  var n5 = 3;
  var n6 = 22;
  var result_4;

  n5--;
  document.write(n5, "<br>"); // 2

  n5++;
  document.write(n5, "<br>"); // 3

  result_4 = n6++;
  document.write(result_4, "<br>"); //22   n6의 값인 22가 먼저 result변수에 저장된 후 n6값은 23
  document.write(n6, "<br>"); //23
}
//비교 연산자 : 두 데이터를 비교, 연산결과는 true or false  (>,<,>=,<=,==,!=, ===, !==)
// ==과 !=는 숫자비교시 자료형은 상관 x, ===과 !== 는 숫자와 자료형이 일치해야한다
{
  var x1 = 3;
  var y1 = 8;
  var x2 = "3";
  var y2 = 8;
  var result_5;

  result_5 = x1 > y1; //false
  document.write(result_5, "<br>");

  result_5 = x1 == x2; // true
  document.write(result_5, "<br>");

  result_5 = x1 === x2; //false
  document.write(result_5, "<br>");
}
//논리연산자 : 피연산자가 논리형데이터 (||,&&,!)
{
  var n = 20;
  var m = 30;
  var q = 10;
  var p = 40;
  var result_6;

  result_6 = n > m || m >= p || q > p; //  false|| false || false => false or연산에서는 트루가 하나라도 존재하면 결과는 true
  document.write(result_6, "<br>");

  result_6 = n <= m && m > p && m > q; // &&(and) 연산에서는 피연산자에 false가 하나라도 존재하면 전체결과는 false
  document.write(result_6); //false
}
/*연산자 우선 순위 
() > 단항연산자 > 산술연산자 > 비교 연산자> 논리연산자> 대입연산자 */

//삼항 조건 연산자 : 조건식의 결과에 따라 실행내용이 달라짐
//기본형 : 조건식? js코드1 : js코드2  -> 조건식이 true면 코드1 실행,false면 코드2 실행
{
  var e = 12;
  var r = 2;
  var result_7 = e > r ? "javascript" : "wow"; //조건식이 true이므로 "javascript" 반환
  document.write(result_7);
}
