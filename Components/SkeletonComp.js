import { Box, Skeleton } from "@mui/material";
import React from "react";

function SkeletonComp({ width = "100%", color = "secondary.light", height = 3 }) {
  return (
    <Box sx={{ width: width }}>
      <Skeleton animation={"wave"} sx={{ bgcolor: color, height: height }} />
    </Box>
  );
}

export default SkeletonComp;
