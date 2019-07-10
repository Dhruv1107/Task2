var data = [
    {
        image: "<div class='content__img'></div>",
        heading: "BBC",
        date: "Posted on 29 June, 2019 //Category: Category One",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nulla porro autem quod, officia, velit magni officiis maxime corrupti quam ex accusamus repellendus deleniti ab! Veniam, harum numquam eum laboriosam nisi libero voluptate, assumenda ipsam tempore ea accusantium eveniet deleniti blanditiis! Saepe praesentium blanditiis pariatur. Iure dolorem reprehenderit earum assumenda."
    },
    {
        image: "<div class='content__img'></div>",
        heading: "Aaj Tak",
        date: "Posted on 29 June, 2019 //Category: Category One",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nulla porro autem quod, officia, velit magni officiis maxime corrupti quam ex accusamus repellendus deleniti ab! Veniam, harum numquam eum laboriosam nisi libero voluptate, assumenda ipsam tempore ea accusantium eveniet deleniti blanditiis! Saepe praesentium blanditiis pariatur. Iure dolorem reprehenderit earum assumenda."
    },
    {
        image: "<div class='content__img'></div>",
        heading: "NDTV",
        date: "Posted on 29 June, 2019 //Category: Category One",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nulla porro autem quod, officia, velit magni officiis maxime corrupti quam ex accusamus repellendus deleniti ab! Veniam, harum numquam eum laboriosam nisi libero voluptate, assumenda ipsam tempore ea accusantium eveniet deleniti blanditiis! Saepe praesentium blanditiis pariatur. Iure dolorem reprehenderit earum assumenda."
    },
    {
        image: "<div class='content__img'></div>",
        heading: "Republic",
        date: "Posted on 29 June, 2019 //Category: Category One",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nulla porro autem quod, officia, velit magni officiis maxime corrupti quam ex accusamus repellendus deleniti ab! Veniam, harum numquam eum laboriosam nisi libero voluptate, assumenda ipsam tempore ea accusantium eveniet deleniti blanditiis! Saepe praesentium blanditiis pariatur. Iure dolorem reprehenderit earum assumenda."
    },
    {
        image: "<div class='content__img'></div>",
        heading: "NBC",
        date: "Posted on 29 June, 2019 //Category: Category One",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nulla porro autem quod, officia, velit magni officiis maxime corrupti quam ex accusamus repellendus deleniti ab! Veniam, harum numquam eum laboriosam nisi libero voluptate, assumenda ipsam tempore ea accusantium eveniet deleniti blanditiis! Saepe praesentium blanditiis pariatur. Iure dolorem reprehenderit earum assumenda."
    },
    {
        image: "<div class='content__img'></div>",
        heading: "TV9",
        date: "Posted on 29 June, 2019 //Category: Category One",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nulla porro autem quod, officia, velit magni officiis maxime corrupti quam ex accusamus repellendus deleniti ab! Veniam, harum numquam eum laboriosam nisi libero voluptate, assumenda ipsam tempore ea accusantium eveniet deleniti blanditiis! Saepe praesentium blanditiis pariatur. Iure dolorem reprehenderit earum assumenda."
    },
    {
        image: "<div class='content__img'></div>",
        heading: "India Today",
        date: "Posted on 29 June, 2019 //Category: Category One",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nulla porro autem quod, officia, velit magni officiis maxime corrupti quam ex accusamus repellendus deleniti ab! Veniam, harum numquam eum laboriosam nisi libero voluptate, assumenda ipsam tempore ea accusantium eveniet deleniti blanditiis! Saepe praesentium blanditiis pariatur. Iure dolorem reprehenderit earum assumenda."
    },
    {
        image: "<div class='content__img'></div>",
        heading: "Times Now",
        date: "Posted on 29 June, 2019 //Category: Category One",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nulla porro autem quod, officia, velit magni officiis maxime corrupti quam ex accusamus repellendus deleniti ab! Veniam, harum numquam eum laboriosam nisi libero voluptate, assumenda ipsam tempore ea accusantium eveniet deleniti blanditiis! Saepe praesentium blanditiis pariatur. Iure dolorem reprehenderit earum assumenda."
    },
    {
        image: "<div class='content__img'></div>",
        heading: "Fox News",
        date: "Posted on 29 June, 2019 //Category: Category One",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nulla porro autem quod, officia, velit magni officiis maxime corrupti quam ex accusamus repellendus deleniti ab! Veniam, harum numquam eum laboriosam nisi libero voluptate, assumenda ipsam tempore ea accusantium eveniet deleniti blanditiis! Saepe praesentium blanditiis pariatur. Iure dolorem reprehenderit earum assumenda."
    },
    {
        image: "<div class='content__img'></div>",
        heading: "CNN",
        date: "Posted on 29 June, 2019 //Category: Category One",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nulla porro autem quod, officia, velit magni officiis maxime corrupti quam ex accusamus repellendus deleniti ab! Veniam, harum numquam eum laboriosam nisi libero voluptate, assumenda ipsam tempore ea accusantium eveniet deleniti blanditiis! Saepe praesentium blanditiis pariatur. Iure dolorem reprehenderit earum assumenda."
    }

];
var fulldata = "<div class='content' id='content'>";
function myFunction() {
    var x = document.getElementById("sel-category").value;
    for (let i = 0; i < data.length; i++) {
        if (x === data[i].heading) {
            let display = "<div class='content' id='content'>" +
                "<div class='content__sub' id='content__display'>" +
                data[i].image +
                "<h3 class='content__modifier content__head'>" + data[i].heading + "</h3>" +
                "<p class='content__modifier content__date'>" + data[i].date + "</p>" +
                "<p class='content__modifier content__matter'>" + data[i].content + "</p> " +
                "<a href='#' class='content__modifier btn btn--pink'>Continue Reading</a>" +
                "</div>" +
                "</div>";
            document.getElementById("displaynews").innerHTML = display;
        }
        else if (x === "All") {
            document.getElementById("displaynews").innerHTML = fulldata;
        }
    }
}

