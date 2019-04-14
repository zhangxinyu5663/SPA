$(function(){
  var $addBtn=$('#add-password'),
      $getBtn=$('#get-password'),
      array=[];
  $addBtn.click(function(){
    var pwdInput=new PasswordTextbox({
      container:'div.main'
    });
    array.push(pwdInput);
    $getBtn.removeAttr('disabled');
  });
  $getBtn.click(function(){
    array.forEach(function($addBtn){
      alert($addBtn.getPwd());
    });
  });
});
