var reduce = setInterval(function () {
    UAM.aircrafts.forEach(function(air) {
        UAM.reduceTimeToExecute(air,1);
        var airs = UAM.getAircraftsForRepairs(10);
        $("#repairs").empty();
        airs.forEach(function(air) {
            $("#repairs").append("<li>"+air.code+"</li>");
        });
    });

   // console.log('it works' + new Date());
},1000);
var index = 0;
var act = 0;
$(function(){

    $("#add_air").click(function(){
        var code = $("input[name='code']").val();
        UAM.addAircraft(code);
        index++;
        console.log(UAM.aircrafts);

    });
    $("#airs").on("click",".remove_air",function(){
        var ind = $(this).parent().parent().data('id');
        UAM.removeAircraft(UAM.aircrafts[ind]);
        
        console.log(UAM.aircrafts);

    });
    $("#airs").on("click",".add_service",function(){
        act = $(this).parent().parent().data('id');
        $("#add_work").modal('show');
    });

    $("#add_service").click(function(){
        var name = $("input[name='name']").val();
        var times = $("input[name='time']").val();
        $("input[name='time']").val('');
        $("input[name='name']").val('');
        UAM.addWorkToAircraft(UAM.aircrafts[act],name,times);


        $("#add_work").modal('hide');


    });


});