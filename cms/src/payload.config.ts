import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import {
  HTMLConverterFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import seoPlugin from "@payloadcms/plugin-seo";
import { buildConfig } from "payload/config";

import Users from "./collections/Users";
import Projects from "./collections/Projects";

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      HTMLConverterFeature({}),
    ],
  }),
  collections: [Users, Projects],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [
    payloadCloud(),
    seoPlugin({
      collections: ["projects"],
    }),
  ],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
    push: false, // see https://github.com/payloadcms/payload/issues/4580
  }),
});
