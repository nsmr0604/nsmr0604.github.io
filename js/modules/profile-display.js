import { profileRequests } from "./profile-requests.js";

function isWebUrl(value) {
  if (!value) return false;
  try {
    return ["http:", "https:"].includes(new URL(value).protocol);
  } catch {
    return false;
  }
}

async function updateProfile(card, getProfile) {
  try {
    const profile = await getProfile();
    const displayName = card.querySelector(".social-display-name");
    const avatar = card.querySelector(".profile-avatar");

    if (typeof profile.name === "string" && profile.name.trim()) {
      displayName.textContent = profile.name.trim();
      displayName.hidden = false;
    }

    if (isWebUrl(profile.avatar)) {
      avatar.src = profile.avatar;
      avatar.hidden = false;
    }
  } catch {
    // Keep the statically rendered account name when a profile API is unavailable.
  }
}

export function updateProfiles() {
  document.querySelectorAll("[data-profile]").forEach((card) => {
    const getProfile = profileRequests[card.dataset.profile];
    if (getProfile) updateProfile(card, getProfile);
  });
}
