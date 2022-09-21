import api from "./_api.js";

export async function get(req, res, next) {
  const response = await api.getPostPreviews(req.params);
  if (response !== null) {
    res.setHeader("Content-Type", "application/json");
    // to be changed to https://bezole.com for production
    // res.setHeader("Access-Control-Allow-Origin", accessControlAllowOrigin);
    res.setHeader("Vary", "Origin");
    res.end(JSON.stringify(response));
  } else {
    next();
  }
}
