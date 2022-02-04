# BTTV JS

A NodeJS wrapper for the bttv and ffz api

## Usage

```js
import client from "bttvjs";

// Retrieves a BTTV emote list for twitch user id 1518077
const channel = await client.bttv.getEmotes("1518077");

// Retrieves FFZ information for twitch user id 1518077
const room = await client.ffz.getRoom("1518077");
```

## Linting

All linting is run through eslint. The rules can be found in the .eslintrc.json file
