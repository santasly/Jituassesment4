import * as dotenv from 'dotenv';

dotenv.config();

export const dbConfig ={
      user: process.env.db_user,
      password: process.env.db_pass,
      database: process.env.db_name,
      server: 'localhost',
      pool:{
            max: 10,
            min: 1,
            idleTimeoutMillis: 30000
      },
      options:{
            encrypt: false,
            trustCertificate: true
      }
}