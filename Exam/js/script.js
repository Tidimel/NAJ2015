var todos = [];
var index = 0;
var unactive = [];

function add(id,text){
	$("#todos").append('<div class="todo" data-id="'+id+'"><input id="check'+id+'" type="checkbox" name="do[]"/><label for="check'+id+'">'+text+'</label><span class="pull-right delete label label-danger">Delete</span><span class="pull-right edit label label-warning">Edit</span><input class="change" type="text" name="change'+id+'" value="'+text+'"/></div>');
	todos.push(text);
	index++;
	refreshinfo();

};

function edit(id,text){
	todos[id] = text;
	
	
}

function refreshinfo()
{
	var unac = unactive.length;
	$("#removeall").html("Clear "+unac+" items");
	var active = todos.length - unactive.length;
	$("#itemsleft").html(active);

}


function removeall(){
	for (var i in unactive){

		var id = unactive[i];
		var text = $('.todo[data-id="'+id+'"').find('label').text();
		var index = todos.indexOf(text);
		todos.splice(index,1);
		$(".todo[data-id='"+id+"']").remove();
		
		
	}
	unactive = [];
	refreshinfo();
}

$("#addtext").keypress(function(e) {
    if(e.which == 13) {
        var text = $(this).val();
		add(index,text);
	
    }
});


$("#todos").on('keypress','.change',function(e) {
    if(e.which == 13) {
	
        var text = $(this).val();
		var id = $(this).parent().data('id');
		edit(id,text);
		$(this).parent().find('label').text(text);
		$(this).parent().removeClass('showed');
    }
});

$("#todos").on('click','input[type="checkbox"]',function(e) {
	
	var id = $(this).parent().data('id');
	if ($(this).prop('checked')==true){
		unactive.push(id);
		$(this).parent().addClass("deleted");
	} else {
		var text = todos[id];
		var index = unactive.indexOf(text);
		unactive.splice(index, 1);
		$(this).parent().removeClass("deleted");
	}
	refreshinfo();


	
});


$("#todos").on('click','.edit',function(e) {
	
	
	var id = $(this).parent().data('id');
	if (!$(this).parent().hasClass('showed')){
		$(this).parent().addClass('showed');
	} else {
		$(this).parent().removeClass('showed');
	}
	
});

$("#todos").on('click','.delete',function(e) {
	
	
	var id = $(this).parent().data('id');
	
	var text = $(this).parent().find('label').text();
	$(this).parent().remove();
	var index = unactive.indexOf(text);
	todos.splice(index,1);
	refreshinfo();
	
});

$("#removeall").click(function(){
	removeall();
});





