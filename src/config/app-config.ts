import packageJson from "../../package.json";

const currentYear = new Date().getFullYear();

export const APP_CONFIG = {
  name: "Slack EI",
  version: packageJson.version,
  copyright: `© ${currentYear}, Slack EI.`,
  meta: {
    title: "Slack EI - Slack Data Export and Import All-in-One Tool",
    description: "Slack EI",
  },
};
