const express = require('express')
const { MongoClient } = require('mongodb')

const app = express()
const port = 3000

const uri = 'mongodb://localhost:27017'
const client = new MongoClient(uri)

const dbName = 'computer-lab-booking'

async function main() {
  try {
    // Connect to the MongoDB database
    await client.connect()

    app.use(express.json())

    app.post('/book', async (req, res) => {
      const labName = req.body.labName
      const startTime = new Date(req.body.startTime)
      const endTime = new Date(req.body.endTime)

      // Store the reservation in the database
      const result = await client
        .db(dbName)
        .collection('reservations')
        .insertOne({ labName, startTime, endTime })

      res.json({ success: true, reservation: result.ops[0] })
    })

    app.get('/labs', async (req, res) => {
      // Retrieve the list of available labs from the database
      const reservations = await client
        .db(dbName)
        .collection('reservations')
        .find({})
        .toArray()

      // Assume there are 3 labs available
      const labs = ['Lab A', 'Lab B', 'Lab C']

      // Remove labs that are already reserved
      for (const reservation of reservations) {
        const index = labs.indexOf(reservation.labName)
        if (index !== -1) {
          labs.splice(index, 1)
        }
      }

      res.json({ success: true, labs })
    })

    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`)
    })
  } catch (err) {
    console.error(err)
  }
}

main()
