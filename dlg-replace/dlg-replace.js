/* exported $dlgReplace */
var $dlgReplace = (function() {
  var DOM=''
  + '<div class="notepad-replace-dlg">'
    + '<div class="dialogbox">'
      + '<div class="titlebar">'
        + '<p class="title">替换</p>'
        + '<span class="btn-close">×</span>'
      + '</div>'
      + '<div class="main">'
          + '<span class="spanone">查找内容(N):</span>'
          + '<input type="text" class="content" autofocus>'
          + '<span class="spantwo">替换为(P):</span>'
          + '<input type="text" class="r-content">'
          + '<span class="spanthree"><input type="checkbox">区分大小写(C)</span>'
          + '<button class="next-one" disabled>查找下一个(F)</button>'
          + '<button class="replace" disabled>替换(R)</button>'
          + '<button class="all-replace" disabled>全部替换(A)</button>'
          + '<button class="btn-cancel">取消</button>'
      + '</div>'
    + '</div>'
  + '</div>';
  var $dlg=$(DOM);
  var $btnClose=$dlg.find('.btn-close'),
      $btnCancel=$dlg.find('.btn-cancel'),
      $btnSearch=$dlg.find('.next-one'),
      $btnReplace=$dlg.find('.replace'),
      $btnAllReplace=$dlg.find('.all-replace'),
      $content=$dlg.find('.content');

  function destroyDlg(){
    $dlg.remove();
  }
  
  function verifyContent(){
    if($content.val()!==''){
      $btnSearch.removeAttr('disabled');
      $btnReplace.removeAttr('disabled');
      $btnAllReplace.removeAttr('disabled');
    }else{
      $btnSearch.attr('disabled','disabled');
      $btnReplace.attr('disabled','disabled');
      $btnAllReplace.attr('disabled','disabled');
    }
  }
  function show() {
    $('body').append($dlg);
    $dlg.find('.dialogbox').draggable({handle:$dlg.find('.titlebar')});
    $content.focus();
    $btnClose.click(destroyDlg);
    $btnCancel.click(destroyDlg);
    $content.keyup(verifyContent);
  }

  return {show: show};
})();


