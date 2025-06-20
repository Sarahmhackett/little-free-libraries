This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## About this project

This project enables a user to fill out a form to add a local 'Little Free Library'. The library is then displayed on a map along with all other Little Free Libraries in the area.

Users can select a library to see more details, and from here they can add comments. The hope is people would use this to send a thank you for a book they've found.

## Behind the scenes

The form takes a name, address and image. Upon submit, the address is passed to a Google API to acquire the Long and Lat coords. The image is also sent to Cloudinary to be hosted.

These details are all then saved into a MongoDB database of libraries.

The coordinates and library Id is used to plot individual libraries onto a Mapbox map.

On a library details page, comments can be added against each individual library.
