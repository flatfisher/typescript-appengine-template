'use strict';
import * as express from 'express';

const app = express();

app.get('/', helloWorld);

export function helloWorld(req: any, res: any) {
    res
        .status(200)
        .send('Hello, world!')
        .end();
};

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});