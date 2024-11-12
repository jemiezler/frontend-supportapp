import { createTamagui } from "tamagui";
import { config } from "@tamagui/config";

export const tamaguiConfig = createTamagui(config);

export default tamaguiConfig;

export type Conf = typeof tamaguiConfig;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}
