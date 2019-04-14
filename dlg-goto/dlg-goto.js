/* exported $dlgGoto */
var $dlgGoto=(function(){ //加$表示页面上的UI元素
  var init=function(){
    //DOM绘制
    var DOM=''
        + '<div class="notepad-goto-dlg">'
          + '<div class="dialogbox">'
            + '<div class="titlebar">'
              + '<p class="title">转到指定行</p>'
              + '<span class="btn-close">×</span>'
            + '</div>'
            + '<div class="main">'
            + '<label>行号(L):</label><br>'
            + '<input type="text" class="line-num"><br>'
            + '<input type="button" value="转到" class="btn-goto">'
            + '<input type="button" value="取消" class="btn-cancel">'
            + '</div>'
          + '</div>'
        + '</div>';
    var $dlg=$(DOM);
    var $btnClose=$dlg.find('.btn-close'),
        $btnCancel=$dlg.find('.btn-cancel');
    $('body').append($dlg);
    //只有光标在titlebar上时才允许拖拽
    $dlg.find('.dialogbox').draggable({handle:$dlg.find('.titlebar')});

    //事件绑定
    $btnClose.click(function(){
      $dlg.remove();
    });
    $btnCancel.click(function(){
      $dlg.remove();
    });
  };
  return {init:init};
}());
