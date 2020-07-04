<script>
$(window).load(function(){
   
    $(".load .loader").fadeOut(2000,function(){
        $(this).parent().fadeOut(2000,function(){
            $("body").css("overflow","auto");
            $(this).remove();
           
        });

    });

});
</script>