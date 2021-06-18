import * as dotenv from "dotenv";
import { Database, DatabaseDriver, DatabaseConfig, entities } from '../src'

(async () => {
  dotenv.config()
  const { Users, DocumentType } = entities

  const config: DatabaseConfig = {
    host: process.env.DATABASE_BANK_HOST,
    database: process.env.DATABASE_BANK_DATABASE,
    port: Number(process.env.DATABASE_BANK_PORT),
    username: process.env.DATABASE_BANK_USER,
    password: process.env.DATABASE_BANK_PASSWORD,
    driver: process.env.DATABASE_BANK_DRIVER as DatabaseDriver,
  }

  await Database.initializeConnection(config)
  try {
    
    const documentType = new DocumentType()
    documentType.name = "DUI"
    const result = await documentType.save()
    console.log(result)
  } catch (error) {
    console.log(error)
  }
})()