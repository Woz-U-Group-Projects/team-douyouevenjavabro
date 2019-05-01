var axios = require('axios');

module.exports = {
    fetchValues: function () {
        //--------------------------------------------------------------------------
        //uncomment line below for running local
        // var encodedURI = window.encodeURI('http://localhost:8080/api/vehicles/admin');

        //--------------------------------------------------------------------------
        //uncomment and modify if needed line below for running with AWS
        var encodedURI = window.encodeURI('http://ec2-35-173-230-63.compute-1.amazonaws.com:8080/api/vehicles/admin');

        return axios.get(encodedURI).then(response => {
            console.log('fetchValues: ', response.data);
            return response.data;
        });
    }
};