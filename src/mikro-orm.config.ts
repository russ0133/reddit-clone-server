import { __prod__ } from "./constants";
import { Options } from "@mikro-orm/core";
import path from "path";
import { User, Post } from "./entities/index";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    pathTs: path.join(__dirname, "./migrations"), // path to the folder with TS migrations (if used, we should put path to compiled files in `path`)
    glob: "!(*.d).{js,ts}",
  },
  entities: [Post, User],
  dbName: "topreddit",
  type: "postgresql",
  debug: !__prod__,
} as Options;
