import * as contentStack from "contentstack";

console.log(
  "Stack Initialize",
  process.env.CMS_API_KEY,
  process.env.CMS_DELI_TOKEN,
  process.env.CMS_EVS
);

const Stack = contentStack.Stack({
  api_key: process.env.CMS_API_KEY,
  delivery_token: process.env.CMS_DELI_TOKEN,
  environment: process.env.CMS_ENV,
});

export default Stack;
