import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `**/*.md`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    startDate: {
      type: "date",
      required: true,
    },
    endDate: {
      type: "date",
      required: false,
    },
    articlePublishedAt: {
      type: "date",
      required: true,
    },
    articleUpdatedAt: {
      type: "date",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
    techstack: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
    link: {
      type: "string",
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (project) => project._raw.flattenedPath,
    },
  },
}));

export default makeSource({
  contentDirPath: "src/app/referenzen/content",
  documentTypes: [Project],
});
