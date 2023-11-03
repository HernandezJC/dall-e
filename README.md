Final Project:

DALL-E 2.0




Deployment:
The web application is deployed at:

Front-end: jc-dall-e.online
Back-end: https://dall-e-9igb.onrender.com




How to use the app:

- Visit website
- You can search on searchbar all posts that are already generated
- You create your own AI generated images by clicking create button.
- Add your name.
- Add a prompt or choose surpise me button to generate a random prompt.
- After image is generated in preview you can Share the image with the community




Technoligies:

MongoDB, Express.js, React, and Node.js.

Dependencies: cloudinary, cors, dotenv, express, mongoose, nodemon, openai




Oustanding buggs:
- Cannot generate image due to error:

<!-- ERROR when clicking generate button to generate AI image, error message within server terminal below -->

<!-- MongooseError: The `uri` parameter to `openUri()` must be a string, got "undefined". Make sure the first parameter to `mongoose.connect()` or `mongoose.createConnection()` is a string.
    at NativeConnection.createClient (/Users/jchernandez/dalle-clone/server/node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js:206:11)
    at NativeConnection.openUri (/Users/jchernandez/dalle-clone/server/node_modules/mongoose/lib/connection.js:755:34)
    at Mongoose.connect (/Users/jchernandez/dalle-clone/server/node_modules/mongoose/lib/index.js:404:15)
    at connectDB (file:///Users/jchernandez/dalle-clone/server/mongodb/connect.js:5:14)
    at startServer (file:///Users/jchernandez/dalle-clone/server/index.js:29:9)
    at file:///Users/jchernandez/dalle-clone/server/index.js:36:1
    at ModuleJob.run (node:internal/modules/esm/module_job:192:25) -->

Project Citation:
- Inspired by: https://www.youtube.com/watch?v=tllZWCQZ9_0&t=15817s
- https://github.com/adrianhajdin/project_ai_mern_image_generation.git
