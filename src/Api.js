import * as log from 'loglevel'

// const server = process.env.REACT_APP_API
export const server = process.env.REACT_APP_API;

function isDev() {
    return process.env.REACT_APP_ENV === 'DEV';
}
if (isDev()) log.debug("dev");
else log.debug("prod");

export default {
    test: function () {
    },
    uploadContact: function (data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("success")
            }, 3000);
        })
    },

    getIdToken: function (survey, reserved) {
        log.debug("getIdToken", survey, reserved);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    success: true,
                    data: {

                        id: 17,
                        token: '0716b76418034ea8f15ded3bb3fb9180910698b30bf5d7c34f8b5deb'
                    }
                });
            }, 1000);
        });
    },


    uploadReply: function (pageName, pageData, id, token) {
        log.debug("API uploadReply", pageName, pageData);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ success: true })
            }, 1000);
        })
    },

    getScore: function (id, token) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(
                    {
                        success: true,
                        data: {
                            'pretest': false,
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
                            ],
                            'stress': [
                                {
                                    name: '完全沒有壓力',
                                    value: 5
                                },
                                {
                                    name: '壓力非常大',
                                    value: 26,
                                    chosen: true
                                },
                                {
                                    name: '壓力很大',
                                    value: 35
                                },
                                {
                                    name: '中度壓力',
                                    value: 18
                                },
                                {
                                    name: '輕度壓力',
                                    value: 16
                                }
                            ],
                            'overwork': [
                                {
                                    name: "文字1",
                                    value: 45
                                },
                                {
                                    name: "文字2",
                                    value: 30,
                                    chosen: true
                                },
                                {
                                    name: "文字3",
                                    value: 10
                                },
                                {
                                    name: "文字4",
                                    value: 12
                                },
                                {
                                    name: "文字5",
                                    value: 3
                                },
                            ]
                        }
                    })
            }, 1000);
        })
    }
}

