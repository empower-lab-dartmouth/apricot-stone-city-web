import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import path from "path";
import cors from "cors";
import { telegramClient } from './core/chat-client/telegram-chat-client'
import log from './core/util/logging'
import { convoManagerConstructor } from './core/convo-engine/convo-manager'
import storytellerContentConfigurations from './storyteller-config'
import { Stores } from "./core/models/state/state";
import storytellerConfig from "./storyteller-config";
import { State } from "./state/state-config";
import ConvoManager from "./core/models/convo-engine/managers/convo-manager";
import { ContinueConversationRequest } from "./core/models/api/client-side-types";
import { AbsoluteConvoSegmentPath } from "./core/models/convo-engine/convo-graph/convo-path";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World From the Typescript Server!')
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

const sampleNewCard = {
  type: 'text',
  text: 'new data!',
};

const sampleAction = {
  type: 'append-to-page',
  url: 'test',
};

const sampleNewOption = {
  text: 'new option!', action: sampleAction,
};

const sampleResponse = {
  type: 'continuation-data',
  cards: [sampleNewCard, sampleNewCard],
  options: [sampleNewOption, sampleNewOption],
}

// route continue conversation
app.post('/continue-conversation/', (req: Request, res: Response) => {
 const {context, action}: ContinueConversationRequest = req.body;
 const initStateStores: Stores = context.stores === undefined 
  ? {
      variables: storytellerConfig.initialState as State,
      currentConvoSegmentPath: storytellerConfig.startingConvoSegmentPath,
  } : context.stores;
  console.log(initStateStores);
  const convoManager: ConvoManager = convoManagerConstructor(
      storytellerConfig.rootModule,
      initStateStores
  )
  const response = convoManager.respondToUserInput(
      context.username,
      action.option
  )
  return res.status(200).json(response)
});

// import dotenv from 'dotenv'
// import { telegramClient } from './core/chat-client/telegram-chat-client'
// import log from './core/util/logging'

// import express, { Express, Request, Response } from "express";
// import cors from "cors";


// dotenv.config()


// const app: Express = express();

// app.use(express.json());
// app.use(cors());

// app.get('/', (req: Request, res: Response) => {
//   res.send('<h1>Hello World From the Typescript Server!</h1>')
// });

// const port = process.env.PORT || 8000;

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// });


// // route respondToAction
// app.post('/respond', (req: Request, res: Response) => {
//     if (Math.random() > 0.5) {
//       return res.status(200).send('Food');
//     } else {
//         return res.status(200).json('Bar')
//     }
// });
  

// // handler for app engine
// app.get('/_ah/warmup', (req, res) => {
//     // Handle warmup logic. Initiate db connection, etc.
//     main()
// })

// app.listen(8080)

// function main() {
//     if (apiKey === undefined) {
//         const missingApiKeyErrorMessage =
//             '.env file is either not set up or does not contain BOT_TOKEN field'
//         log.fatal(missingApiKeyErrorMessage)
//         throw new Error(missingApiKeyErrorMessage)
//     }

//     const client = telegramClient(apiKey)
//     log.debug(`Initialized telegram client, attempting to run modules`)

//     client.runModule(storytellerContentConfigurations, convoManagerConstructor)
// }

// export default main()
