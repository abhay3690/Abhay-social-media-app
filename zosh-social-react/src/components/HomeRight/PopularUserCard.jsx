import { Avatar, Button, CardHeader } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

const PopularUserCard = () => {
  return (
    <div>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={<Button size="small">Follow</Button>}
        title="code with abhay"
        subheader="@Codewithabhay"
      />
    </div>
  );
};

export default PopularUserCard;
