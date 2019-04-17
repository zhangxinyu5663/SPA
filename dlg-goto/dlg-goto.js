/* exported $dlgGoto */
var $dlgGoto=(function(){ //加$表示页面上的UI元素
    //DOM绘制
  var $dlg=$(''
      + '<div class="notepad-goto-dlg">'
        + '<div class="dialogbox">'
          + '<div class="titlebar">'
            + '<p class="title">转到指定行</p>'
            + '<span class="btn-close">×</span>'
          + '</div>'
          + '<div class="main">'
          + '<label>行号(L):</label><br>'
          + '<input type="text" class="line-num" autofocus><br>'
          + '<input type="button" value="转到" class="btn-goto">'
          + '<input type="button" value="取消" class="btn-cancel">'
          + '</div>'
        + '</div>'
      + '</div>');
  var $btnClose=$dlg.find('.btn-close'),
      $btnCancel=$dlg.find('.btn-cancel'),
      $btnGoto=$dlg.find('.btn-goto'),
      $textLineNum=$dlg.find('.line-num'),
      $titleBar=$dlg.find('.titlebar');
  var cfg={
    curLine:1,
    totalLines:1,
    gotoHandler:null
  };

  function validation(){
    var num=Number($textLineNum.val());
    if(num===0 || num>cfg.totalLines){
      alert('行数超过了总行数');
      return false;
    }
    return true;
  }
  function destroy(){ $dlg.remove(); }
  
  function gotoHandler(){
    if(!validation()) return;
    cfg.gotoHandler($textLineNum.val());
    destroy();
  }

  function filterKey(e){
    if(!/[0-9]/.test(e.key)){
      e.preventDefault();
      alert('不能输入数字意外的非法字符');
    }
  }

  var init=function(conf){
    $.extend(cfg,conf);
    $('body').append($dlg);

    //只有光标在titlebar上时才允许拖拽
    $dlg.find('.dialogbox').draggable({handle:$titleBar});
    $textLineNum.val(cfg.curLine);
    $textLineNum.select();

    //事件绑定
    $btnClose.click(destroy);
    $btnCancel.click(destroy);
    $btnGoto.click(gotoHandler);
    $textLineNum.keypress(filterKey);
  };

  return {init:init};
}());
