// 페이지 로드가 완료되었을 대 jQuery 작동
$(document).ready(function () {
    // (모바일)가입하기 버튼
    let signUpBtn = $('#signUpBtn');
    
    // 회원가입 폼
    signup = $('#signup');
    // 로그인 폼
    loginForm = $('#loginForm');
    //첫 페이지 인사말
    introSite = $('#introSite');


    //(모바일)가입하기 버튼 클릭 이벤트
    signUpBtn.click(function () {
        //로그인 폼 숨기기
        loginForm.slideUp();
        //회원가입 폼 보이기
        signup.slideDown();
        //첫 페이지 인사말 숨기기
        introSite.slideUp();
    });

    // (모바일)로그인하기 버튼
    let goToLoginBtn = $('#goToLoginBtn');

    // (모바일)로그인하기 버튼 클릭 이벤트
    goToLoginBtn.click(function () {
        // 로그인 폼 보이기
        loginForm.slideDown();
        // 회원가입 폼 숨기기
        signup.slideUp();
        // 첫 페이지 인사말 보이기
        introSite.slideDown();
      
    });


});
