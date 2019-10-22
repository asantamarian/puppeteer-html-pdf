const puppeteer = require('puppeteer')

async function generatePDF() {
  
  const browser = await puppeteer.launch({ ignoreHTTPSErrors: true,headless: true });
  const page = await browser.newPage();
  await page.goto('http://localhost:3335/Acreditacion/Informe/pdf?procesoPersona=9d3fade8-d58d-11e9-a12e-12003a462036&cd=1', {waitUntil: 'networkidle2'});
  await page.emulateMedia('screen');
  
  const pdf = await page.pdf({ 
    path:"new.pdf",
    //format: 'A4',
    printBackground:true,
    width: '1980px' , height: '1200px',
    landscape:false
    }
      );
 
  await browser.close();
  
  
  
};

generatePDF();

