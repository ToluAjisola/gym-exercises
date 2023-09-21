import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {
  return (
    <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
      <Detail  />
      <ExerciseVideos
        />
      <SimilarExercises
       />
    </Box>
  );
};

export default ExerciseDetail;
