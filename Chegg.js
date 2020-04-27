const puppeteer= require('puppeteer-extra');
const RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha')
const cheerio= require('cheerio');
const clipboardy= require('clipboardy');
const {email,password}=require('./Auth');
const poll=require('promise-poller').default;
const request= require('request-promise-native')
const delay = require('delay')
// const StealthPlugin = require('puppeteer-extra-plugin-stealth')


let config={
    sitekey:'6Lcj-R8TAAAAABs3FrRPuQhLMbp5QrHsHufzLf7b',
    apiKey:'6898fee97c7b15ee9694f38264060c10',
}

var gettingSoultuions=async(question)=>{
    puppeteer.use(
        RecaptchaPlugin({
          provider: { id: '2captcha', token: '6898fee97c7b15ee9694f38264060c10' },
          visualFeedback: true // colorize reCAPTCHAs (violet = detected, green = solved)
        })
      )
    //   puppeteer.use(StealthPlugin())
    try{
      const browser= await puppeteer.launch({headless:false, defaultViewport: {
        width: 2000,
        height: 1000,
        isLandscape: false },args:['--start-fullscreen']})
  
      const page= await browser.newPage()
      await page.goto('https://www.chegg.com/auth?action=login',{waitUntil:'domcontentloaded'})
      await page.waitFor(1000)
      let html=await page.content()
      let $ = cheerio.load(html)
      let iscap= $('h1')
      if($(iscap).text()==='Please verify you are a human'){
        console.log('captcha alert')
        await page.solveRecaptchas() 
        await page.waitFor(1000)
        await page.waitForSelector('input[id="emailForSignIn"]')
        await page.waitForSelector('input[id="passwordForSignIn"]')
        await page.type('input[id="emailForSignIn"]',email,)
        await page.type('input[id="passwordForSignIn"]',password)
        await page.waitFor(1000)
        await page.click('button[name="login"]')
      }else{
        await page.waitForSelector('input[id="emailForSignIn"]')
        await page.waitForSelector('input[id="passwordForSignIn"]')
        await page.type('input[id="emailForSignIn"]',email,)
        await page.type('input[id="passwordForSignIn"]',password)
        await page.waitFor(1000)
        await page.click('button[name="login"]')
        await page.waitFor(2000)
        let newUrl=await page.url()
        if(newUrl==='https://www.chegg.com/auth?action=login'){
          console.log('stock')
          await page.reload()
          await page.waitFor(1000)
          console.log('captcha alert')
          await page.solveRecaptchas() 
          await page.waitFor(2000)
          await page.waitForSelector('input[id="emailForSignIn"]')
          await page.waitForSelector('input[id="passwordForSignIn"]')
          await page.type('input[id="emailForSignIn"]',email,)
          await page.type('input[id="passwordForSignIn"]',password)
          await page.waitFor(1000)
          await page.click('button[name="login"]')
          await page.waitFor(1000)
        }
        
  
  
      }
  
      let seenCaptcha=false
      console.log('we are here')
      await page.waitFor(5000)
       html=await page.content()
       $ = cheerio.load(html)
       iscap= $('h1')
      if($(iscap).text()==='Please verify you are a human'){
        await page.solveRecaptchas()
        await page.waitFor(2000)
        seenCaptcha=true
  
      }
      console.log('we are here 2')
     
       await page.waitForSelector('input[id="chegg-searchbox-input"]')
       await page.waitFor(1000)
       html= await page.content()
       $= cheerio.load(html)
       iscap=$('h1')
       if($(iscap).text()==='Please verify you are a human'){
         console.log(' we are here 5')
         await page.solveRecaptchas()
       }
      
      await page.type('input[id="chegg-searchbox-input"]','Question: (1 Point) X Is Uniformly Distributed Over The Interval [-1,1] ')
      console.log('we are here 3')
      // await page.waitFor(3000)
       html=await page.content()
       $ = cheerio.load(html)
       iscap=$('h1')
       console.log($(iscap).text())
       if($(iscap).text()==='Please verify you are a human'){
        console.log('we are here 4')
        await page.solveRecaptchas()
       }
       
     
      await page.click('button[data-test="chegg-searchbox-submit-btn"]')
      await page.waitFor(1000)
      await page.waitForSelector('div[data-area="result1"]')
      await page.click('div[data-area="result1"]')
      await page.waitFor(2000)

      html=await page.content()
      $= cheerio.load(html)
     
      let listOfImages=$('li').find('div:nth-child(2)>div:nth-child(2)>div>p')
      let images=['its for image src']
      listOfImages.map((i,e)=>{
        console.log('fuck this')
        let url=$(e).find('img').attr('src')
        images.push(url)
        console.log(url)
      })
      let setOftext=['its for embbeded texts']
      let textanswers= $('li').find('div:nth-child(2)>div:nth-child(2)>div')
      textanswers.map((i,e)=>{
        let text=$(e)
        setOftext.push($(text).text())
        console.log($(text).text())
      })
  
      // console.log(kir)
  
      console.log(images)
      console.log(setOftext)
      let finalAnswers={}
      finalAnswers.images=images
      finalAnswers.texts=setOftext

    }catch(e){
      console.log(e)
      return 0
    }
   
   
   
}

gettingSoultuions('sex')

// async function initiateCaptchaRequest(url) {
//     const formData = {
//       method: 'userrecaptcha',
//       googlekey: config.sitekey,
//       key: config.apiKey,
//       pageurl:url,
//       json: 1
//     };
//     const response = await request.post('http://2captcha.com/in.php', {form: formData});
//     return JSON.parse(response).request;
//   }
  
//   async function pollForRequestResults(key, id, retries = 30, interval = 1500, delay = 15000) {
//     await timeout(delay);
//     return poll({
//       taskFn: requestCaptchaResults(key, id),
//       interval,
//       retries
//     });
//   }
  
//   function requestCaptchaResults(apiKey, requestId) {
//     const url = `http://2captcha.com/res.php?key=${apiKey}&action=get&id=${requestId}&json=1`;
//     return async function() {
//       return new Promise(async function(resolve, reject){
//         const rawResponse = await request.get(url);
//         const resp = JSON.parse(rawResponse);
//         console.log(resp);
//         if (resp.status === 0) return reject(resp.request);
//         resolve(resp.request);
//       });
//     }
//   }
  
//   const timeout = millis => new Promise(resolve => setTimeout(resolve, millis))

  // gettingSoultuions()


  module.exports=gettingSoultuions