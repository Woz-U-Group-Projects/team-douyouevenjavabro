var axios = require('axios');

module.exports = {
    postValues: function() {
        var encodedURI = window.encodeURI('http://localhost:8080/api/vehicles');
        return axios.post(encodedURI).then(response => {
            console.log('postValues: ', response.data);
            return response.data;
        });
    }
};