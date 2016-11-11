// import express from 'express';
// import cors from 'cors';
import mongoose from 'mongoose';
import Promise from 'bluebird';
import saveDataInDb from './saveDataInDb';

mongoose.Promise = Promise;
mongoose.connect('mongodb://publicdb.mgbeta.ru/george-lesson3');

const data = {
  user: {
    name: 'george',
  },
  pets: [
    {
      type: 'cat',
      name: 'Zildjian',
    },
    {
      type: 'dog',
      name: 'Doge',
    },
  ],
};
saveDataInDb(data);

// const app = express();
// app.use(cors());
//
// app.get('/', (req, res) => {
//   res.end(parseUsername(req.query.username));
// });
//
// app.listen(3000, () => {
//   console.log('Your app listening on port 3000!');
// });
