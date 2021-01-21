import * as ContentStack from "contentstack";

// console.log(typeof process.env.CMS_API_KEY, process.env.CMS_DELI_TOKEN, process.env.CMS_EVS);

const Stack = ContentStack.Stack({
	api_key: process.env.CMS_API_KEY,
	delivery_token: process.env.CMS_DELI_TOKEN,
	environment: process.env.CMS_EVS,
	region: "us",
});

export default Stack;
