import { Box } from "@mui/material";
import React, { useMemo, useState, useCallback } from "react";
import Comment from "./Comment";
import { COMMENTS } from "../../configs/constants/interactiveComments.constants";
import { ICommentInfo } from "../../configs/types/interactiveComments.types";

const CommentContainer = () => {
  const [listOfComments, setListOfComments] = useState<ICommentInfo>(COMMENTS);

  const recursiveCommentGenerator = useCallback(
    (commentData: ICommentInfo, prevIndex: string) => {
      const { content, userName, lastModified, children, votes } = commentData;
      const styles = {
        borderLeftStyle: prevIndex === "0" ? "none" : "solid",
        pt: prevIndex === "0" ? 0 : 3,
        pl: prevIndex === "0" ? 0 : 3,
        ml: prevIndex === "0" ? 0 : 2,
        borderWidth: "2px",
        borderColor: "#c4c4c4",
      };

      return (
        <Box key={`Box_${prevIndex}`} sx={styles}>
          {/* rendering current comment */}
          <Comment
            key={`Comment_${prevIndex}`}
            content={content}
            votes={votes}
            lastModified={lastModified}
            userName={userName}
          />
          {/* rendering children comments recursively  */}
          {children?.map((child: ICommentInfo, index: number) =>
            recursiveCommentGenerator(child, `${prevIndex}_${index + 1}`)
          )}
        </Box>
      );
    },
    []
  );

  const commentsList = useMemo(
    () => recursiveCommentGenerator(listOfComments, "0"),
    [listOfComments, recursiveCommentGenerator]
  );

  return !!commentsList ? commentsList : <></>;
};

export default CommentContainer;
