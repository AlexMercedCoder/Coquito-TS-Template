import dotenv from "dotenv"

export default function loadEnv(){
    switch(process.env.NODE_ENV){
        
        case "development":
            dotenv.config({path: "./.development.env"})
            break

        case "production":
            dotenv.config({path: "./.production.env"})
            break

        default:
            dotenv.config()
            break
    }
}