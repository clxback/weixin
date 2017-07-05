


$(function(){
	
	
	
//	/*  控制顶层弹出菜单层 : start  */
//	/* 弹出层  和 弹出小三角   初始应该为 隐藏  */
	$("#jia-menu").hide();

	$('#add').click(function(){
		$("#jia-menu").toggle(200);
	})
	/*  控制顶层弹出菜单层 : end  */
	
	// 点击弹出层本身   也会消失
	$("#jia-menu").click(function(){
		$("#jia-menu ").hide();
	});
	
	
	
})
