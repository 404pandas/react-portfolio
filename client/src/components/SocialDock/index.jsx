import DescriptionIcon from "@mui/icons-material/Description";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { socialLinks } from "../../utils/links";
import "./socialdock.css";

const iconFor = {
  resume: DescriptionIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
};

// Fixed corner dock on the landing page (which has no nav bar), so the
// résumé / GitHub / LinkedIn are reachable from the very first screen.
export default function SocialDock() {
  return (
    <nav className="social-dock" aria-label="Résumé and profiles">
      {socialLinks.map(({ id, label, href }) => {
        const Icon = iconFor[id];
        return (
          <a
            key={id}
            href={href}
            className="social-dock-link"
            target="_blank"
            rel="noreferrer"
          >
            <Icon fontSize="small" aria-hidden="true" />
            <span>{label}</span>
          </a>
        );
      })}
    </nav>
  );
}
