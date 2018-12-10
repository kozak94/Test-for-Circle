$(document).ready( () => {
    $('form').submit( (e)=>{
        e.preventDefault();
        $('.last_div').remove();
        $('input, select').removeClass('red green');
       
        let AllContents = $('input, select');

        let GoodContents = '';

        let BadContents ='';

        for (let  i=0; i < AllContents.length; i++) {
            let ContentsVal = $(AllContents[i]).val();
            let ContentsName = $(AllContents[i]).attr("name");

            if (ContentsVal.length > 0) {
                GoodContents += `${ContentsName}`;
                $(AllContents[i]).addClass('green')
            } 

             else {
                BadContents += `${ContentsName}`;
                $(AllContents[i]).addClass('red')
             } 
        }

        
        $('button').before(
        `<div class="form_contents last_div">
        <p>НЕ заповненні</p>
        <p> ${BadContents} </p>
        </div> 

       
       <div class="form_contents last_div" >
       <p>ЗАповнені</p>
       <p> ${GoodContents} </p>
       </div>`)

      
       
    })
})