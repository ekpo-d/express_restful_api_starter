const apiRepsonse = require('../utilities/api_response');

module.exports = {
    index: (req, res) => {
      if (req.originalUrl !== '/api/1.0/') res.redirect('/api/1.0/');
      else apiRepsonse.sendSuccess(true, res);
    }
};