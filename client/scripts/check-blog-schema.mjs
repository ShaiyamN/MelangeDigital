import assert from "node:assert/strict";
import {
  omitEmpty,
  generateBlogSchema,
  validateBlogSchema,
  activeBlogSchema,
} from "../src/utils/blogSchema.js";

assert.deepEqual(omitEmpty({ a: "", b: null, c: "x", d: {} }), { c: "x" });

const empty = generateBlogSchema({});
assert.equal(empty["@type"], "BlogPosting");
assert.equal(empty["@context"], "https://schema.org");
assert.ok(!("image" in empty));
assert.ok(!("articleSection" in empty));
assert.ok(!("keywords" in empty));
assert.ok(!("video" in empty));
assert.ok(!("url" in empty));

const full = generateBlogSchema({
  title: "Hello",
  slug: "hello",
  image: "https://example.com/a.jpg",
  author: "Mélange Digital",
  date: "Sep 14, 2026",
  categories: ["seo"],
  focusKeywords: "seo, blogs",
  contentBlocks: [{ type: "video", url: "https://youtu.be/x" }],
});
assert.equal(full.headline, "Hello");
assert.equal(full.image, "https://example.com/a.jpg");
assert.equal(full.author["@type"], "Organization");
assert.equal(full.articleSection, "seo");
assert.equal(full.video["@type"], "VideoObject");
assert.equal(full.url, "https://melangedigital.co/blogs/hello");

assert.equal(validateBlogSchema("{").ok, false);
assert.equal(validateBlogSchema("{}").ok, false);
assert.equal(validateBlogSchema(JSON.stringify({ "@type": "BlogPosting" })).ok, false);
assert.equal(validateBlogSchema(JSON.stringify(full)).ok, true);

assert.deepEqual(
  activeBlogSchema({ schemaMode: "custom", customSchema: { "@type": "BlogPosting" }, generatedSchema: full }),
  { "@type": "BlogPosting" }
);
assert.equal(activeBlogSchema({ schemaMode: "auto", generatedSchema: full }), full);

console.log("check-blog-schema: ok");
