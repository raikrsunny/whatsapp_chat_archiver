/************************************************WhatsApp Chat Archiver***************************** */
let puppeteer = require("puppeteer");
let fs = require('fs');
let name = process.argv[2];

let p=(async function () {
    let browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });
  let pages = await browser.pages();
  let tab = pages[0];
  await tab.goto('https://web.whatsapp.com/');
  await tab.waitForTimeout(5000);
  console.log("Log in!!");
  await tab.click('._2_1wd.copyable-text.selectable-text');
  await tab.type('._2_1wd.copyable-text.selectable-text',name);
  await tab.waitForTimeout(2000);
  await tab.keyboard.press('Enter');

 
  
  let stop = await tab.evaluate(async function(elem){
      await new Promise(function(resolve,reject){
           let stop = setInterval(function(){
            var ans = "";
            var completeString = "";
            var itr1 = 0;
                document.querySelector("._1gL0z").scrollTo(0,scrollBy);
                let html = document.querySelectorAll("._1gL0z ._11liR .GDTQm");

                for(let i = 0 ; i < html.length ; i++){
                    completeString += " "+html[i].innerText;
                }

                if(completeString.length == itr1){
                    console.log("Successful");
                    clearInterval(stop);
                    resolve();
                 }else{
                     itr1 = completeString.length;
                     ans+=" "+completeString;
                     completeString = " ";
              
                     console.log(ans);
                     arr = html;
                 }

            },4000);
        })
    })
    console.log("Ans : "+ans);             //prints chat archive on console
    return ans;


}())


