import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as firebaseHelper from "firebase-functions-helper/dist";
import * as express from "express";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

const app = express();
const main = express();

main.use(express.json()); //using this solve the empty body issue
main.use(express.urlencoded({ extended: false }));
main.use("/api/v1", app);

export const webApi = functions.https.onRequest(main);

const dataCollection = "byCities";

app.get("/byCities/:city", (req, res) => {
  // let pokemonToReturn: any = pokemonList.find(
  //   (element: any) =>
  //     Object.keys(element)[0] == req.params.pokemonId ||
  //     Object.values(element)[0] == req.params.pokemonId.toLowerCase()
  // );
  //   let queryString = `${req.params.city}/AQI_Data/2020-Jan-14, 15-42-45.json`;
  let queryString = req.params.city;
  firebaseHelper.firestore
    .getDocument(db, dataCollection, queryString)
    .then(doc => res.status(200).send(doc))
    .catch(error => res.status(400).send(`Cannot get City Data: ${error}`));
  //   res.status(200).send(pokemonToReturn);
});

export { app };
