import { createApp } from "./utils/createApp";
import { config } from "dotenv"

config()

const PORT = process.env.PORT || 3001

async function main() {
    try {
        const app = createApp()
        app.listen(PORT, () => console.log(`Runing on ${PORT}`));
    } catch(err){
        console.log(err)
    }
}


main()