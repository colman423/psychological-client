var server = process.env.REACT_APP_API

export default {
    test: function () {
        // fetch(server+'/test').then(res => {
        //     return res.text();
        // }).then(text => {"
        //     console.log(text);
        // });
    },
    uploadContact: function (data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("success")
            }, 3000);
        })
        return new Promise((resolve, reject) => {
            fetch(server + '/contact', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(response => response.json()).then(json => {
                if (!json.success) reject(json.msg)
                else resolve(json.msg);
            }).catch(reject);
        })
    },

    uploadReply: function (pageName, pageData) {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ id: 8 })
            }, 3000);
        })
        return fetch(server + '/reply', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ pageName, pageData, id: 6 })
        }).then(response => response.json());
    },

    getScore: function (id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    'resource': [
                        {
                            'name': "彈性", 'value': 47
                        },
                        {
                            'name': "經濟", 'value': 87
                        },
                        {
                            'name': "身心", 'value': 48
                        },
                        {
                            'name': "專業", 'value': 78
                        },
                        {
                            'name': "資訊", 'value': 57
                        },
                        {
                            'name': "關係", 'value': 67
                        }
                    ],
                    'ghq': [
                        {
                            name: '工作疲勞', value: 82
                        },
                        {
                            name: 'GHQ', value: 70
                        },
                    ]
                })
            }, 3000);
        })
        return fetch(server + '/score/' + id, {
            method: 'GET',
        }).then(response => response.json());
    }
}

