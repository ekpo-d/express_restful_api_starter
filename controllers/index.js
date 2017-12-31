const apiRepsonse = require('../utilities/api_response');

module.exports = {
    index: (req, res) => {
      apiRepsonse.sendSuccess(true, res);
    }
};