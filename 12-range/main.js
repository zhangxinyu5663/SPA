$(function(){
  var $range=$('input[type="range"]');
  var $txtAge=$('#age');
  $range.change(function(){
    //如果是获取表单控件的值 用val()
    //如果是获取文本标签的值 用html()
    $txtAge.html($range.val());
  });
});
