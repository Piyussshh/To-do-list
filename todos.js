   $('ul').on("click","li" ,function(){
 
 $(this).toggleClass("selected");
 });
//click on x to delete todo
 $('ul').on("click","span",function(event)
 {  
 	$(this).parent().fadeOut(500,function(){
 		$(this).remove();
 	});
 	
    event.stopPropagation();
 });

$("input[type='text']").keypress(function(event) {
   

	if(event.which===13)
	{       //grabbing new todo txt from input
			var todosText =$(this).val(); 

			//create a new li and add ul
			$("ul").append("<li><span><i class='fas fa-trash'></i></span> "+  todosText  +" </li> ");

			$(this).val("");

	}
	
});

$(".fa-plus").click(function(){
 
$("input[type='text']").fadeToggle();

});