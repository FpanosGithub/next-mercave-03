import { type } from "os"

type ficha_tecnica_vehiculo = {
  imagen: string,
  slug: Slug,
  num_doc: number,
  version: number,
  Fecha: Date,
}   
interface Image {
  _type: 'image';
  asset: Reference;
}
interface Slug {
  _type: 'slug';
  current: string;
}
interface Reference {
  _ref: string;
  _type: 'reference';
}
interface Block {
  _key:string;
  _type:"block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "bloqkquote";
}
interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
  }
