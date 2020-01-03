const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectId;
module.exports = class Connection {
     async getClient() {
        const mongoClient = new MongoClient("mongodb://localhost:27017", {useUnifiedTopology: true});
        //let con = await mongoClient.connect();
        //console.log(con);
         const result = await mongoClient.connect();
         return result;
    };

    async getDatabase(databaseName) {
        const client = await this.getClient();
        //console.log(client);
        const db = await client.db(databaseName);
        //console.log(db);
        return db;
    }

    async getCollection(collectionName, databaseName) {
        const db = await this.getDatabase(databaseName);
        //console.log(db);
        const collection = await db.collection(collectionName);
        return collection;
    }

    async convertId(_id) {
        const o_id = ObjectID(_id);
        return o_id;
    }
};
