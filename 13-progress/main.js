$(function(){
  var $progress=$('progress');
  var n=0;
  var count=0;
  $('#start').click(function(){
    0===n && (n=window.setInterval(function(){
      $progress.attr('value',count++);
    },100));
  });
  $('#stop').click(function(){
    //console.log(n);
    window.clearInterval(n);
    n=0;
  });
  $('#reset').click(function(){
    $progress.attr('value',0);
    count=0;
  });
});
