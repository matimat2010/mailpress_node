require('dotenv').config({path:'server/.env'});
const express = require('express');
const app = express();
const stripe = require('stripe')(`${process.env.STRIPE_SECRET_KEY}`);
const {resolve} = require('path');
//body parser is a middle ware that helps parse the body of a request
const bodyParser = require('body-parser');


//retrieves stripe plans to console//
//(async () => {
  //console.log(await stripe.plans.list());
//})();

// adding middle ware, takes a middle ware function that is passed a request response and then next
//takes in the directory where our static files live
app.use(express.static(process.env.STATIC_DIR));
//installing bodyParser everywhere
app.use(bodyParser.json());

//Get route , takes a runction as a callback that will receive a request in a response. 'res.send'
//sends a response back, response is the index.html page here 
// test in terminal with curl localhost:2090
//this route resonds to request that come in throught the root
app.get('/', (req,res) => {
  const path = resolve(process.env.STATIC_DIR + '/index.html');
  res.sendFile(path);
});

// fetch request to pull public key from enviroment var on server
//add new route, recieves get request, reponds with json that has public key from enviroment variables
//test with curl LOCALHOST:2090/public-keys
//in order to add a new get routhe you have to pass in a diffferent path
//this route resonds to request that come in through /public-keys
app.get('/public-keys', (req, res) => {
  res.send({ key: process.env.STRIPE_PUBLIC_KEY}); 
});


// route that can recieve post request, gather info from client, 
// below responds with the response body we recieve / echos it back
// test post with curl -X POST localhost:2090/my-route -d '{"test":123}' -H "Content-Type: applocation/json"
app.post('/my-route', (req, res) => {
  console.log('body', req.body);
  res.send(req.body);
});

//post route looks at data /request body that comes back and takes action (ex: add to database | api call etc)

//----------checkout for wine newsletter -------------------------
app.post('/create-checkout-session-wine', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        // Replace `price_...` with the actual price ID for your subscription
        price: 'price_1HZlUvA5YRGP79Zvuso00EE9',
        quantity: 1,
      },
    ],
    mode: 'subscription',
    success_url: 'https://example.com/success',
    cancel_url: 'https://example.com/cancel',
  });

  res.json({ id: session.id });
});

//----------checkout for cardinals newsletter -------------------------

app.post('/create-checkout-session-cardinals', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        // Replace `price_...` with the actual price ID for your subscription
        price: 'price_1HekpDA5YRGP79Zv4d0Z87fC',
        quantity: 1,
      },
    ],
    mode: 'subscription',
    success_url: 'https://example.com/success',
    cancel_url: 'https://example.com/cancel',
  });

  res.json({ id: session.id });
});

//----------checkout for tech newsletter -------------------------

app.post('/create-checkout-session-tech', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        // Replace `price_...` with the actual price ID for your subscription
        price: 'price_1HektJA5YRGP79Zv99Yia1nf',
        quantity: 1,
      },
    ],
    mode: 'subscription',
    success_url: 'https://example.com/success',
    cancel_url: 'https://example.com/cancel',
  });

  res.json({ id: session.id });
});





// app.post('/create-checkout-session', async (req, res) => {
  // const session = await stripe.checkout.sessions.create({
    // payment_method_types: ['card'],
    // line_items: [
      // {
        //Replace `price_...` with the actual price ID for your subscription
        //you created in step 2 of this guide.
        // price: 'price_1HZlUvA5YRGP79Zvuso00EE9',
        // quantity: 1,
      // },
    // ],
    // mode: 'subscription',
    // success_url: 'https://example.com/success',
    // cancel_url: 'https://example.com/cancel',
  // });
// 
  // res.json({ id: session.id });
// });

app.listen(`${process.env.PORT}`, () => console.log(`Listening on http://localhost:${process.env.PORT}`));
