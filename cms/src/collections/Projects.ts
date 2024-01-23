import { CollectionConfig } from "payload/types";
import { populatePublishedAt } from "../hooks/populatePublishedAt";
import { lexicalHTML } from "@payloadcms/richtext-lexical";
import { slugField } from "../fields/slug";

const Projects: CollectionConfig = {
  slug: "projects",
  labels: {
    singular: "Projekt",
    plural: "Projekte",
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "publishedAt"],
  },
  hooks: {
    beforeChange: [populatePublishedAt],
  },
  versions: {
    drafts: true,
  },
  fields: [
    slugField("title"),
    {
      name: "publishedAt",
      type: "date",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "title",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "body",
      type: "richText",
      required: true,
      localized: true,
    },
    lexicalHTML("body", { name: "bodyHtml" }),
  ],
};

export default Projects;
