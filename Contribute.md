## Manual Installation
 - Install Node.js locally ()
 - Clone this repos locally
 - Install dependecies (npm install)
 - Start DB locally
    - docker run -e POSTGRES_PASSWORD=mysceret -d -p 5432:5432 postgres
    - Go to neon.db and get your Db credential
 - Change the .env file and update your DB credential
 - npx prisma migrate dev
 - npx prisma generate
 - npm run build
 - npm run start

## Docker Installation
 - Install Docker
 - Create Network - `docker network create user_app`
 - Start Postgress
   - `docker run --name postgres --network user_app -e POSTGRES_PASSWORD=mysceret -d -p 5432:5432 postgres`
 - Build The Image - `docker build --network=host -t user_app .`
 - Start the Imge - `docker run -e DATABASE_URL=postgresql://postgres:mysceret@postgres:5432/postgres --network connect user_app -p 3000:3000 user_app`


## Docker Componse Installation Steps
 - Install docker, docker-compose
 - Run `docker-compose up`