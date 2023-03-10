const puppeteer=require('puppeteer');
function send_msg(message) 
// 1msg=0.273$
    {
        const accountSid = "AC0637184ea0c713f265f5bcdfa743caf5";
        const authToken = "6f7edf5b861f3a339045fb243887a872";
        const client = require('twilio')(accountSid, authToken);
        client.messages     
        .create({
                body: 'lyoum tekmel linternet',
                from: '+15674852650',
                to: '+213540958089'
                })
            .then(message => console.log(message.sid));
        
    }
    module.exports = send_msg;