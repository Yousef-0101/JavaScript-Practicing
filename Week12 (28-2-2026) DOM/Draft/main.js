/*
    DOM
    - What Is DOM
    - DOM Selectors
    --- Find Element By ID 'getElementById("my-div")'
    --- Find Element By Tag Name 'getElementsByTagName("p")'
    --- Find Element By Class Name 'getElementsByClassName("my-span")'
    --- Find Element By CSS Selectors 'querySelector(".my-span")'
    --- Find Element By Collection 'querySelectorAll(".my-span")'
    ------ title 'document.title'
    ------ body 'document.body'
    ------ images 'document.images'
    ------ forms 'document.forms[0].one.value'
    ------ links 'document.links[1].href'
*/

/*
    DOM [Get / Set Elements Content And Attributes]
    - innerHTML
        myElement.innerHTML = "Text From <span>Main.js</span> File"; // Text From Main.js File
    - textContent
        myElement.textContent = "Text From <span>Main.js</span> File"; // Text From <span>Main.js</span> File
    - Change Attributes Directly
        document.images[0].src = "https://google.com";
        document.images[0].alt = "Alternate";
        document.images[0].title = "Picture";
        document.images[0].id = "pic";
        document.images[0].className = "img";
    - Change Attributes With Methods
    --- getAttribute
        console.log(myLink.getAttribute("class"));
        console.log(myLink.getAttribute("href"));
    --- setAttribute
        myLink.setAttribute("href", "https://twitter.com");
        myLink.setAttribute("title", "Twitter");
    Search
    - innerText
*/

/*
    DOM [Check Attributes]
    - Element.attributes
        console.log(document.getElementsByTagName("p")[0].attributes);

    - Element.hasAttribute
    - Element.removeAttribute
        if (myP.hasAttribute("data-src")) {
            if (myP.getAttribute("data-src") === "") {
                myP.removeAttribute("data-src");
            } else {
                myP.setAttribute("data-src", "New Value");
            }
        } else {
            console.log(`Not Found`);
        }

    - Element.hasAttributes
        if (myP.hasAttributes()) {
            console.log(`Has Attributes`);
        }
*/

// Create And Append Elements

let myElement = document.createElement("div");
let myAttribute = document.createAttribute("data-custom");
let myText = document.createTextNode("Product One");
let myComment = document.createComment("Hello, Yousef's here");

myElement.className = "product";
myElement.setAttributeNode(myAttribute);
myElement.setAttribute("data-test", "Testing");

// Append Text To Element
myElement.appendChild(myText);

// Append Comment To Element
myElement.appendChild(myComment);

// Append Element To Body
document.body.appendChild(myElement);
