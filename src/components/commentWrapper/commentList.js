import React from "react";
import Comment from "./comment";

const CommentList = (props) => {
	const { commentList } = props;
	return (commentList || []).map((commentItem) => (
		<Comment key={commentItem?._id} commentItem={commentItem} />
	));
};

export default CommentList;
