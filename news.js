function myFunction() {
    var x = document.getElementById("sel-category").value;
    console.log(x==="BBC");
    if(x==="BBC"){
    document.getElementById("displaynews").innerHTML = 
    "<div class='content' id='content'>"+
    "<div class='content__sub' id='content__display'>"+
    "<div class='content__img'></div>"+
    "<h3 class='content__modifier content__head'>BBC</h3>"+
    "<p class='content__modifier content__date'>Posted on <b>29 June, 2019</b> // Category: Category One</p>"+
    "<p class='content__modifier content__matter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nulla porro autem quod, officia, velit magni officiis maxime corrupti quam ex accusamus repellendus deleniti ab! Veniam, harum numquam eum laboriosam nisi libero voluptate, assumenda ipsam tempore ea accusantium eveniet deleniti blanditiis! Saepe praesentium blanditiis pariatur. Iure dolorem reprehenderit earum assumenda.</p> "+
    "<a href='#' class='content__modifier btn btn--pink'>Continue Reading</a>"+ 
    "<a href='#' class='content__modifier btn btn--pink'>Continue Reading</a>"
    "</div>"+
    "</div>";
    }
    if(x==="Aaj Tak"){
    document.getElementById("displaynews").innerHTML = 
    "<div class='content' id='content'>"+
    "<div class='content__sub' id='content__display'>"+
    "<div class='content__img'></div>"+
    "<h3 class='content__modifier content__head'>Aaj Tak</h3>"+
    "<p class='content__modifier content__date'>Posted on <b>29 June, 2019</b> // Category: Category One</p>"+
    "<p class='content__modifier content__matter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nulla porro autem quod, officia, velit magni officiis maxime corrupti quam ex accusamus repellendus deleniti ab! Veniam, harum numquam eum laboriosam nisi libero voluptate, assumenda ipsam tempore ea accusantium eveniet deleniti blanditiis! Saepe praesentium blanditiis pariatur. Iure dolorem reprehenderit earum assumenda.</p> "+
    "<a href='#' class='content__modifier btn btn--pink'>Continue Reading</a>"+ 
    "<a href='#' class='content__modifier btn btn--pink'>Continue Reading</a>"
    "</div>";
    }
}

function myForm(){
    document.getElementById("form").innerHTML=
    "<label for='sel-category' class='form__select-label'><b>SELECT CATEGORY</b></label>"+
    "<select id='sel-category' class='form__select-box' onchange='myFunction()'>"+
    "<option value='All' selected>All</option>"+
    "<option value='BBC'>BBC</option>"+
    "<option value='Aaj Tak'>Aaj Tak</option>"+
    "<option value='NBC'>NBC</option>"+
    "</select>"+
    "<label for='subscribe' class='form__subscribe-label'><b>SUBSCRIBE</b></label>"+
    "<input type='text' id='subscribe' class='form__subscribe-textbox' placeholder='Email Address'/>"+
    "<button class='form__subscribe-button'>Subscribe</button>";   
}