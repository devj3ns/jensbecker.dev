import { CollectionConfig } from "payload/types";
import { populatePublishedAt } from "../hooks/populatePublishedAt";
import { slugField } from "../fields/slug";

const Testimonials: CollectionConfig = {
  slug: "testimonials",
  labels: {
    singular: "Testimonial",
    plural: "Testimonials",
  },
  admin: {
    useAsTitle: "author",
    defaultColumns: ["author", "company", "publishedAt"],
  },
  hooks: {
    beforeChange: [populatePublishedAt],
  },
  fields: [
    slugField("author"),
    {
      name: "author",
      type: "text",
      required: true,
    },
    {
      name: "company",
      type: "text",
      required: true,
    },
    {
      name: "companyUrl",
      type: "text",
      required: true,
      validate: (value: string) => {
        const pattern = new RegExp(
          "^(https?:\\/\\/)" + // protocol
            "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name and extension
            "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
            "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
            "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
            "(\\#[-a-z\\d_]*)?$",
          "i"
        );

        return !!pattern.test(value) ? null : "Invalid URL";
      },
    },
    {
      name: "body",
      type: "richText",
      required: true,
      localized: true,
    },
    {
      name: "project",
      type: "relationship",
      relationTo: "projects",
      required: true,
    },
  ],
};

export default Testimonials;
