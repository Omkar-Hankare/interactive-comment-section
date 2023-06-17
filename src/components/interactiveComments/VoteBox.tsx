import { Button, Typography } from "@mui/material";
import { useState, useMemo } from "react";
import {
  StyledVoteBox,
  StyledVoteBoxSxProp,
} from "../../styles/components/interactiveComments/CommentContainer.styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export const VoteBox = ({ votes }: { votes: number }) => {
  const [voteCount, setvoteCount] = useState<number>(votes);

  function incrementVoteCount() {
    if (voteCount === votes) {
      setvoteCount(voteCount + 1);
    } else if (voteCount === votes - 1) {
      setvoteCount(voteCount + 2);
    } else {
      setvoteCount(votes);
    }
  }

  function decrementVoteCount() {
    if (voteCount === votes) {
      setvoteCount(voteCount - 1);
    } else if (voteCount === votes + 1) {
      setvoteCount(voteCount - 2);
    } else {
      setvoteCount(votes);
    }
  }

  const { addVotebtnStyles, removebtnStyles } = useMemo(() => {
    const addVotebtnStyles = {
      minWidth: 3,
      color: voteCount === votes + 1 ? "#4a3dbe" : "black",
    };
    const removebtnStyles = {
      minWidth: 3,
      color: voteCount === votes - 1 ? "#4a3dbe" : "black",
    };

    return { addVotebtnStyles, removebtnStyles };
  }, [voteCount, votes]);

  return (
    <StyledVoteBox sx={StyledVoteBoxSxProp}>
      <Button
        title="Up vote"
        onClick={incrementVoteCount}
        sx={addVotebtnStyles}
      >
        <AddIcon
          sx={{
            cursor: "pointer",
            backgroundColor: voteCount === votes + 1 ? "#adade2" : "",
          }}
        />
      </Button>
      <Typography>{voteCount}</Typography>
      <Button
        title="Down vote"
        onClick={decrementVoteCount}
        sx={removebtnStyles}
      >
        <RemoveIcon
          sx={{
            cursor: "pointer",
            backgroundColor: voteCount === votes - 1 ? "#adade2" : "",
          }}
        />
      </Button>
    </StyledVoteBox>
  );
};
