const config = require('config')
const mongodb = require('mongodb')
const { from } = require('rxjs')

// getMongoConf :: () -> String
const getMongoConf = () => config.get('mongodb')

// buildMongoUrl :: ({ port:: String, hostname:: String, database::String }) -> String
const buildMongoUrl = ({ port, hostname, database }) =>
  `mongodb://${hostname}:${port}/${database}`

// find :: (MongoFilterSchema, String) -> Promise [a]
const find = async (query, collectionName) => {
  const mongoConf = getMongoConf()
  const url = buildMongoUrl(mongoConf)
  let client = undefined
  try {
    client = new mongodb.MongoClient(url)
    await client.connect()
    const db = client.db(mongoConf.database)
    const collection = db.collection(collectionName)
    const cursor = collection.find(query)
    const documents = await cursor.toArray()
    return documents
  } catch (err) {
    console.error('Error querying MongoDB', query, err)
    throw err
  } finally {
    if (client) {
      try {
        await client.close()
        client = undefined
      } catch (err) { }
    }
  }
}


// find$ :: (MongoFilterSchema, String) -> Observable [a]
const find$ = (query, collectionName) => from(find(query, collectionName))

module.exports = {
  find$,
}
