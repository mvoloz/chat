export const SOCKET_SERVER_URL = process.env.SOCKET_SERVER_HOST;
export const GIPHY_API_KEY = process.env.GIPHY_API_KEY;
export const GIPHY_URI = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=`;
export const GIPHY_TRIGGER = '/giphy';
export const GIPHY_REGEX_TEST = /(^\/giphy )/g;
