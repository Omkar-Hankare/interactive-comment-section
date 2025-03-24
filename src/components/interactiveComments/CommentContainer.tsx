import { Box } from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { ICommentInfo } from "../../configs/types/interactiveComments.types";
import Comment from "./Comment/comment";

const CommentContainer = ({
  singleComment,
}: {
  singleComment: ICommentInfo;
}) => {
  const [parentComment, setParentComment] =
    useState<ICommentInfo>(singleComment);

  /**
   * Generates recursive comments based on the given comment data.
   * @param {Object} commentData - The data of the comment.
   * @param {string} prevIndex - The previous index.
   * @returns {JSX.Element} The generated comment component.
   */
  const recursiveCommentGenerator = useCallback(
    (commentData: ICommentInfo, prevIndex: string) => {
      const { children } = commentData;
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
          <Comment key={`Comment_${prevIndex}`} commentData={commentData} />
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
    () => recursiveCommentGenerator(parentComment, "0"),
    [parentComment, recursiveCommentGenerator]
  );

  return !!commentsList ? commentsList : <></>;
};

export default CommentContainer;
