export const profileRequests = {
  twitter: async () => {
    const response = await fetch(
      "https://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names=nsmr0604",
    );
    if (!response.ok) throw new Error("Unable to load Twitter profile");
    const [profile] = await response.json();
    return {
      name: profile?.name,
      avatar: profile?.profile_image_url_https,
    };
  },
  misskey: async () => {
    const response = await fetch("https://misskey.io/api/users/show", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "nsmr0604" }),
    });
    if (!response.ok) throw new Error("Unable to load Misskey profile");
    const profile = await response.json();
    return { name: profile.name, avatar: profile.avatarUrl };
  },
  bluesky: async () => {
    const response = await fetch(
      "https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor=nsmr0604.gee.jp",
    );
    if (!response.ok) throw new Error("Unable to load Bluesky profile");
    const profile = await response.json();
    return { name: profile.displayName, avatar: profile.avatar };
  },
  mastodon: async () => {
    const response = await fetch(
      "https://pawoo.net/api/v1/accounts/lookup?acct=nsmr0604",
    );
    if (!response.ok) throw new Error("Unable to load Mastodon profile");
    const profile = await response.json();
    return { name: profile.display_name, avatar: profile.avatar_static || profile.avatar };
  },
  github: async () => {
    const response = await fetch("https://api.github.com/users/nsmr0604");
    if (!response.ok) throw new Error("Unable to load GitHub profile");
    const profile = await response.json();
    return { name: profile.name, avatar: profile.avatar_url };
  },
};
