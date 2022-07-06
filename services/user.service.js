const sendSMSFunction = require('./message.service');

function createUser(name, age) {
  sendSMSFunction.sendSMS('6767', 'Welcome on board')
  return {
    name,
    age,
    sayHello: () => {
      console.log('Hello. My name is ${name} and I am ${age} years old');
    }
  }
}
module.exports = {
  createUser
}
