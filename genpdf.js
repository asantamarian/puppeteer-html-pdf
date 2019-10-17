const puppeteer = require('puppeteer')

async function generatePDF() {
  
  const browser = await puppeteer.launch({ ignoreHTTPSErrors: true,headless: true });
  const page = await browser.newPage();
  await page.goto('http://localhost:3335/Desempeno/Informe/exportDesempeno?pdf=1', {waitUntil: 'networkidle2'});
  await page.emulateMedia('screen');
  
  const pdf = await page.pdf({ 
    path:"dd.pdf",
    //format: 'A4',
    printBackground:true,
    width: '1200px' , height: '1980px',
    landscape:true
    }
      );
 
  await browser.close();
  
  
  
};

generatePDF();

