// Sometimes javascript files will begin execution before the browser has fully
// loaded the page.  In order to avoid this, we want to listen for a special
// browser event - called 'load', that fires once the page has fully loaded
// We accomlish this by adding an event listener to the window object (which is
// the global javascript object created for every page). The function passed to
// the event listener will get fired once the page is fully loaded
window.addEventListener('load', function() {
    console.log('welcome to the secret blog');

    // Perform AJAX request to get post data from server
    // AJAX stands for Asynchronous Javascript and XML (ignore the XML part)
    // Essentially it means that we're going to ask the server for some data
    // without doing a full page reload. This allows us to load data
    // dynamically as needed
    // We pass an object that tells the jQuery ajax() function what to do
    $.ajax({
        url: '/secret-data',        // the URL that we're hitting - we have to handle this route on our server
        type: 'get',                // The type of HTTP request we want to perform
        success: function(res) {    // And the success function. this is fired when the ajax request completes and it contains the data
            // Here I'm just calling a separate function for clarity
            populatePage(res);
        }
    });

    // Popuplate page with obtained from server
    // Take the data we got from our AJAX request
    var populatePage = function(pageData) {
        console.log(pageData);

        // pageData is an object, so we get an array of it's keys using
        // Object.keys
        var pageDataKeys = Object.keys(pageData);

        // For each key, get the data from the pageData object using
        // a javascript array method forEach()
        pageDataKeys.forEach(function(item, index) {

            // Get the specific post data
            var post = pageData[item];

            // Log it all out so we can see it working
            console.log(post.title);
            console.log(post.subheader);
            console.log(post.content);

            // Create a bunch of HTML elements to add the page
            var container = document.createElement('div');
            container.className = 'container';              // Give the containers a class name so we can style them with CSS
            document.body.appendChild(container);           // Append the containers to the html BODY object
            var title = document.createElement('h1');       // Create an h1 tag for the post TITLE
            var sub = document.createElement('h2');         // create an h2 tag for the post Subheader
            var content = document.createElement('p');      // create a p tag for the post content

            // Add all the content into the HTML tags we created above
            title.innerHTML = post.title;
            sub.innerHTML = post.subheader;
            content.innerHTML = post.content;

            // Append all those elements to the container element we created
            // above
            container.appendChild(title);
            container.appendChild(sub);
            container.appendChild(content);
        });
    }
});
