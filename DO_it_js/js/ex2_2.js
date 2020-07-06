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

//대입 연산자
{
}
