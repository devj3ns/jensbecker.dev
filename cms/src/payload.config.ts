import path from "path";

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
    autoLogin:
      process.env.AUTO_LOGIN === "true"
        ? {
            email: process.env.AUTO_LOGIN_EMAIL,
            password: process.env.AUTO_LOGIN_PASSWORD,
          }
        : false,
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
    seoPlugin({
      collections: ["projects"],
    }),
  ],
  localization: {
    locales: [
      {
        code: "de",
        label: "Deutsch",
      },
      {
        code: "en",
        label: "Englisch",
      },
    ],
    defaultLocale: "de",
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
});
