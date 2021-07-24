const amqp = require('amqplib/callback_api');
const Env = require('../../config/env.config');

class OrderQueue {
  create(payload) {
    return new Promise((resolve, reject) => {
      amqp.connect(`amqp://${Env.HOST_QUEUE}`, (error0, connection) => {
        if (error0) return reject(error0); 

        connection.createChannel((error1, channel) => {
          if (error1) return reject(error1);   

          channel.assertExchange(
            Env.EXCHANGE_NAME_QUEUE, 
            'direct', 
            { durable: true }
          );
          channel.publish(
            Env.EXCHANGE_NAME_QUEUE, 
            Env.NAME_QUEUE, 
            Buffer.from(JSON.stringify(payload))
          );
        });

        setTimeout(() => {
          connection.close();
          resolve(true);
        }, 500);
      });
    });
  }
}

module.exports = new OrderQueue();