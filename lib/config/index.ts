import { lodhaAmaraSiteConfig } from "../config/regency-anatham";
import { routes } from "./routes";
// import { siteConfig } from "./site";

const configs = {
  [routes.default]: lodhaAmaraSiteConfig,
  [routes.Anantam]: lodhaAmaraSiteConfig,
};

export function getSiteConfig(site?: string) {
  return site
    ? configs[site as keyof typeof configs] || configs[routes.default]
    : configs[routes.default];
}
