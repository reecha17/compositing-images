# Image Compositing with Alpha Blending

This project is from Cem Yuskel's CS 4600 course Introduction to Computer Graphics. It implements a JavaScript function to composite a foreground image over a background image using **alpha blending**. The blending process combines the pixel data of two images based on the alpha channel of the foreground image, allowing for smooth transitions and transparency effects.

---

## Features

- **Alpha Blending**: Combines foreground and background images based on the alpha channel of the foreground image.
- **Pixel-Level Manipulation**: Access and modify individual pixel data using the `<canvas>` API.
- **Positioning**: Allows compositing the foreground image at a specific position on the background.
- **Transparency Handling**: Supports fully transparent and partially transparent pixels.

---

## How It Works

The project uses the HTML5 `<canvas>` element and its `getImageData` and `putImageData` methods to manipulate pixel data. The alpha blending formula is applied to each pixel to calculate the resulting color and transparency.

### Alpha Blending Formula

For each pixel, the resulting color channels (R, G, B) are calculated as:

Cb = Cf * Af + Cb * (1 - Af)

Where:
- Cb: The resulting background color channel value (red, green, or blue).
- Cf: The color channel value of the foreground pixel.
- Cb: The color channel value of the background pixel.
- Af: The normalized alpha value of the foreground pixel (between 0 and 1).

---

## What I Learned

During this project, I gained valuable insights into several key concepts:

### 1. **Canvas API**
- Learned how to use the `<canvas>` element to draw images and manipulate pixel data.
- Explored methods like `getImageData` and `putImageData` for accessing and modifying image data.

### 2. **Alpha Blending**
- Understood the mathematical formula for blending colors based on transparency.
- Learned how the alpha channel affects the compositing process, enabling smooth transitions and transparency effects.

### 3. **Pixel-Level Manipulation**
- Discovered how to map 2D coordinates (\(x, y\)) to a 1D array index in the `ImageData` object.
- Practiced iterating through pixel data and modifying RGBA values for individual pixels.

### 4. **Handling Transparency**
- Learned how to handle fully transparent and partially transparent pixels.
- Implemented logic to skip blending for fully transparent pixels to optimize performance.

### 5. **Positioning and Bounds Checking**
- Implemented logic to composite the foreground image at a specific position on the background.
- Learned how to ensure the foreground image does not exceed the bounds of the canvas.

### 6. **Cross-Origin Images**
- Learned about the `crossOrigin` property of the `Image` object to handle images loaded from external domains.

---

## How to Run

### Prerequisites
- A modern web browser that supports the HTML5 `<canvas>` API.
- Two images: a **background image** and a **foreground image** (preferably with transparency).

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/reecha17/compositing-images.git
   cd compositing-images/
   ```
2. Open the `index.html` file in your browser.
3. Replace the image paths in the JavaScript code with your own images.
4. View the composited image on the canvas.

---

## Challenges

- **Performance**: Iterating through large images pixel-by-pixel can be computationally expensive. Optimizing the loop and skipping unnecessary calculations helped improve performance.
- **Bounds Checking**: Ensuring the foreground image did not exceed the canvas dimensions required careful index calculations.

---
