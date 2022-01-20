// These are HTTP requests used to fetch and post data to server. 
// Each requires an endpoint (the url of the php script we would like to trigger).
// Each can also be passed an object containing parameters for the request. 

/* Example:

    const posts = get('https://our-site.com/server/getAllPosts.php');

    const newUser = post('https://our-site.com/server/newUser.php', {usernname: 'user1', password: 'pass'});

*/

function get(endpoint, params) {
    
        return jQuery.ajax({

            type: "GET",
            url: endpoint,
            data: {
                req: params
            },
            dataType: "html"

        })

}


function post(endpoint, params) {

    return jQuery.ajax({

        type: "POST",
        url: endpoint,
        data: {
            req: params
        },
        dataType: "html"

    })

}




export {get, post}