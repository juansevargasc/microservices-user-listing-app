import { ApolloServer } from "apollo-server-express";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";


import resolvers from "#root/graphql/resolvers";
import typeDefs from "#root/graphql/typeDefs"; 
import accessEnv from "#root/helpers/accessEnv";

const PORT = accessEnv("PORT", 7300);


const apolloServer = new ApolloServer({
    //context: a => a,
    resolvers,
    typeDefs
});

const startServer = async () => {
    await apolloServer.start();
  
    const app = express();
  
    app.use(cookieParser());
    app.use(
      cors({
        origin: (origin, cb) => cb(null, true),
        credentials: true,
      })
    );
  
    apolloServer.applyMiddleware({ app, cors: false, path: "/graphql" });
  
    app.listen(PORT, "0.0.0.0", () => {
      console.info(`API Gateway listening on ${PORT}`);
    });
  };
  
  startServer();

// const app = express();

// app.use(cookieParser());        // This is the cookie parser middleware, which allows to parse cookies from the request headers.


// app.use(
//     cors({
//         origin: (origin, cb) => cb(null, true),
//         credentials: true
//     })
// );

// apolloServer.applyMiddleware({ app, cors: false, path: "/graphql" });

// app.listen(PORT, "0.0.0.0", () => {
//     console.info(`API Gateway listening on ${PORT}`);
// });