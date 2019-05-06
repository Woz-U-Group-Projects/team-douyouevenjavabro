var axios = require('axios');

module.exports = {
    postValues: function() {
                //--------------------------------------------------------------------------
        //uncomment line below for running local
        var encodedURI = window.encodeURI('http://localhost:8080/api/vehicles');

        //--------------------------------------------------------------------------
        //uncomment and modify if needed line below for running with AWS
        // var encodedURI = window.encodeURI('http://ec2-35-173-230-63.compute-1.amazonaws.com:8080/api/vehicles');

        
        return axios.post(encodedURI).then(response => {
            console.log('postValues: ', response.data);
            return response.data;
        });
    }
};