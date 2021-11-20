import React, { useContext, useState } from "react";
import { CommentsUpdate } from "./data/ApplicationContext";

import { CommentStyling } from "./style";
import CommentList from "./commentList";

const Comment = (props) => {
	const [replyText, setReplyText] = useState("");
	const [hideComments, sethideComments] = useState(false);
	const { commentItem } = props;

	const updateComment = useContext(CommentsUpdate);

	// Handle Comment input box change in controlled way.
	const handleChange = (e) => {
		const { value } = e.target;
		setReplyText(value.trim());
	};

	const replyComment = (e) => {
		const { id } = e.target;
		let text = replyText?.trim();

		// checkpoint for blank string validation
		text.length && updateComment({ id: id, text: replyText });

		// After reply input field should blank
		setReplyText("");
	};

	// Hide show comment functionlity,
	const handleCommentsVisibility = (e) => {
		sethideComments(!hideComments);
	};

	return (
		<CommentStyling>
			<p className="comment">{commentItem?.comment}</p>

			<textarea onChange={handleChange} value={replyText} />

			<div className="button-wrapper">
				<button id={commentItem?._id} onClick={replyComment}>
					Reply
				</button>

				{commentItem?.children?.length ? (
					<button onClick={handleCommentsVisibility}>
						{hideComments ? "Show Comments" : "Hide Comments"}
					</button>
				) : (
					""
				)}
			</div>
			{commentItem?.children?.length && !hideComments ? (
				<CommentList commentList={commentItem?.children} />
			) : (
				""
			)}
		</CommentStyling>
	);
};

export default Comment;
