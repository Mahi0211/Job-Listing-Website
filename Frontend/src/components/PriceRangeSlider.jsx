/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function RangeSlider({
  value,
  handleChange,
  minValue,
  maxValue,
}) {
  const step = 1000;
  return (
    <Box sx={{ width: { lg: 300, md: 250, sm: 200, xs: 150 } }}>
      <Slider
        value={value}
        onChange={handleChange}
        min={minValue}
        max={maxValue}
        step={step}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}
