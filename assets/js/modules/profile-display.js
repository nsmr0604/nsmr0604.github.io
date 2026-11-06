import { loadProfiles } from "./profile-requests.js";

function isWebUrl(value) {
  if (!value) return false;
  try {
    return ["http:", "https:"].includes(new URL(value).protocol);
  } catch {
    return false;
  }
}

function updateProfile(card, profile = {}) {
  try {
    const displayName = card.querySelector(".social-display-name");
    const account = card.querySelector(".social-account");
    const avatar = card.querySelector(".profile-avatar");

    if (typeof profile.name === "string" && profile.name.trim()) {
      displayName.textContent = profile.name.trim();
      displayName.hidden = false;
    }

    if (typeof profile.screenName === "string" && profile.screenName.trim()) {
      account.textContent = `@${profile.screenName.trim().replace(/^@/, "")}`;
    }

    if (isWebUrl(profile.avatar)) {
      avatar.src = profile.avatar;
      avatar.hidden = false;
    }
  } catch {
    // Keep the statically rendered account name when profile data is unavailable.
  }
}

export async function updateProfiles() {
  let profiles = {};

  try {
    profiles = await loadProfiles();
  } catch {
    // Keep static fallback when the cached profile file is missing.
  }

  document.querySelectorAll("[data-profile]").forEach((card) => {
    updateProfile(card, profiles[card.dataset.profile]);
  });
}
