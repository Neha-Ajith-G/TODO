$(document).ready(
    function(){
        $('#addTask').click(
            function(){
                var toAdd = $('input[name = taskItem]').value();
                $('ol').append("<li>" + toAdd + "</li>");
            }
        );
        $("input[name = taskItem]").keyup(
            function(event){
                $("input[name = taskItem]").css("background-color", "lightpink");
                if(event.key == 13){
                    $("#addTask").click();
                }
            }
        );
        $(document).on('dblclick','li',function(){
            $(this).toggleClass('strike').fadeOut('slow');
        });
        $('input').focus(function() {
            $(this).val('');
        });
        $('ol').sortable();
    }
)