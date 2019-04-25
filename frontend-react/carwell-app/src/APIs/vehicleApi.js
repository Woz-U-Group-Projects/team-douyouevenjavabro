var axios = require('axios');

module.exports = {
    fetchValues: function() {
        var encodedURI = window.encodeURI('http://localhost:8080/api/vehicles/{v_id}');
        return axios.get(encodedURI).then(response => {
            console.log('fetchValues: ', response.data);
            return response.data;
        });
    }
};