import functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';
import { getDogs, testApi } from './src/dogs.js';

const app = express() ;  //sets up express app
app.use(cors()); //tells it to allow cross-origin resource sharing 
app.use(express.json())//allows posts with JSON bodies


//now we setup some routes...
app.get('/dogs', getDogs);

app.get('/test', testApi);

//instead of app.listen(Port)..

//we need to 1st - create a cloud function and 2nd- point it to "app"

export const api = functions.https.onRequest(app)                               //we called it 'api' in the firebase.json file
                                                                                //put app in function because they are same routes



