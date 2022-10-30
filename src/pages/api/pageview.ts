import type { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI as string

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') return res.status(401).end()

  // get the relative path of the page
  const referer = req.headers.referer as string
  const path = referer.replace(/^[^:]+:\/\/[^/]+/, '').replace(/#.*/, '')

  // get the current date and format it "dd/mm/yyyy"
  const date = new Date()
  const day = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

  // initialize the MongoDB client
  const client = new MongoClient(uri)

  try {
    // connect to the MongoDB database and collection
    const database = client.db('pageviews')
    const collection = database.collection('pageviews')

    // insert the page view into the database
    await collection.updateOne(
      { day },
      { $inc: { [path]: 1 } },
      { upsert: true }
    )
    res.status(201).end()
  } catch (err) {
    console.error(err)
    res.status(500).end()
  } finally {
    await client.close()
  }
}
