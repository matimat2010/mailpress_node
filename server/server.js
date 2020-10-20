// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.
require('dotenv').config({path:'server/.env'});



const express = require('express');
const app = express();
// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require('stripe')(`${process.env.STRIPE_SECRET_KEY}`);
const {resolve} = require('path');


//retrieves stripe plans to console//
//(async () => {
  //console.log(await stripe.plans.list());
//})();

// adding middle ware, takes a middle ware function that is passed a request response and then next
//takes in the directory where our static files live
app.use(express.static(process.env.STATIC_DIR));

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

app.listen(`${process.env.PORT}`, () => console.log(`Listening on LOCALHOST:${process.env.PORT}`));
