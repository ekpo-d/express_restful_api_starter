/**
 * Properly formats and sends JSON responses
 */
module.exports = {
  sendSuccess: (data, res) => {
      return res.json({status: 'success', data: data});
  },
  sendError: (message, status, res) => {
      res.status(status);
      return res.json({status: 'error', message: message});
  }
};