import { client } from "@/sanity/sanity.client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client)

export default function urlFor(source){
  return builder.image(source)
}
