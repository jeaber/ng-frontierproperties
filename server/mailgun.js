/**
 * Created by jeaber on 7/20/15.
 */

var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');

// This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails)
var auth = {
    auth: {
        api_key: 'key-7acc68981a1e1a2a477284eedfd8e0b8',
        domain: 'sandbox3f0214daaf924634927f6d309cbbadd7.mailgun.org'
    }
}
// This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails)
auth2 = {
    auth: {
        api_key: 'key-7acc68981a1e1a2a477284eedfd8e0b8',
        domain: 'mg.frontierpropertiesmn.com'
    }
}

module.exports = {
 nodemailerMailgun: nodemailer.createTransport(mg(auth))
};
