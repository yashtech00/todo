import mongoose from 'mongoose'
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
    
    const MONGODB_URI=`mongodb://${USERNAME}:${PASSWORD}@ac-tiem79q-shard-00-00.zha9q9c.mongodb.net:27017,ac-tiem79q-shard-00-01.zha9q9c.mongodb.net:27017,ac-tiem79q-shard-00-02.zha9q9c.mongodb.net:27017/?ssl=true&replicaSet=atlas-9hosl7-shard-0&authSource=admin&retryWrites=true&w=majority&appName=mern-Todo`

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => { 
        console.log('connected successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('server disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting to the server',error.message);
    })
}

export default Connection;