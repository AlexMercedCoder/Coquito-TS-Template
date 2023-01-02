import { CorsOptions } from "cors";

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    const whitelist: Array<String> = ["http://example.com"];

    //in production?
    if (process.env.NODE_ENV === "production") {
      if (whitelist.includes(origin as String)) {
        callback(null, true);
      } else {
        callback(new Error("Blocked by CORS"));
      }
    } else {
      callback(null, true);
    }
  },
};

export default corsOptions
