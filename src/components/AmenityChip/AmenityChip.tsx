import { Chip, Typography } from "@mui/material";
import { FC } from "react";
import { getIconByName } from "src/utils/icons";
import CheckIcon from "@mui/icons-material/CheckCircleOutline";
import { AmenityChipProps } from "./types";

const AmenityChip: FC<AmenityChipProps> = ({
  label,
  fitContent,
  variant = "body2",
}) => {
  const icon = getIconByName(label) ?? (
    <CheckIcon fontSize="small" color="success" />
  );

  const Label = () => (
    <Typography variant={variant} sx={{ textWrap: "wrap" }}>
      {label}
    </Typography>
  );

  return (
    <Chip
      label={<Label />}
      icon={icon}
      sx={{
        px: 1,
        py: 0.5,
        width: fitContent && "fit-content",
        height: "fit-content",
      }}
    />
  );
};

export default AmenityChip;
