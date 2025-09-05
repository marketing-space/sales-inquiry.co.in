import { lodhaAmaraSiteConfig } from "../config/regency-anatham";
import { arkadeBhandupSiteConfig } from "./arkade-bhandup";
import { prestigeDahisarSiteConfig } from "./Prestige-Dahisar";
import { routes } from "./routes";
import { rustomjeeDombivliConfig } from "./rustomjee-dombivli";
import { siddhaWadalaSiteConfig } from "./siddha-wadala";
// import { siteConfig } from "./site";

const configs = {
  [routes.default]: lodhaAmaraSiteConfig,
  [routes.Anantam]: lodhaAmaraSiteConfig,
  [routes.RustomjeeDombivli]: rustomjeeDombivliConfig,
  [routes.ArkadeBhandup]: arkadeBhandupSiteConfig,
  [routes.PrestigeDahisar]: prestigeDahisarSiteConfig,
  [routes.SiddhaWadala]: siddhaWadalaSiteConfig
};

export function getSiteConfig(site?: string) {
  return site
    ? configs[site as keyof typeof configs] || configs[routes.default]
    : configs[routes.default];
}
