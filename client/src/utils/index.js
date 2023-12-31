import FileSaver from 'file-saver';

import { surpriseMePrompts } from '../constants';

//  Get random prompt generator function w/ paramater
export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    if(randomPrompt === prompt) return getRandomPrompt(prompt)

    return randomPrompt;
}

// Download image function w/ paramaters
export async function downloadImage(_id, photo) {
    console.log('index.js, line:18')

    FileSaver.saveAs(photo, `download-${_id}.jpg`);

};