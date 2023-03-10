const puppeteer=require('puppeteer');
async function sleep(seconds)
    {
            return new Promise(resolve => setTimeout(resolve, seconds * 1000)); 
    }

    module.exports = sleep;