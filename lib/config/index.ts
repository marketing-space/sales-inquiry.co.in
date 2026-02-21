// import { lodhaAmaraSiteConfig } from "../config/regency-anatham";
import { routes } from "./routes";

import { rahejaLunarisSiteConfig } from "./raheja-lunaris";
// import { siteConfig } from "./site";

const configs = {
  // [routes.default]: lodhaAmaraSiteConfig,
  [routes.RahejaLunaris]: rahejaLunarisSiteConfig
};

export function getSiteConfig(site?: string) {
  return site
    ? configs[site as keyof typeof configs] || configs[routes.default]
    : configs[routes.default];
}
