import * as fs from 'fs';
import pdf from'pdf-parse';

const pdf_filename = 'sample.pdf'

const dataBuffer = fs.readFileSync(pdf_filename);

pdf(dataBuffer).then(function (data) {
    console.log(data.numpages);
    console.log(data.numrender);
    console.log(data.info);
    console.log(data.metadata);
    console.log(data.version);
    console.log(data.text);
});
