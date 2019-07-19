var server = process.env.REACT_APP_API

export default {
    test: function () {
        // fetch(server+'/test').then(res => {
        //     return res.text();
        // }).then(text => {
        //     console.log(text);
        // });
    },
    
    uploadReply: function (pageName, pageData) {
        return fetch(server + '/reply', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ pageName, pageData })
        }).then( response => response.json() );
    },

    getScore: function(id) {
        return fetch(server + '/score/' + id, {
            method: 'GET',
        }).then( response => response.json() );
    }
}
