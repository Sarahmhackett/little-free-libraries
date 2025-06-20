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

This project enables a user to fill out a form to add a local 'Little Free Library'. The library is then displayed on a map along with all other Little Free Libraries in the area. Users can select a library to see more details, and from here they can add comments. The hope is people would use this to send a thank you for a book they've found.

- The form takes a name, address and image. Upon submit, the address is passed to a Google API to acquire the Long and Lat coords. The image is also sent to Cloudinary to be hosted.
- These details are all then saved into a MongoDB database of libraries.
- The coordinates and library Id is used to plot individual libraries onto a Mapbox map.
- On a library details page, comments can be added against each individual library.


## Preview (20/06)

Desktop: 

![image](https://github.com/user-attachments/assets/a0ad7283-e324-4809-8347-924305f712d5)

![image](https://github.com/user-attachments/assets/449a103b-96e7-4817-8507-54c2d23bf04c)

![image](https://github.com/user-attachments/assets/6603b71f-a0d7-4494-a5ae-760f8f5407ab)

Mobile:

![image](https://github.com/user-attachments/assets/b3c60faa-61a0-49b2-8038-4e1a07e344e3)

![image](https://github.com/user-attachments/assets/76f67185-e5bb-40b8-a1f9-0526161b898e)

![image](https://github.com/user-attachments/assets/8658e71d-f72a-403a-b05a-5350f62c1110)



