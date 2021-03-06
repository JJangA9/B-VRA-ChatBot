const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');

const CaverJS = require('caver-js');
const { numberToHex } = require('caver-js/packages/caver-utils');
const Caver = require('caver-js');
const caver = new CaverJS('https://api.baobab.klaytn.net:8651/');

const apiRouter = express.Router();

app.use(logger('dev', {}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api', apiRouter);

function addNumber(num1, num2){
  return num1 + num2;
};

apiRouter.post('/sayHello', function(req, res) {
  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: "hello I'm Ryan"
          }
        }
      ]
    }
  };

  res.status(200).send(responseBody);
});

apiRouter.post('/showHello', function(req, res) {
  console.log(req.body);

  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleImage: {
            imageUrl: "https://t1.daumcdn.net/friends/prod/category/M001_friends_ryan2.jpg",
            altText: "hello I'm Ryan"
          }
        }
      ]
    }
  };

  res.status(200).send(responseBody);
});

apiRouter.post('/showResult', function(req, res) {
  console.log(req.body);
  var result = addNumber(3, 3)

  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: result
          }
        }
      ]
    }
  };

  res.status(200).send(responseBody);
});

app.listen(3000, function() {
  console.log('Example skill server listening on port 3000!');
  caver.klay.getBlockNumber().then((height) => {
    console.log(height);
  });
});