//导航条
			window.onload = function()
		{
			var liNodes = document.getElementsByTagName("li");
			for (var i=0; i<liNodes.length; i++)
			{
				liNodes[i].onmouseover = function()
				{
					this.className = "subMenuDisplay";
				}
				liNodes[i].onmouseout = function()
				{
					this.className = "";
				}
			}
			
		
		};
//选项卡
function showPic(which) {
				//1. 获得点击处文字所对应的图片地址
				var source = which.href;	
				//2. 获得图片占位符的<img />标签
				var img = document.getElementsByTagName('img')[1];	
				//3. 修改图片占位符的图片
				img.src = source;   
			};

//滚动
function changeToLeft(){
	var div1=document.getElementById("picScroll");
	div1.scrollLeft+=1;
	var p1=div1.scrollLeft;
	var picScroll1=document.getElementById("picScroll1");
	var width1=picScroll1.offsetWidth;
	if(p1>width1)
	{
		div1.scrollLeft=0;
	}
};
