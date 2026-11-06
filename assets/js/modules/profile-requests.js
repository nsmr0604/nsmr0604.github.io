let cachedProfiles;

export async function loadProfiles() {
  if (cachedProfiles) return cachedProfiles;

  const response = await fetch("./data/profiles.json", { cache: "no-cache" });
  if (!response.ok) throw new Error("Unable to load cached profiles");

  const data = await response.json();
  cachedProfiles = data?.profiles ?? {};
  return cachedProfiles;
}
