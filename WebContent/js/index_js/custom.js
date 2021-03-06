/*----------------------------------------------------------------------------*/
/*	1. Google Sign in
/*----------------------------------------------------------------------------*/
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var user_id = profile.getId();
    var user_name = profile.getName();
    var user_mail = profile.getEmail();
    var extension = "google";
    location.href='SocialSign.do?user_id='+user_id+'&user_name='+user_name+'&user_mail='+user_mail+'&extension='+extension;
};
/*----------------------------------------------------------------------------*/
/*	2. KaKao Sign in
/*----------------------------------------------------------------------------*/
// 사용할 앱의 JavaScript 키를 설정해 주세요.
Kakao.init('506468032e6b61172905c2687a5f76ee');
function loginWithKakao(){
	// 카카오 로그인 버튼을 생성합니다.
	Kakao.Auth.loginForm({
		success : function(authObj) {
			// 로그인 성공시, API를 호출합니다.
			Kakao.API.request({
				url: '/v2/user/me',
				success: function(res){
					var user_id = encodeURIComponent(JSON.stringify(res.id));
					var user_name = encodeURIComponent(JSON.stringify(res.properties.nickname));
					var user_mail = encodeURIComponent(JSON.stringify(res.kakao_account.email));
					var extension = "kakao";
					location.href='SocialSign.do?user_id='+user_id+'&user_name='+user_name+'&user_mail='+user_mail+'&extension='+extension;
				},
				fail: function(error){
					alert(JSON.stringify(error));
				}
			});
		},
		fail : function(err) {
			alert(JSON.stringify(err));
		},
		persistAccessToken : false
	});
};
