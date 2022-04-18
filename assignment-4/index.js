import fs from 'fs';

//CREATE FILE AND WRITE DATA TO FILE
fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', (err) => {
  if (err) console.log(err);;
  console.log('FILE BAŞARILI BİR ŞEKİLDE OLUŞTURULDU VE İÇİNE DATA YAZILDI.');
});

//READ DATA FROM FILE
fs.readFile('employees.json', 'utf8', (err, data) => {
  if (err) console.log(err);;
  console.log(data);
  console.log("FILE BAŞARILI BİR ŞEKİLDE OKUNDU.");
});

//UPDATE DATA IN FILE 
fs.appendFile('employees.json', '\n{"name": "Employee 2 Name", "salary": 3000}', 'utf8', (err) => {
  if (err) console.log(err);;
  console.log('DOSYAYA YENİ VERİ EKLENDİ.');
});

//DELETE FILE
fs.unlink('employees.json', (err) => {
  if (err) console.log(err);;
  console.log('employees.json DOSYASI SİLİNDİ.');
});