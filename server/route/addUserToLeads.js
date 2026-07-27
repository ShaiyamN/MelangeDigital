/**
 * Based on this article
 * https://medium.com/geekculture/using-zoho-api-for-leads-in-node-js-ea204e98d41b
 */

const { default: axios } = require("axios");

/**
 * IMPORTANT: pay attention to the super-domain ("com", "eu", etc).
 * Must be the same you used for the client registration.
 * Otherwise will cause: `{ "error": "invalid_client" }`
 */
const OAuthEndpoint = "https://accounts.zoho.in/oauth/v2";
const APIEndpoint = "https://www.zohoapis.in/crm/v2";

/**
 * Doesn't really needed, by required by API
 */
const RedirectURL = "https://melange-server-ljcl.onrender.com";

const contentType = {
  json: "application/x-www-form-urlencoded",
};
const method = {
  post: "POST",
};

/**
 * Step 1 of 2 - get fresh `access_token` using generated on init `ZOHO_REFRESH_TOKEN`
 */
const getAccessToken = async () => {
  const params = {
    grant_type: "refresh_token",
    redirect_uri: RedirectURL,
    refresh_token: process.env.REFRESH_TOKEN,
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
  };
  const URLParams = new URLSearchParams();

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      URLParams.append(key, params[key]);
    }
  }

  const requestURL = `${OAuthEndpoint}/token?${URLParams.toString()}`;
  const options = {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  };

  const responseRAW = await axios.post(requestURL, options);
  // const response = await responseRAW.json();
  console.log(
    "testing------------------------------------------------------------------------------------------",
    responseRAW.data
  );
  const result = responseRAW?.data?.access_token;
  // console.log("Debugger", result)

  return result;
};

/**
 * Step 2 of 2 - use `access_token` to create a new Lead
 */
const addUserToLeads = async (req, res) => {
  try {
    const {
      Last_Name: lastName,
      Email: email,
      Phone: phone,
      Company: company,
      Description: description,
      Service_Looking_For: selectedCategories,
      Country: selectedCountry,
    } = req.body.data;
    const accessToken = await getAccessToken();
    console.log("🚀 ~ accessToken:", accessToken);

    const requestURL = `${APIEndpoint}/Leads`;
    const body = JSON.stringify({
      data: [
        {
          Email: email,
          Company: company,
          Last_Name: lastName,
          Phone: phone,
          Description: description,
          Service_Looking_For: selectedCategories,
          Country: selectedCountry,
        },
      ],
      trigger: ["approval", "workflow", "blueprint"],
    });
    const options = {
      method: method.post,
      body,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Zoho-oauthtoken ${accessToken}`,
      },
    };
    const responseRaw = await fetch(requestURL, options);
    const response = await responseRaw.json();
    console.log(
      "🚀 ~ responseRaw:",
      JSON.stringify(response),
      responseRaw,
      requestURL
    );
  } catch (error) {
    console.error(error);
  }
};

module.exports = addUserToLeads;
