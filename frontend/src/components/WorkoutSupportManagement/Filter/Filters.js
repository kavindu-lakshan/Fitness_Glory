import { Checkbox, FormControlLabel } from "@material-ui/core";

const Filters = () => {
  return (
    <div>
      <span>
        <FormControlLabel
          value="Cardio"
          control={<Checkbox color="primary" />}
          label="Cardio"
          labelPlacement="end"
        />
      </span>
      <span>
        <FormControlLabel
          value="Weights"
          control={<Checkbox color="primary" />}
          label="Weights"
          labelPlacement="end"
        />
      </span>
    </div>
  );
};

export default Filters;
