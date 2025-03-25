// bgImg is the background image to be modified.
// fgImg is the foreground image.
// fgOpac is the opacity of the foreground image.
// fgPos is the position of the foreground image in pixels. It can be negative and (0,0) means the top-left pixels of the foreground and background are aligned.
function composite(bgImg, fgImg, fgOpac, fgPos) {
    const fgImgData = fgImg.data;
    const bgImgData = bgImg.data;
    // iterate of each row of pixels
    for (let y = 0; y < bgImg.height; y++) {
        // skip processing row if fg's y pixel falls out of range
        if (y - fgPos.y < 0 || y - fgPos.y >= fgImg.height) {
            continue;
        }

        // iterate over each column of pixels
        for (let x = 0; x < bgImg.width; x++) {
            // skip processing pixel if fg's x falls out of range
            if (x - fgPos.x < 0 || x - fgPos.x > fgImg.width) {
                continue;
            }

            // init foreground image values to use to change background
            const fgIndex = ((y - fgPos.y) * fgImg.width + (x - fgPos.x)) * 4;
            const fgR = fgImgData[fgIndex];
            const fgG = fgImgData[fgIndex + 1];
            const fgB = fgImgData[fgIndex + 2];
            const fgA = fgImgData[fgIndex + 3];

            // skip fully transparent fg pixel
            if (fgA == 0) {
                continue;
            }

            // init background values to change
            const bgIndex = (y * bgImg.width + x) * 4;
            const bgR = bgImgData[bgIndex];
            const bgG = bgImgData[bgIndex + 1];
            const bgB = bgImgData[bgIndex + 2];

            // change bg rgb values using alpha blending formula
            bgImgData[bgIndex] = fgR * fgOpac + bgR * (1 - fgOpac);
            bgImgData[bgIndex + 1] = fgG * fgOpac + bgG * (1 - fgOpac);
            bgImgData[bgIndex + 2] = fgB * fgOpac + bgB * (1 - fgOpac);
        }
    }
}
