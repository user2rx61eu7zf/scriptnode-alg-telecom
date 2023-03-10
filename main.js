
const puppeteer=require('puppeteer');
const sleep = require('./sleep.js');
const send_msg = require('./send_msg.js');
const test = require('./test.js');
const { set } = require('lodash');
const cron = require('node-cron');

test();
console.log("date de l'exec", new Date());
cron.schedule('33 15 * * *', test);