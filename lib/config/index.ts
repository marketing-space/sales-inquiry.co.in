import { lodhaAmaraSiteConfig } from "../config/regency-anatham";
import { arkadeBhandupSiteConfig } from "./arkade-bhandup";
import { routes } from "./routes";
import { rustomjeeDombivliConfig } from "./rustomjee-dombivli";
// import { siteConfig } from "./site";

const configs = {
  [routes.default]: lodhaAmaraSiteConfig,
  [routes.Anantam]: lodhaAmaraSiteConfig,
  [routes.RustomjeeDombivli]: rustomjeeDombivliConfig,
  [routes.ArkadeBhandup]: arkadeBhandupSiteConfig,
};

export function getSiteConfig(site?: string) {
  return site
    ? configs[site as keyof typeof configs] || configs[routes.default]
    : configs[routes.default];
}
