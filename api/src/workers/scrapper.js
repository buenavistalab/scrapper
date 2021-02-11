const puppeteer = require('puppeteer');
var cron = require('node-cron');
const Product = require('./../app/models/Product');

cron.schedule(
  '59 5 * * *',
  () => {
    console.log(
      'Running a job at 05h59 at America/Sao_Paulo timezone. Here we go!'
    );
    (async () => {
      const extractData = async () => {
        const url = 'https://world.openfoodfacts.org/';

        const page = await browser.newPage();

        await page.goto(url);

        const urlsAnchor = await page.evaluate(() => {
          const nodeList = document.querySelectorAll('.list_product_a');
          const array = [...nodeList];
          const pageHref = array.map(el => el.href);

          return pageHref;
        });

        const pagePromise = link =>
          new Promise(async (resolve, reject) => {
            const dataObj = {};
            const newPage = await browser.newPage();
            await newPage.goto(link);

            dataObj['code'] = await newPage.$eval(
              '#barcode',
              el => el.innerText
            );

            dataObj['barcode'] = await newPage.$eval('#barcode_paragraph', el =>
              el.innerText.replace('Barcode: ', '')
            );

            dataObj['status'] = 'imported';

            dataObj['imported_t'] = new Date();

            dataObj['url'] = link;

            dataObj['product_name'] = await newPage.$eval(
              'h1[property="food:name"]',
              el => el.innerText
            );

            dataObj['quantity'] = await newPage.evaluate(() => {
              const nodeList = document.querySelectorAll(
                '#main_column > div > div > div.medium-12.large-8.xlarge-8.xxlarge-8.columns > p > span'
              );
              const array = [...nodeList];
              const arrayQuantity = array.map(el => {
                if (el.innerHTML.includes('Quantity:')) {
                  return el.parentElement.innerText.replace('Quantity: ', '');
                }
              });
              const removeNull = arrayQuantity.filter(x => x).join(', ');

              return removeNull;
            });

            dataObj['categories'] = await newPage.evaluate(() => {
              const nodeList = document.querySelectorAll(
                '#main_column > div > div > div.medium-12.large-8.xlarge-8.xxlarge-8.columns > p > a'
              );
              const array = [...nodeList];
              const arrayCategories = array.map(el => {
                if (el.href.includes('category')) {
                  return el.innerHTML;
                }
              });
              const removeNull = arrayCategories.filter(x => x).join(', ');

              return removeNull;
            });

            dataObj['packaging'] = await newPage.evaluate(() => {
              const nodeList = document.querySelectorAll(
                '#main_column > div > div > div.medium-12.large-8.xlarge-8.xxlarge-8.columns > p > a'
              );
              const array = [...nodeList];
              const arrayPackaging = array.map(el => {
                if (el.href.includes('packaging')) {
                  return el.innerHTML;
                }
              });
              const removeNull = arrayPackaging.filter(x => x).join(', ');

              return removeNull;
            });

            dataObj['brands'] = await newPage.evaluate(() => {
              const nodeList = document.querySelectorAll(
                '#main_column > div > div > div.medium-12.large-8.xlarge-8.xxlarge-8.columns > p > a[itemprop="brand"]'
              );
              const array = [...nodeList];
              const itemValue = array.map(el => el.innerHTML);

              const removeNull = itemValue.filter(x => x).join(', ');

              return removeNull;
            });

            dataObj['image_url'] = await newPage.$eval(
              '#og_image',
              el => el.src
            );

            resolve(dataObj);
            await newPage.close();
          });

        for (link in urlsAnchor) {
          const currentPageData = await pagePromise(urlsAnchor[link]);

          const saveDataBase = new Product(currentPageData);

          saveDataBase
            .save()
            .then(() => {
              console.log('Save successfully.');
            })
            .catch(err => {
              console.log(err);
            });
          console.log('Data', saveDataBase);
        }
      };

      const browser = await puppeteer.launch({
        headless: true,
        args: ['--disable-setuid-sandbox'],
        ignoreHTTPSErrors: true,
      });

      extractData();
    })();
  },
  {
    scheduled: true,
    timezone: 'America/Sao_Paulo',
  }
);
