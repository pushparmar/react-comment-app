import React, { useEffect, useState } from "react";
import Loader from "../loader";
import CommentList from "./commentList";
import { CommentsUpdate } from "./data/ApplicationContext";

const CommentWrapper = (props) => {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		fetch("https://www.mocky.io/v2/5dc596503200008200769be8")
			.then((Response) => Response.json())
			.then((data) => {
				setComments(data);
			});
	}, []);

	const findAndUpdateComment = (data, newCommentData) => {
		// we are using every method so after finding nested comment, it will break the loop,

		(data || []).every((el, i) => {
			if (el._id == newCommentData.id) {
				// new comment object.
				let newComment = {
					children: [],
					comment: newCommentData.text,
					_id: 1 * Math.random(), // dummy id.
				};

				el?.children
					? el?.children?.unshift(newComment)
					: (el.children = [newComment]);

				// return false is needed here to stoping unwanted cycles loop..
				return false;
			} else {
				if (el?.children) {
					// if there is nested array found, it will again call the findAndUpdate method ...
					return findAndUpdateComment(el?.children, newCommentData);
				}

				// return true is needed because "every" method stop loop if there is any false return in loop..
				return true;
			}
		});

		return data;
	};

	const updateComment = (newCommentData) => {
		let updatedComments = findAndUpdateComment(comments, newCommentData);
		setComments([...updatedComments]);
	};

	return comments.length ? (
		<CommentsUpdate.Provider value={updateComment}>
			<CommentList commentList={comments} />
		</CommentsUpdate.Provider>
	) : (
		<Loader />
	);
};

export default CommentWrapper;
