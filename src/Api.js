var server = process.env.REACT_APP_API

export default {
    test: function() {
        fetch(server+'/test').then(res => {
            return res.text();
        }).then(text => {
            console.log(text);
        });
    },
    postSurvey: function(surveyData) {
        fetch(server+'/survey', {
            method: 'POST',
            body: surveyData
        }).then( res => {
            console.log(res.json());
        }).catch( error => {
            console.error(error);
        })
    }
}