function myForm() {
    header();
    footer();
    function header() {
        let html = '<h1 class="header__heading">NEWSFEED</h1><p class="header__caption">Yet another newsfeed</p>';
        document.getElementById("header").innerHTML = html;
    }
    function footer() {
        let html = ' <p class="footer__copyright">&copy; NewsFeed 2019</p>';
        document.getElementById("footer").innerHTML = html;
    }

    var div1 = document.createElement("div");
    div1.setAttribute("id", "displaynews");
    var div2 = document.createElement("div");
    div2.setAttribute("id", "iamform");
    let main = document.getElementById("main");
    main.appendChild(div1);
    main.appendChild(div2);

    document.getElementById("iamform").innerHTML =
        "<div class='form'>" +
        "<label for='sel-category' class='form__select-label'><b>SELECT CATEGORY</b></label>" +
        "<select id='sel-category' class='form__select-box' onchange='myFunction()'>" +
        "<option value='All' selected>All</option>" +
        "<option value='BBC'>BBC</option>" +
        "<option value='Aaj Tak'>Aaj Tak</option>" +
        "<option value='NBC'>NBC</option>" +
        "<option value='NDTV'>NDTV</option>" +
        "<option value='Republic'>Republic</option>" +
        "<option value='TV9'>TV9</option>" +
        "<option value='India Today'>India Today</option>" +
        "<option value='Times Now'>Times Now</option>" +
        "<option value='Fox News'>Fox News</option>" +
        "<option value='CNN'>CNN</option>" +
        "</select>" +
        "<label for='subscribe' class='form__subscribe-label'><b>SUBSCRIBE</b></label>" +
        "<input type='text' id='subscribe' class='form__subscribe-textbox' placeholder='Email Address'/>" +
        "<button class='form__subscribe-button'>Subscribe</button>" +
        "</div>";

    for (let i = 0; i < data.length; i++) {
        fulldata +=
            "<div class='content__sub' id='content__display'>" +
            data[i].image +
            "<h3 class='content__modifier content__head'>" + data[i].heading + "</h3>" +
            "<p class='content__modifier content__date'>" + data[i].date + "</p>" +
            "<p class='content__modifier content__matter'>" + data[i].content + "</p> " +
            "<a href='#' class='content__modifier btn btn--pink'>Continue Reading</a>" +
            "</div>" +
            "<hr>";
    }
    fulldata += "</div>";
    document.getElementById("displaynews").innerHTML = fulldata;
}