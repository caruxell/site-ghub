import * as contentful from "contentful";
import * as dotenv from "dotenv";
dotenv.config();

// const contentful = require("contentful");
// require("dotenv").config();

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: "master",
  accessToken: process.env.CONTENTFUL_DELIVERY_API,
});

const getEntries = async () => {
  const entries = await client.getEntries();
  const { items } = entries;
  if (items) return items;
  return null;
};

const getEntry = async (entryId) => {
  if (!entryId) return;
  try {
    const entry = await client.getEntry(entryId);
    return entry || null;
  } catch (err) {
    throw err;
  }
};

const getContentTypes = async () => {
  try {
    const contentTypes = await client.getContentTypes();
    return contentTypes || null;
  } catch (err) {
    throw err;
  }
};

const getContentType = async (contentTypeId) => {
  if (!contentTypeId) return;
  try {
    const contentType = await client.getContentType(contentTypeId);
    return contentType || null;
  } catch (err) {
    throw err;
  }
};

const getPostPreviews = async (params) => {
  if (!params) return;
  const { lang } = params;
  try {
    const contentType = "post";
    const content = await client.getEntries({
      content_type: contentType,
      "fields.lang": lang,
    });
    return content || null;
  } catch (err) {
    console.error(err.details);
    throw err;
  }
};

const getLocales = async () => {
  const content = client.getLocales({
    content_type: "post",
  });
  return content;
};

// romanian 1YfqHwDqunNyezsWyXh1ex
// english 33gzuowrVc1IDZNRpiKoiq
// getPostPreviews({ lang: "ro" }).then((c) => console.log(JSON.stringify(c)));
// getLocales().then((c) => console.log(JSON.stringify(c)));

export default {
  getContentType,
  getContentTypes,
  getEntries,
  getEntry,
  getPostPreviews,
};
