import { createConnection, Connection } from 'typeorm'
import * as models from '../entities'

export interface ListQueryOptions {
  filter: any
  page: number
  limit: number
  sort: any
  relations: string[]
}

export interface DatabaseConfig {
  host: string
  database: string
  port: number
  username: string
  password: string
  driver: DatabaseDriver
}

export enum DatabaseDriver {
  MY_SQL = 'mysql',
  MARIA_DB = 'mariadb',
  POSTGRE_SQL = 'postgres',
  COCKROACH_DB = 'cockroachdb',
  MONGO_DB = 'mongodb',
}


type entityId = string | number

export class Database{
  static initializeConnection = async (config: DatabaseConfig): Promise<Connection> => {
    try {
      const entities = Object.keys(models).map(modelName => {
        return models[modelName]
      });

      const connection = createConnection({
        type: config.driver,
        host: config.host,
        port: config.port,
        username: config.username,
        password: config.password,
        database: config.database,
        entities: [
          ...entities
        ],
        synchronize: false,
      })
      return connection
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  static list = async (repository, options: ListQueryOptions) => {

  }

  static get =  async <T>(repository, id: entityId): Promise<T | null> => {
    try {
      const result = await repository.remove(id);
      return result
    } catch (error) {
      console.log(error)
      return null
    }
  }

  static update = async (repository, id: entityId, data: any) => {
    try {
      const result = await repository.remove(id);
      return result
    } catch (error) {
      console.log(error)
      return null
    }
  }

  static delete = async (repository, entity): Promise<boolean> => {
    try {
      await repository.remove(entity);
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }
}