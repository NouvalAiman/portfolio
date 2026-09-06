import { createClient } from "next-sanity";
import { sanityConfig } from "@/sanity/env";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
  apiVersion: sanityConfig.apiVersion,
  useCdn: sanityConfig.useCdn,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}