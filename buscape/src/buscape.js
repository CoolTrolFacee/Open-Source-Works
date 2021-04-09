

$(document).ready(function(){

    $("#purchase-menu-btn").click(function(){
        if($("#purchase-menu").val()==0){
            $("#purchase-menu").css("display", "block")
            $("#purchase-menu").val(1);
        }else{
            $("#purchase-menu").css("display", "none")
            $("#purchase-menu").val(0);
        }
    })
});