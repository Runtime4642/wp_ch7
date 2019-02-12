var TabSelect ={
	init : function(){
		
		//탭id 입력
		this.insertTabId();
		
		//클릭이벤트 등록
		$('#tab li').click(this.changeMenu);
	},
	
	changeMenu: function(){
		var $viewTab = $('#'+$(this).attr("data-vid"));
		//현재 보여지고 있는 tab 찾기
		$('.tab-box p:visible').css("display","none");
		//$('.tab-box p:visible').hide(); 와같다.
		

		//removeClass("selected"); 메소드를 사용해도 가능
		$('.tab-box #tab .selected').attr({
			class:""
		});
		
		//addClass("selected"); 를 사용해도 가능
		$(this).attr({
			class:"selected"
		});
		
		$viewTab.css({
			display:"block",
		});
		//매소드로 부를때는
		//$viewTab.show();
	},
	
	insertTabId:function(){
		var cnt = $('.tab-view').children().length;
		for(var i=0;i<cnt;i++)
		{
			$($('.tab-view').children()[i]).attr("id","view-"+(i+1));
		}
	}
	
	
	/* 강사님 방식
	 * each() -> 아마도 자식요소 개수만큼 반복
	 * .each(function(index){
	 * 		$(this).attr("id","view-"+index);
	 * })
	 * 
	 */
	
	
}
