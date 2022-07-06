const fs = require('fs');

// fs.appendFile('./data.txt', 'HELLO NODE', (err) => {
//   if (err) {
//     console.log(err);
//   }
// });
// fs.writeFile('./data.txt', 'HELLO NODE', (err) => {
//   if (err) {
//     console.log(err);
//   }
// });
fs.readFile('./data.txt', (err, data) => {
  if (err) {
    console.log(err);
    return
  }
  console.log(data);
  console.log(data.toString());
})
