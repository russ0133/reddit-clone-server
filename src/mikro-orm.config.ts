import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { Options } from "@mikro-orm/core";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    pathTs: path.join(__dirname, "./migrations"), // path to the folder with TS migrations (if used, we should put path to compiled files in `path`)
    glob: "!(*.d).{js,ts}",
  },
  entities: [Post],
  dbName: "topreddit",
  type: "postgresql",
  debug: !__prod__,
} as Options;
