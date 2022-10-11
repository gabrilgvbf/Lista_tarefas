$(document).ready(function(){
    $('header button').click(function(e){
e.preventDefault();
        const inputtarefa=$('header input').val()
        let novatarefa=$('<li style=""></li>')

        $(`<div style="cursor:pointer; font-size:24px;">${inputtarefa}</div>`).appendTo(novatarefa)
    
        $(novatarefa).appendTo('ul')

        $(novatarefa).click(function(){
 $(novatarefa).attr("style","text-decoration: line-through;");
        })

       


})})