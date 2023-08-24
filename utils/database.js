
//tQEKNjg92YjW6e25


import mongoose from "mongoose";

let isConnected = false; // track connection state

export const connectToDb = async () => {

    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('MongoDb is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL,{
            dbName: 'share_prompt',
            useNewUrlPaser: true,
            useUnifiedTopology: true,
        })
        isConnected = true;

        console.log('MongoDb is connected');
    } catch (error) {
        console.log(error);
    }


}

