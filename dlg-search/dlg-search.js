/* exported $dlgSearch  */
var $dlgSearch = (function() {
  var DOM = ''
      + '<div class="notepad-search-dlg">'
        + '<div class="dialogbox">'
          + '<div class="titlebar">'
              + '<p class="title">查找</p>'
              + '<span class="btn-close">✖</span>'
          + '</div>'
          + '<div class="main">'
              + '<span class="spanone">查找内容(N): </span><input class="txt-content" type="text" autofocus><br>'
              + '<span class="spantwo"><input type="checkbox" value="capital-sense">区分大小写(C)</span>'
              + '<fieldset class="search-direction">'
                + '<legend>方向</legend>'
                + '<input type="radio" name="direction" value="up">向上(U)'
                + '<input type="radio" name="direction" value="down" checked>向下(D)'
              + '</fieldset>'
              + '<input class="btn-search btn" type="button" value="查找下一个(F)" disabled>'
              + '<input class="btn-cancel btn" type="button" value="取消">'
          + '</div>'
        + '</div>'
      + '</div>';
  var $dlg = $(DOM);
  var $btnClose = $dlg.find('.btn-close'),
      $btnCancel = $dlg.find('.btn-cancel'),
      $btnSearch = $dlg.find('.btn-search'),
      $txtContent = $dlg.find('.txt-content');

  function destoryDlg() { $dlg.remove();  }

  function verifyContent() {
    if($txtContent.val() !== '') {
      $btnSearch.removeAttr('disabled');               
    } else {
      $btnSearch.attr('disabled', 'disabled');            
    }    
  }

  function init() {
    $dlg.find('.dialogbox').draggable({handle: $dlg.find('.titlebar')});
    /*
    $dlg.find('input[value="up"]').removeAttr('checked');
    $dlg.find('input[value="down"]')[0].checked = true;
    $dlg.find('input[type="checkbox"]').removeAttr('checked');
    $btnSearch.attr('disabled', 'disabled');
    $txtContent.val('');
    */
    $txtContent.focus();                                 
  }

  function show() {
    $('body').append($dlg);
    init();

    $btnClose.click(destoryDlg);
    $btnCancel.click(destoryDlg);
    $txtContent.keyup(verifyContent);
    /*
    $btnSearch.click(function() {
      searchHandler({
        content: $txtContent.val(),
        capitalSense: $('input[type="checkbox"]:checked').val() === 'capital-sense',
        direction: $('input[name="direction"]:checked').val()         
      });                            
    });     
    */
  }
  
  return {show: show};
})();
