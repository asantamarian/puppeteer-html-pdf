const puppeteer = require('puppeteer')

async function generatePDF() {
  
  const browser = await puppeteer.launch({ ignoreHTTPSErrors: true,headless: true });
  const page = await browser.newPage();
  await page.goto('https://demodede.pchr.cl', {waitUntil: 'networkidle2'});
  await page.emulateMedia('screen');
  
  const pdf = await page.pdf({ 
    path:"output.pdf",
    format: 'Letter',
    printBackground:true,
    PreferCSSPageSize: true,
    width: '1024px' , height: '768px'
    }
      );
 
  await browser.close();
  
  
  
};

generatePDF();

