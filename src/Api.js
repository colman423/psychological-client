var server = process.env.REACT_APP_API

export default {
    test: function() {
        fetch(server+'/yoyo').then(res => {
            return res.text();
        }).then(text => {
            console.log(text);
        });
    }
}