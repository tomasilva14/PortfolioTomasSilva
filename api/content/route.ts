import { NextResponse } from "next/server"
import { MongoClient } from "mongodb"

const MONGODB_URI = process.env.MONGODB_URI || process.env.NEXT_PUBLIC_MONGODB_URI || "mongodb://localhost:27017/portfolio"

let cached: { client?: MongoClient } = (global as any)._mongoCache || {}
if (!cached.client) (global as any)._mongoCache = cached

async function getClient() {
  if (cached.client) return cached.client
  const client = new MongoClient(MONGODB_URI)
  await client.connect()
  cached.client = client
  return client
}

export async function GET() {
  try {
    const client = await getClient()
    const db = client.db()

    const [projects, skillBlocks, journeySteps, contactSettings] = await Promise.all([
      db.collection("projects").find({}).toArray(),
      db.collection("skillblocks").find({}).toArray(),
      db.collection("journeysteps").find({}).toArray(),
      db.collection("contactsettings").find({}).toArray(),
    ])

    const contactSetting = contactSettings[0] || null

    return NextResponse.json({ projects, skillBlocks, journeySteps, contactSetting })
  } catch (err) {
    console.error(err)
    return new NextResponse(JSON.stringify({ error: "failed" }), { status: 500 })
  }
}
