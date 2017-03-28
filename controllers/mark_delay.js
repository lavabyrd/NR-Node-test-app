/**
 * GET /
 * Home page.
 */

var sleep = require('sleep');

exports.markdelay = (req, res) => {

  sleep.sleep(5)
    res.render('mark_delay', {
    title: 'delayed page'
  });

};
