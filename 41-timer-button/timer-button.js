/* exported $timerBtn */
//闭包 函数立即执行表达式
/*
var $timerBtn=(function(){
  //定义默认参数
  var cfg={ 
    container:'.main',
    title:'确定',
    time:9,
    enabled:false,
    clickHandler:null
  };
  var init=function(conf){
    $.extend(cfg,conf);
    var n=cfg.time;
    var $container=$(cfg.container);
    var enabled;
    if(cfg.enabled==false){
      enabled='disabled';
    }else{
      enabled='';
    }
    //方式一：模板字符串的方式绘制DOM 优点-代码少
    var DOM='<input type="button" class="timer-button" value="'+cfg.title+'('+n+'s)" '+enabled+'>';
    $container.html(DOM);

    //方式二：
    //var $timerBtn=$('<input type="button" value="同意(6s)" disabled>');
    //$timerBtn.appendTo($container);

    //方式三
    //$container.append($timerBtn);

    var $btnAgree=$container.find('.timer-button');
    
    //$btnAgree.css({
      //'height':'60px',
      //'width':'200px',
      //'font-size':'1.2em'
    //});
    

    var timer=window.setInterval(function(){
      n--;
      if(n==0){
        window.clearInterval(timer);
        $btnAgree.removeAttr('disabled');
        $btnAgree.val(cfg.title);
      }else{
        $btnAgree.val(cfg.title+'('+n+'s)');
      }
    },1000);  
    $btnAgree.click(function(){
      //$btnAgree.trigger('timer-btn-click'); //暴露事件
      cfg.clickHandler();
    });
    //return $btnAgree;
  };
  var remove=function(){
    var $btn=$('.main').find('.timer-button');
    $btn.remove();
  };
  return {'init':init,remove:remove};
}());  
*/

/* global TimerBtn: true */
function TimerBtn(){
  var cfg={ 
    container:'.main',
    title:'确定',
    time:9,
    enabled:false,
    clickHandler:null
  };

  this.init=function(conf){
    $.extend(cfg,conf);
    var n=cfg.time;
    var $container=$(cfg.container);
    var enabled;
    if(cfg.enabled==false){
      enabled='disabled';
    }else{
      enabled='';
    }
    var DOM='<input type="button" class="timer-button" value="'+cfg.title+'('+n+'s)" '+enabled+'>';
    $container.html(DOM);

    var $btnAgree=$container.find('.timer-button');
    
    var timer=window.setInterval(function(){
      n--;
      if(n==0){
        window.clearInterval(timer);
        $btnAgree.removeAttr('disabled');
        $btnAgree.val(cfg.title);
      }else{
        $btnAgree.val(cfg.title+'('+n+'s)');
      }
    },1000);  
    $btnAgree.click(function(){
      cfg.clickHandler();
    });
  };
} 
