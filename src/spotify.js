// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/en/authorize";
const redirectUri = "http://192.168.1.100:8123/auth/external/callback";
// "http:%2F%2Flocalhost:3000%2Fcallback";
const clientId = "35b48466b82f4cb2802fa40f83654390";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

//string interpolation
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
