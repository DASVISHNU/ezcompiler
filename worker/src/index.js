import { json } from "express";
import { createClient } from "redis";
const client = createClient();
client.connect()
    .then(async () => {
    while (1) {
        const response = await client.rPop("problems");
        if (!response) {
            await new Promise((r) => setTimeout(r, 1000));
            continue;
        }
        const parsedResponse = JSON.parse(response);
        const code = parsedResponse.code;
        const language = parsedResponse.language;
        console.log("processing question for user" + parsedResponse.userId);
        if (language === "c++") {
            console.log("Running users c++ code");
            await new Promise((r) => setTimeout(r, 5000));
        }
    }
});
//# sourceMappingURL=index.js.map