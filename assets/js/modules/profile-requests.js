let cachedProfiles;

const REMOTE_CACHE_URL =
  "https://raw.githubusercontent.com/nsmr0604/nsmr0604.github.io/profiles-cache/assets/profiles/profiles.json";
const LOCAL_CACHE_URL = "./assets/profiles/profiles.json";

async function fetchProfilesFrom(url) {
  const response = await fetch(url, { cache: "no-cache" });
  if (!response.ok) throw new Error(`Unable to load cached profiles from ${url}`);

  const data = await response.json();
  const profiles = data?.profiles ?? {};

  // Avatars are stored as files next to the JSON; resolve them against its URL.
  const base = new URL(url, location.href);
  for (const profile of Object.values(profiles)) {
    if (typeof profile?.avatar === "string" && !/^https?:\/\//.test(profile.avatar)) {
      profile.avatar = new URL(profile.avatar, base).href;
    }
  }
  return profiles;
}

export async function loadProfiles() {
  if (cachedProfiles) return cachedProfiles;

  try {
    cachedProfiles = await fetchProfilesFrom(REMOTE_CACHE_URL);
  } catch {
    cachedProfiles = await fetchProfilesFrom(LOCAL_CACHE_URL);
  }

  return cachedProfiles;
}
