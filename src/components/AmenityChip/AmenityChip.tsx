import { Chip } from "@mui/material";
import { FC } from "react";
import { getIconByName } from "src/utils/icons";
import CheckIcon from "@mui/icons-material/Check";

export interface AmenityChipProps {
  label: string;
  color?: string;
  fitContent?: true;
}

const AmenityChip: FC<AmenityChipProps> = ({ label, fitContent }) => {
  const icon = getIconByName(label) ?? <CheckIcon />;

  return (
    <Chip
      label={label}
      icon={icon}
      sx={{ px: 1, width: fitContent && "fit-content" }}
    />
  );
};

export default AmenityChip;
