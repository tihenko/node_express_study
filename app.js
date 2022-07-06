const { createUser } = require('./services/user.service');
require('./services/file.service');

const user = createUser('Alindos', 27);

console.log(user);

user.sayHello();
