let cachedProfiles;

const REMOTE_CACHE_URL =
  "https://raw.githubusercontent.com/nsmr0604/nsmr0604.github.io/profiles-cache/assets/data/profiles.json";
const LOCAL_CACHE_URL = "./assets/data/profiles.json";

async function fetchProfilesFrom(url) {
  const response = await fetch(url, { cache: "no-cache" });
  if (!response.ok) throw new Error(`Unable to load cached profiles from ${url}`);

  const data = await response.json();
  return data?.profiles ?? {};
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
