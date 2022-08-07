import { Grid, Checkbox, FormGroup, FormControlLabel } from "@mui/material";

const filterOptions = ["Vegan", "Vegetarian", "Dairy-Free", "Gluten-Free"];

export const RecipeFilter = (props) => {
  const filterNames = Object.keys(props.checkedState);

  const setFilters = (event) => {
    props.setCheckedState((prev) => ({
      ...prev,
      [event.target.name]: event.target.checked,
    }));
    if (props.checkedState[event.target.name] === false) {
      props.setHealthFilter((prev) => [
        ...prev,
        `&health=${event.target.name}`,
      ]);
    } else {
      props.setHealthFilter((prev) =>
        prev.filter((name) => name !== `&health=${event.target.name}`)
      );
    }
  };

  return (
    <div className="recipe-filter">
      <Grid container spacing={1} columnSpacing={8}>
        {filterOptions.map((next, i) => {
          return (
            <Grid item xs={6} key={i}>
              <FormGroup>
                <FormControlLabel
                  label={next}
                  control={
                    <Checkbox
                      sx={{
                        "&.Mui-checked": {
                          color: "#011a07",
                        },
                      }}
                      checked={props.checkedState[i]}
                      name={filterNames[i]}
                      onChange={setFilters}
                    ></Checkbox>
                  }
                />
              </FormGroup>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
