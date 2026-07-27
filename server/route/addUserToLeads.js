const { default: axios } = require("axios");

// Zoho region must match the OAuth client registration (.in / .com / .eu).
const OAuthEndpoint = "https://accounts.zoho.in/oauth/v2";
const APIEndpoint = "https://www.zohoapis.in/crm/v2";
const RedirectURL = "https://melange-server-ljcl.onrender.com";

const getAccessToken = async () => {
  const params = new URLSearchParams({
    grant_type: "refresh_token",
    redirect_uri: RedirectURL,
    refresh_token: process.env.REFRESH_TOKEN,
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
  });

  const { data } = await axios.post(
    `${OAuthEndpoint}/token?${params}`,
    null,
    { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
  );
  return data?.access_token;
};

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
    const responseRaw = await fetch(`${APIEndpoint}/Leads`, {
      method: "POST",
      body: JSON.stringify({
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
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Zoho-oauthtoken ${accessToken}`,
      },
    });
    const response = await responseRaw.json();
    if (!responseRaw.ok) {
      return res.status(responseRaw.status).json(response);
    }
    return res.json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to create lead" });
  }
};

module.exports = addUserToLeads;
