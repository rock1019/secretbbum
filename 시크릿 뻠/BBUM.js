
    var testV = 1;
    var pass1 = prompt('암호를 입력하십시오','암호를 입력하세요'); // 초기시 암호 물어보는 멘트
    while (testV < 3) {
    if (!pass1) 
    history.go(-1);
    if (pass1.toLowerCase() == "1234") { // 암호지정
    alert('어서 오세요! 확인을 누르면 지정하신 페이지로 이동합니다.'); // 암호가 맞았을때 나오는 멘트
    // window.open('http://'); // 이동할 웹페이지 지정 - 새창으로 뜰때
    location.href ='http://www.webmadang.net'; // 이동할 웹페이지 지정 - 현재창에서 이동
    
    
    break;
    } 
    testV+=1;
    var pass1 = 
    prompt('암호를 확인 하시고 다시 입력하세요!.','암호 확인'); // 암호가 틀렸을때 멘트
    }
    if (pass1.toLowerCase()!="password" & testV ==3) 
    history.go(-1);
    return " ";