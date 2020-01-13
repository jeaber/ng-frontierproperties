/**
 * Created by jeaber on 7/20/15.
 */
const api_key = process.env.MAILGUN; // hide api keys in hidden file called .env

var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');

// This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails)
var auth = {
    auth: {
        api_key,
        domain: 'sandbox3f0214daaf924634927f6d309cbbadd7.mailgun.org'
    }
}
// This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails)
auth2 = {
    auth: {
        api_key,
        domain: 'mg.frontierpropertiesmn.com'
    }
}

module.exports = {
 nodemailerMailgun: nodemailer.createTransport(mg(auth))
};
