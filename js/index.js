$(function() {
	var c = new Coder("style-text");
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'> </div>");
	c.load("<div class='bef_comment writecode'> *hi,我的名字叫王志贤，是长沙商贸旅游职业技术学院的一名学生</div>");
	c.load("<div class='bef_comment writecode'> *我的主要工作是学习</div>",2000);
	c.load("<div class='bef_comment writecode'> *让我们来点实际的，看看我能做些什么</div>");
	c.load("<div class='bef_comment writecode'> */</div></p>");
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'> *让我们开始吧,我们先来让所有的变化都以动画的效果来显示</div>");
	c.load("<div class='bef_comment writecode'> */</div></p>");
	c.load("<p><div class='code writecode'><span class='bef_selector'>*</span> {</div>");
	c.load("<div class='code writecode'> <span class='bef_key'>-webkit-transition</span>: <span class='bef_value'> all 1s</span>;</div>");
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'> *看起来似乎没什么变化，不要着急，接下来你就会看到</div>");
	c.load("<div class='bef_comment writecode'> *你是不是厌倦了白底黑字</div>");
	c.load("<div class='bef_comment writecode'> *那么让我们来做一些改变</div>");
	c.load("<div class='bef_comment writecode'> */</div></p>");
	c.load("<p><div class='code writecode'><span class='bef_selector'>html</span> {</div>");
	c.load("<div class='code writecode'> <span class='bef_key'>background</span>: <span class='bef_value'>rgb(63, 82, 99)</span>;</div>");
	c.setClass("html", [{
		"name": "background",
		"val": "rgb(63, 82, 99)"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'> *稍等，我们来改变一下字体的颜色</div>");
	c.load("<div class='bef_comment writecode'> */</div></p>");
	c.load("<p><div class='code writecode'><span class='bef_selector'>pre,a</span> {</div>");
	c.load("<div class='code writecode'> <span class='bef_key'>color</span>: <span class='bef_value'>white</span>;</div>");
	c.setClass("pre,a", [{
		"name": "color",
		"val": "white"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'> *现在看起来好多了</div>");
	c.load("<div class='bef_comment writecode'> *在这整个页面里写代码让人有些不舒服</div>");
	c.load("<div class='bef_comment writecode'> *我准备创建一个区域来更好的显示我的代码</div>");
	c.load("<div class='bef_comment writecode'> */</div></p>");
	c.load("<p><div class='code writecode'><span class='bef_selector'>pre</span><span class='bef_key'>:not(:empty)</span> {</div>");
	c.load("<div class='code writecode'> <span class='bef_key'>overflow</span>: <span class='bef_value'>hidden</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "overflow",
		"val": "scroll"
	}]);
	c.load("<div class='code writecode'> <span class='bef_key'>background</span>: <span class='bef_value'>rgb(48, 48, 48)</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "background",
		"val": "rgb(48, 48, 48)"
	}]);
	c.load("<div class='code writecode'> <span class='bef_key'>border</span>: <span class='bef_value'>1px solid #ccc</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "border",
		"val": "1px solid #ccc"
	}]);
	c.load("<div class='code writecode'> <span class='bef_key'>max-height</span>: <span class='bef_value'>44.6%</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "max-height",
		"val": "44.6%"
	}]);
	c.load("<div class='code writecode'> <span class='bef_key'>width</span>: <span class='bef_value'>49%</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "width",
		"val": "49%"
	}]);
	$('#pre:not(:empty)').addClass("toarea");
	c.load("<div class='code writecode'> <span class='bef_key'>font-size</span>: <span class='bef_value'>14<span class='bef_px'>px</span></span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "font-size",
		"val": "14px"
	}]);
	c.load("<div class='code writecode'> <span class='bef_key'>font-family</span>: <span class='bef_value'>monospace</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "font-family",
		"val": "monospace"
	}]);
	c.load("<div class='code writecode'> <span class='bef_key'>padding</span>: <span class='bef_value'>10<span class='bef_px'>px</span> 10<span class='bef_px'>px</span> 20<span class='bef_px'>px</span></span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "padding",
		"val": "10px 10px 20px"
	}]);
	c.load("<div class='code writecode'> <span class='bef_key'>box-shadow</span>: <span class='bef_value'>-4<span class='bef_px'>px</span> 4<span class='bef_px'>px</span> 2<span class='bef_px'>px</span> 0 rgba(0,0,0,0.3)</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "box-shadow",
		"val": "-4px 4px 2px 0 rgba(0,0,0,0.3)"
	}]);
	c.load("<div class='code writecode'> <span class='bef_key'>white-space</span>: <span class='bef_value'>pre-wrap</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "white-space",
		"val": "pre-wrap"
	}]);
	c.load("<div class='code writecode'> <span class='bef_key'>outline</span>: <span class='bef_value'>0</span>;</div>");
	c.setClass("pre:not(:empty)", [{
		"name": "outline",
		"val": "0"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'> *OK，现在让我们来换一下位置</div>");
	c.load("<div class='bef_comment writecode'> *让我们准备来再做一些改变</div>");
	c.load("<div class='bef_comment writecode'> */</div></p>");
	c.load("<p><div class='code writecode'><span class='bef_selector'>#style-text</span> {</div>");
  	c.load("<div class='code writecode'> <span class='bef_key'>-webkit-transform</span>: <span class='bef_value'>translateX(95%)</span>;</div>");
  	c.setClass("#style-text", [{
		"name": "-webkit-transform",
		"val": "translateX(95%)"
	}]);
  	c.load("<div class='code writecode'> <span class='bef_key'>position</span>: <span class='bef_value'>absolute</span>;</div>");
  	c.setClass("#style-text", [{
		"name": "position",
		"val": "absolute"
	}]);
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='bef_comment writecode'>/**</div>");
	c.load("<div class='bef_comment writecode'> *现在看起来好多了，但是所有的文字颜色都是白色的</div>");
	c.load("<div class='bef_comment writecode'> *让我们来让他的可读性更好一点吧</div>");
	c.load("<div class='bef_comment writecode'> */</div></p>");
	c.load("<p><div class='code writecode'><span class='bef_selector'>.comment</span> { <span class='bef_key'>color</span>: <span class='bef_value'>#857F6B</span>; <span class='bef_key'>font-style</span>: <span class='bef_value'>italic</span>; }</div>");
	c.addClass(".bef_comment","comment");
	c.load("<div class='code writecode'><span class='bef_selector'>.selector</span> { <span class='bef_key'>color</span>: <span class='bef_value'>#E69F0F</span>; }</div>");
	c.addClass(".bef_selector","selector");
	c.load("<div class='code writecode'><span class='selector'>.selector .key</span> { <span class='bef_key'>color</span>: <span class='bef_value'>#64D5EA</span>; }</div>");
	c.addClass(".bef_key","key");
	c.load("<div class='code writecode'><span class='selector'>.key</span> { <span class='key'>color</span>: <span class='bef_value'>#64D5EA</span>; }</div>");
	c.load("<div class='code writecode'><span class='selector'>.value</span> { <span class='key'>color</span>: <span class='bef_value'>#BE84F2</span>; }</div>");
	c.addClass(".bef_value","value");
	c.load("<div class='code writecode'><span class='selector'>.value.px</span> { <span class='key'>color</span>: <span class='value'>#F92772</span>; }</div></p>");
	c.addClass(".value .bef_px","px");
	c.load("<p><div class='comment writecode'>/**</div>");
	c.load("<div class='comment writecode'> *现在我们差不多都准备好了</div>");
	c.load("<div class='comment writecode'> *让我们最后再来做一些3D旋转</div>");
	c.load("<div class='comment writecode'> */</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#content</span> {</div>");
  	c.load("<div class='code writecode'> <span class='key'>-webkit-perspective</span>: <span class='value'>1000<span class='px'>px</span></span>;</div>");
  	c.setClass("#content", [{
		"name": "-webkit-perspective",
		"val": "1000px"
	}]);

  	c.load("<div class='code writecode'>}</div></p>");
  	c.load("<p><div class='code writecode'><span class='selector'>#style-text</span> {</div>");
  	c.load("<div class='code writecode'> <span class='key'>-webkit-transform</span>: <span class='value'>translateX(98.5%) rotateY(-10deg)</span>;</div>");
  	c.setClass("#style-text", [{
		"name": "-webkit-transform",
		"val": "translateX(98.5%) rotateY(-10deg)"
	}]);
	c.load("<div class='code writecode'> <span class='key'>-webkit-transform-origin</span>: <span class='value'>right</span>;</div>");
  	c.setClass("#style-text", [{
		"name": "-webkit-transform-origin",
		"val": "right"
	}]);
	c.load("<div class='code writecode'> <span class='key'>max-height</span>: <span class='value'>94.5%</span>;</div>");
  	c.setClass("#style-text", [{
		"name": "max-height",
		"val": "94.5%"
	}]);

  	c.load("<div class='code writecode'>}</div></p>");
  	c.load("<p><div class='comment writecode'>/**</div>");
	c.load("<div class='comment writecode'> *现在我们差不多可以开始写我的简历了</div>");
	c.load("<div class='comment writecode'> *我相信你来这不只是为了看这些漂亮的颜色</div>");
	c.load("<div class='comment writecode'> */</div></p>");
	c.addClass("#work-text","pre_work-text");
	c.load("<p><div class='code writecode'><span class='selector'>pre</span><span class='key'>:not(#style-text)</span> { </div>");
	c.load("<div class='code writecode'> <span class='key'>-webkit-transform</span>: <span class='value'>rotateY(10deg)</span>;</div>");
	c.load("<div class='code writecode'> <span class='key'>-webkit-transform-origin</span>: <span class='value'>left</span>;</div>");
	c.load("<div class='code writecode'>}</div></p>");
	var r = new Coder("work-text");
	r.load("<div id='md'></div>");
	var w = new Coder("md");
    c.setClass("#work-text", [{
        "name": "overflow",
        "val": "auto"
    }]);
	w.load("<h1 class='writecode'>简历</h1>");
    w.load("<div style='width: 74px; height: 74px; float:left; border-radius: 50%; border: 3px solid #eee; overflow: hidden'><img src='img/1.jpg' width=\"80\" height=\"80\"/></div>");
    // c.setClass("#ava", [{
    //     "name": "border-bottom",
    //     "val": "1px solid #ccc"
    // }]);
	w.load("<p><div class='writecode'>姓名：王志贤</div>");
	//w.load("<div class='writecode'>大专---移动互联网</div>");
	w.load("<div class='writecode'>职业：学生</div></p>");
	w.load("<h1 class='writecode'>教育背景</h1>");
	w.load("<ul>");
	w.load("<li class='writecode'>学校:长沙商贸旅游职业技术学院 专业：移动互联网 </li>");
   // w.load("<li class='writecode'>学校:湖南网络工程学院 </li>");
	//w.load("<li class='writecode'>blog:<a href='http://blog.youlunshidai.com' target='_blank'>blog.youlunshidai.com</a></li>");
	w.load("<li class='writecode'>主要课程：<div>java，Android，HTML，</div><div>sql server数据库，Oracle，</div><div>jsp,Html5,js,jquery,</div><div>SSH框架</div></li>");
	w.load("</ul>");
	w.load("<h1 class='writecode'>技能</h1>");
	w.load("<ul>");
	//w.load("<li class='writecode'>精通Lotus/Domino开发技术，有过7年文档型数据库开发管理经验</li>");
	w.load("<li class='writecode'>Java</li>");
	w.load("<li class='writecode'>Android</li>");
	w.load("<li class='writecode'>HTML</li>");
	w.load("<li class='writecode'>HTML5</li>");
	//w.load("<li class='writecode'>熟练与各平台和硬件的技术对接（如: 微信接口，三方支付，系统整合）</li>");
	w.load("<li class='writecode'>SQL Server</li>");
	w.load("<li class='writecode'>Oracle</li>");
	//w.load("<li class='writecode'>熟练windows server,linux服务器部署和管理，及常见问题的处理</li>");
    	w.load("<li class='writecode'>js,jquery</li>");
	w.load("<li class='writecode'>SSH框架</li>");
	w.load("<li class='writecode'>SSM框架</li>");
	w.load("<li class='writecode'>BootStrap</li>");
	w.load("<li class='writecode'>Redis</li>");
	w.load("<li class='writecode'>Maven</li>");
	w.load("</ul>");
    w.load("<h1 class='writecode'>自我介绍</h1>");
    // w.load("<span class='writecode'>喜欢跑步，羽毛球，徒手健身\n" +
    //     "对计算机有着狂热的喜爱，虽掌握软件众多，但对编程情有独钟\n" +
    //     "每一次解决问题都有一种成就感，这就是让我沉迷于代码世界的无限动力\n" +
    //     "喜欢开发自己的小型产品，追求技术上的满足感\n" +
    //     "有良好的编程习惯，以及程序错误控制和解决能力\n" +
    //     "用心工作，用心生活，我可能不是最好的，最合适的，我觉我是最有潜力的</span>");
    w.load("<ul>");

     w.load("<li class='writecode'>喜欢跑步，羽毛球，健身</li>");
     w.load("<li class='writecode'>对计算机有着狂热的喜爱，虽掌握软件众多，但对编程情有独钟</li>");
     w.load("<li class='writecode'>每一次解决问题都有一种成就感，这就是让我沉迷于代码世界的无限动力</li>");
     w.load("<li class='writecode'>喜欢开发自己的小型产品，追求技术上的满足感</li>");
     w.load("<li class='writecode'>有良好的编程习惯，以及程序错误控制和解决能力</li>");
     w.load("<li class='writecode'>能独立阅读官方开发文档及网上查阅资料解决问题的能力</li>");
     w.load("</ul>");


	w.load("<h1 class='writecode'>项目</h1>");
	w.load("<ul>");
	w.load("<li class='writecode'>项目一：电影网站</li>");
    	w.load("<li class='writecode'>项目二：图书管理系统</li>");
	w.load("<li class='writecode'>项目三：人力资源管理APP</li>");
	w.load("<li class='writecode'>项目五：仿网易云音乐播放器APP</li>");
	w.load("<li class='writecode'>项目六：多功能APP</li>");
	w.load("<li class='writecode'>项目七：天气APP</li>");
	w.load("<li class='writecode'>项目八：小说APP</li>");
	w.load("<li class='writecode'>项目九：图书售卖网站</li>");
	w.load("<li class='writecode'>项目十：旅游网站</li>");
	w.load("</ul>");
	c.load("<p><div class='comment writecode'>/**</div>");
	c.load("<div class='comment writecode'> *左面的简历看起来不是太令人满意，让我们先给他来点动态渲染</div>");
	c.load("<div class='comment writecode'> */</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#work-text</span> { </div>");
	c.load("<div class='code writecode'> <span class='key'>-webkit-transform</span>: <span class='value'>rotateX(0deg) rotateY(190deg) rotateZ(180deg)</span>;</div>");
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#work-text #md</span> { </div>");
	c.load("<div class='code writecode'> <span class='key'>-webkit-transform</span>: <span class='value'>rotateY(190deg) rotateZ(180deg)</span>;</div>");
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='comment writecode'>/**</div>");
	c.load("<div class='comment writecode'> *好了，让我们准备</div>");
	c.load("<div class='comment writecode'> *</div>");
	c.load("<div class='comment writecode'> *3....</div>");
	c.load("<div class='comment writecode'> *2....</div>");
	c.load("<div class='comment writecode'> *1....</div>");
	c.load("<div class='comment writecode'> *</div>");
	c.load("<div class='comment writecode'> *.</div>");
	c.load("<div class='comment writecode'> *</div>");
	c.load("<div class='comment writecode'> *差不多了，让我们的简历动起来！</div>");
	c.load("<div class='comment writecode'> */</div></p>");
	c.setClass("#work-text", [{
		"name": "-webkit-transform",
		"val": "rotateX(0deg) rotateY(190deg) rotateZ(180deg)"
	}]);
	c.setClass("#work-text #md", [{
		"name": "-webkit-transform",
		"val": "rotateY(190deg) rotateZ(180deg)"
	}]);
	c.load("<p><div class='comment writecode'>/**</div>");
	c.load("<div class='comment writecode'> *对于文本，我们可以再做一点微调</div>");
	c.load("<div class='comment writecode'> */</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#md</span> { </div>");
	c.load("<div class='code writecode'> <span class='key'>font-family</span>: <span class='value'>'Helvetica Neue', Helvetica, sans-serif</span>;</div>");
	c.setClass("#md", [{
		"name": "font-family",
		"val": "'Helvetica Neue', Helvetica, sans-serif"
	}]);

	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#md h1</span> { </div>");
	c.load("<div class='code writecode'> <span class='key'>border-bottom</span>: <span class='value'>1px solid #ccc</span>;</div>");
	c.setClass("#md h1", [{
		"name": "border-bottom",
		"val": "1px solid #ccc"
	}]);
    c.load("<div class='code writecode'> <span class='key'>color</span>: <span class='value'>blue</span>;</div>");
    c.setClass("#md h1", [{
        "name": "color",
        "val": "blue"
    }]);
    c.load("<div class='code writecode'> <span class='key'>padding-bottom</span>: <span class='value'>5px</span>;</div>");
    c.setClass("#md h1", [{
        "name": "padding-bottom",
        "val": "5px"
    }]);
    c.load("<p><div class='code writecode'><span class='selector'>#md :not(h1)</span> { </div>");
    c.load("<div class='code writecode'> <span class='key'>color</span>: <span class='value'>black</span>;</div>");
    c.setClass("#md :not(h1)", [{
        "name": "color",
        "val": "black"
    }]);
    c.load("<div class='code writecode'> <span class='key'>font-weight</span>: <span class='value'>900</span>;</div>");
    c.setClass("#md :not(h1)", [{
        "name": "font-weight",
        "val": "900"
    }]);

	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#md li</span> { </div>");
	c.load("<div class='code writecode'> <span class='key'>margin</span>: <span class='value'>5<span class='px'>px</span> 0</span>;</div>");
	c.setClass("#md li", [{
		"name": "margin",
		"val": "5px 0"
	}]);
    
	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='code writecode'><span class='selector'>#md h1,#md ul</span> { </div>");
	c.load("<div class='code writecode'> <span class='key'>margin</span>: <span class='value'>0</span>;</div>");
	c.setClass("#md h1,#md ul", [{
		"name": "margin",
		"val": "0"
	}]);

    c.load("<div class='comment writecode'> *再加个背景图片会更好</div>");
    c.load("<p><div class='code writecode'><span class='selector'>#md</span> { </div>");
    c.load("<div class='code writecode'> <span class='key'>background</span>: <span class='value'>url(img/4.jpg)  no-repeat</span>;</div>");
    c.setClass("#md", [{
        "name": "background",
        "val": "url(img/4.jpg)  no-repeat"
    }]);
    c.load("<div class='comment writecode'> 要让他铺满整个背景</div>");
    c.load("<div class='code writecode'> <span class='key'>background-size</span>: <span class='value'>cover</span>;</div>");
    c.setClass("#md", [{
        "name": "background-size",
        "val": "cover"
    }]);

	c.load("<div class='code writecode'>}</div></p>");
	c.load("<p><div class='comment writecode'>/**</div>");
	c.load("<div class='comment writecode'> *这样基本上就差不多了</div>");
	c.load("<div class='comment writecode'> *");
	c.load("<div class='comment writecode'> *如果你想和我联系</div>");
	c.load("<div class='comment writecode'> *QQ/微信:2259654581</div>");
	c.load("<div class='comment writecode'> *mobile:17674054625</div>");
	c.load("<div class='comment writecode'> *最后非常感谢您愿意花1分钟看完我的简历！</div>");
	c.load("<div class='comment writecode'> */</div></p>");

});

var m = 0;

var Coder = function(dom) {
	this._dom = dom;
};

Coder.prototype = {
	constructor: Coder,
	load: function(code, second) {
		var dom = this._dom;
		var o = this;
		var _second = second ? second : 366;
		_second = m + _second;
		setTimeout(function() {
			$('#' + dom).scrollTop( $('#' + dom)[0].scrollHeight );
			$("#" + dom).append(code);
		}, _second);
		m = _second;
	},
	setClass: function(dom, styles,second) {
		var _second = second ? second : 0;
		_second = m + _second;
		for (var i in styles) {
			setTimeout(function() {
				$(dom).css(styles[i].name, styles[i].val);
			}, _second);
		}
		m = _second;
	},
	addClass:function(dom,className){
		var second = m;
		setTimeout(function() {
			$(dom).addClass(className);
		}, second);
	}
}
