function check_input(){ /* 아이디 비밀번호 확인 */
  if (!document.login_form.username.value){
      alert("아이디를 입력하세요");
      document.login_form.username.focus();
      return;
}
  if (!document.login_form.password.value){
      alert("비밀번호를 입력하세요");
      document.login_form.password.focus();
      return;
}
  if (document.login_form.m_id.value != id || document.login_form.password.value != pw){
    alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    history.go(0);
    return;
}
doc
  document.login_form.submit();

}