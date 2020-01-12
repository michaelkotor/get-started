const MongoClient = require('mongodb').MongoClient;

module.exports = class Connection {
     async getClient() {
        const mongoClient = new MongoClient("mongodb://mongo:27017/", {useUnifiedTopology: true});
         let result;
         try {
             result = await mongoClient.connect();
         } catch (e) {
             console.log('I can\'t connect at all');
             throw e;
         }
         return result;
    };

    async getDatabase(databaseName) {
        let client;
        try {
            client = await this.getClient();
        } catch (e) {
            throw e;
        }
        const db = await client.db(databaseName);
        return db;
    }

    async getCollection(collectionName, databaseName) {
        let db;
        try {
            db = await this.getDatabase(databaseName);
        } catch (e) {
            throw e;
        }
        const collection = await db.collection(collectionName);
        return collection;
    }
};
