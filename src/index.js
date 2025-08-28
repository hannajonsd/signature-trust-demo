const express = require('express');
const ffmpeg = require('fluent-ffmpeg');

const app = express();

app.post('/process', (req, res) => {
    ffmpeg('input.mp4')
        .output('output.mp4')
        .run();
});

app.listen(3000);
