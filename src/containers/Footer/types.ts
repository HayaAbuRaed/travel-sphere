import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

// eslint-disable-next-line @typescript-eslint/ban-types
export type IconType = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
  muiName: string;
};

export interface Contact {
  name: string;
  Icon: IconType;
  link: string;
  label: string;
}
