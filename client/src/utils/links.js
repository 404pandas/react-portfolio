// One place for the "how do I reach / evaluate you" links that recruiters
// look for first. Anything left as "" is simply not rendered.
export const RESUME_URL = "/MaryEleniusResume.pdf";
export const GITHUB_URL = "https://github.com/404pandas";
export const LINKEDIN_URL = ""; // TODO: paste your LinkedIn profile URL

export const socialLinks = [
  { id: "resume", label: "Résumé", href: RESUME_URL },
  { id: "github", label: "GitHub", href: GITHUB_URL },
  { id: "linkedin", label: "LinkedIn", href: LINKEDIN_URL },
].filter((l) => l.href);
