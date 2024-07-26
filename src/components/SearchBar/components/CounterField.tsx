import { Button, ButtonProps, Grid, Stack, Typography } from "@mui/material";
import { useFormikContext } from "formik";
import { FC } from "react";
import { StyledTextField } from "../styled";
import { FormikSearchPayload } from "src/types/search";

export interface CounterFieldProps {
  name: keyof FormikSearchPayload;
  displayName?: string;
  preventIncrementOn?: number;
  preventDecrementOn?: number;
}

// extract the Button here, since its used in the same way twice:
const buttonProps: ButtonProps = {
  color: "secondary",
  variant: "contained",
  disableElevation: true,
  sx: { minWidth: "2em", padding: 0, borderRadius: 0 },
};

const CounterField: FC<CounterFieldProps> = ({
  name,
  displayName,
  preventDecrementOn = 0,
  preventIncrementOn,
}) => {
  const { setFieldValue, values } = useFormikContext<FormikSearchPayload>();

  const handleIncrement = () => {
    setFieldValue(name as string, (values[name] as number) + 1);
  };

  const handleDecrement = () => {
    setFieldValue(name as string, (values[name] as number) - 1);
  };

  const incrementDisabled = preventIncrementOn === values[name];

  const decrementDisabled = preventDecrementOn === values[name];

  return (
    <Grid item container alignItems="center" columnGap={0.5}>
      <Grid item xs={5.5}>
        <Typography variant="subtitle2" textTransform="capitalize">
          {displayName ?? (name as string)}
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <Stack
          flexDirection="row"
          alignItems="center"
          border="3px solid orange"
          borderRadius="4px"
          overflow="hidden"
          width="fit-content"
        >
          <Button
            {...buttonProps}
            onClick={handleDecrement}
            disabled={decrementDisabled}
          >
            -
          </Button>
          <StyledTextField
            name={name}
            InputProps={{ readOnly: true }}
            sx={{
              width: "3em",
              "& .MuiInputBase-input": {
                textAlign: "center",
                fontSize: "0.9rem",
                borderRadius: 5,
              },
            }}
          />
          <Button
            onClick={handleIncrement}
            disabled={incrementDisabled}
            {...buttonProps}
          >
            +
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default CounterField;
