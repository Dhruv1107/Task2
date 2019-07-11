var data = [

    {
        image: "<div class='content__img'></div>",
        heading: "BBC",
        date: "Posted on 29 June, 2019 //Category: Category One",
        content: `Iranian boats tried to impede a British oil tanker near the Gulf - before being driven off by a Royal Navy ship, a UK government spokesman has said. HMS Montrose positioned itself between the three boats and the tanker British Heritage before issuing verbal warnings to the Iranian vessels.`,
        popup: `A UK Government spokesman said: "Contrary to international law, three Iranian vessels attempted to impede the passage of a commercial vessel, British Heritage, through the Strait of Hormuz. "We are concerned by this action and continue to urge the Iranian authorities to de-escalate the situation in the region."`
    },
    {
        image: "<div class='content__img'></div>",
        heading: "Aaj Tak",
        date: "Posted on 11 July, 2019 //Category: Category One",
        content: `Some videos are becoming viral on the social media about the match, in which people are blaming the wrong decision of the umpire for the defeat of India from New Zealand.`,
        popup: `It is being said on social media that Mahendra Singh Dhoni should have given a no ball to the ball which was run out. Twitter users say that the umpire ignored fielding rules during the power play in Dhoni's run out decision. People say that in the third power play, only 5 players can live outside the scope of thirty yards, but at the run out of Dhoni, six players were out of the circle.`
    },
    {
        image: "<div class='content__img'></div>",
        heading: "NDTV",
        date: "Posted on 11 July, 2019 //Category: Category One",
        content: `"MS Dhoni Coming In At No. 5 Would've Made A Difference": Sachin Tendulkar After India's World Cup Exit`,
        popup: `After the match, India's batting legends Sachin Tendulkar and Sourav Ganguly expressed shock at MS Dhoni's batting position in such a crucial match. "Instead of Hardik, may be Dhoni coming in at No. 5 would have made a difference. Dhoni would have for sure done something and made sure on either side of him," Sachin Tendulkar told a news channel. "In a crunch moment like this you would think of promoting Dhoni and control the game. Towards the end he was talking to Jadeja and controlling the proceedings. Very smartly he was rotating the strike," Tendulkar added. Former India batsman VVS Laxman termed the change in batting order a "tactical blunder".`
    },
    {
        image: "<div class='content__img'></div>",
        heading: "Republic",
        date: "Posted on 29 June, 2019 //Category: Category One",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nulla porro autem quod, officia, velit magni officiis maxime corrupti quam ex accusamus repellendus deleniti ab! Veniam, harum numquam eum laboriosam nisi libero voluptate, assumenda ipsam tempore ea accusantium eveniet deleniti blanditiis! Saepe praesentium blanditiis pariatur. Iure dolorem reprehenderit earum assumenda.",
        popup: "Hey Good Morning"
    },
    {
        image: "<div class='content__img'></div>",
        heading: "NBC",
        date: "Posted on 29 June, 2019 //Category: Category One",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nulla porro autem quod, officia, velit magni officiis maxime corrupti quam ex accusamus repellendus deleniti ab! Veniam, harum numquam eum laboriosam nisi libero voluptate, assumenda ipsam tempore ea accusantium eveniet deleniti blanditiis! Saepe praesentium blanditiis pariatur. Iure dolorem reprehenderit earum assumenda.",
        popup: "Hey Good Morning"
    },
    {
        image: "<div class='content__img'></div>",
        heading: "TV9",
        date: "Posted on 29 June, 2019 //Category: Category One",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nulla porro autem quod, officia, velit magni officiis maxime corrupti quam ex accusamus repellendus deleniti ab! Veniam, harum numquam eum laboriosam nisi libero voluptate, assumenda ipsam tempore ea accusantium eveniet deleniti blanditiis! Saepe praesentium blanditiis pariatur. Iure dolorem reprehenderit earum assumenda.",
        popup: "Hey Good Morning"
    },
    {
        image: "<div class='content__img'></div>",
        heading: "India Today",
        date: "Posted on 29 June, 2019 //Category: Category One",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nulla porro autem quod, officia, velit magni officiis maxime corrupti quam ex accusamus repellendus deleniti ab! Veniam, harum numquam eum laboriosam nisi libero voluptate, assumenda ipsam tempore ea accusantium eveniet deleniti blanditiis! Saepe praesentium blanditiis pariatur. Iure dolorem reprehenderit earum assumenda.",
        popup: "Hey Good Morning"
    },
    {
        image: "<div class='content__img'></div>",
        heading: "Times Now",
        date: "Posted on 29 June, 2019 //Category: Category One",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nulla porro autem quod, officia, velit magni officiis maxime corrupti quam ex accusamus repellendus deleniti ab! Veniam, harum numquam eum laboriosam nisi libero voluptate, assumenda ipsam tempore ea accusantium eveniet deleniti blanditiis! Saepe praesentium blanditiis pariatur. Iure dolorem reprehenderit earum assumenda.",
        popup: "Hey Good Morning"
    },
    {
        image: "<div class='content__img'></div>",
        heading: "Fox News",
        date: "Posted on 29 June, 2019 //Category: Category One",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nulla porro autem quod, officia, velit magni officiis maxime corrupti quam ex accusamus repellendus deleniti ab! Veniam, harum numquam eum laboriosam nisi libero voluptate, assumenda ipsam tempore ea accusantium eveniet deleniti blanditiis! Saepe praesentium blanditiis pariatur. Iure dolorem reprehenderit earum assumenda.",
        popup: "Hey Good Morning"
    },
    {
        image: "<div class='content__img'></div>",
        heading: "CNN",
        date: "Posted on 29 June, 2019 //Category: Category One",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nulla porro autem quod, officia, velit magni officiis maxime corrupti quam ex accusamus repellendus deleniti ab! Veniam, harum numquam eum laboriosam nisi libero voluptate, assumenda ipsam tempore ea accusantium eveniet deleniti blanditiis! Saepe praesentium blanditiis pariatur. Iure dolorem reprehenderit earum assumenda.",
        popup: "Hey Good Morning"
    }

];
var channels = ["BBC", "Aaj Tak", "NBC", "NDTV", "Republic", "TV9", "India Today", "Times Now", "Fox News", "CNN"];
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
                "<a href='#' class='content__modifier btn btn--pink' id='myBtn' onclick='showpopup()'>Continue Reading</a>" +
                "</div>" +
                `<div id="myModal" class="modal">
                <div class="modal-content">
                  <div class="modal-header">
                    <span class="close" onclick="closepopup()">&times;</span>
                    <h2 id="popup_head">`+ data[i].heading + `</h2>
                  </div>
                  <div class="modal-body">
                    <p id="popup_content">`+ data[i].popup + `</p>
                  </div>
                  <div class="modal-footer">
                    <h3 id="popup_foot">&copy; NewsFeed 2019</h3>
                  </div>
                </div>
                </div>`+
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

    var allChannels = '';
    for (let i = 0; i < channels.length; i++) {
        allChannels += `<option value='` + channels[i] + `'>` + channels[i] + `</option>`;
    }

    document.getElementById("iamform").innerHTML =
        "<div class='form'>" +
        "<label for='sel-category' class='form__select-label'><b>SELECT CATEGORY</b></label>" +
        "<select id='sel-category' class='form__select-box' onchange='myFunction()'>" +
        "<option value='All' selected>All</option>" +
        allChannels +
        "</select>" +
        "<label for='subscribe' class='form__subscribe-label'><b>SUBSCRIBE</b></label>" +
        "<input type='text' id='subscribe' class='form__subscribe-textbox' placeholder='Email Address'/>" +
        "<button class='form__subscribe-button' onclick='validate()'>Subscribe</button>" +
        "</div>";

    for (let i = 0; i < data.length; i++) {
        fulldata +=
            "<div class='content__sub' id='content__display'>" +
            data[i].image +
            "<h3 class='content__modifier content__head' id='myBtn'>" + data[i].heading + "</h3>" +
            "<p class='content__modifier content__date'>" + data[i].date + "</p>" +
            "<p class='content__modifier content__matter'>" + data[i].content + "</p> " +
            `<div id="myModal" class="modal">
            <div class="modal-content">
              <div class="modal-header">
                <span class="close" onclick="closepopup()">&times;</span>
                <h2 id="popup_head"></h2>
              </div>
              <div class="modal-body">
                <p id="popup_content"></p>
              </div>
              <div class="modal-footer">
                <h3 id="popup_foot">&copy; NewsFeed 2019</h3>
              </div>
            </div>
            </div>`+
            "<a href='#' class='content__modifier btn btn--pink' id='myBtn' onclick='showpopupall(data[" + i + "])'>Continue Reading</a>" +
            "</div>" +
            "<hr>";
    }
    fulldata += "</div>";
    document.getElementById("displaynews").innerHTML = fulldata;
}

var email = [];
function validate() {
    if (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(document.getElementById("subscribe").value)) {
        let loc = localStorage.getItem("iamkey");
        if (loc) {
            email = loc.split(",");
        }
        email.push(document.getElementById("subscribe").value);
        localStorage.setItem("iamkey", JSON.stringify(email));
        console.log(localStorage.getItem("iamkey"));
        alert("You have entered a valid email address!");
        return true;
    }
    alert("You have entered an invalid email address!");
    return (false);
}

function showpopup() {
    let modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function showpopupall(i) {
    document.getElementById("popup_head").innerHTML = i.heading;
    document.getElementById("popup_content").innerHTML = i.popup;
    let modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function closepopup() {
    // console.log("in close");
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
}

window.onclick = function (event) {
    //console.log("in outside event");
    let modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}