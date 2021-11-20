import styled from "styled-components";

export const CommentStyling = styled.div`
	margin-left: 5vw;
	& textarea {
		width: 100%;
		height: 60px;
		resize: none;
	}

	& .toggle-btn.hide ~ div {
		display: none !important;
	}

	& .button-wrapper {
		display: flex;
		justify-content: space-between;
		margin: 15px 0;
	}

	& button {
		text-decoration: none;
		background: #edf6ff;
		border: 1px solid transparent;
		padding: 10px 15px;
		border-radius: 5px;
		cursor: pointer;
	}

	& button:hover {
		background: #1a253c;
		color: #edf6ff;
		border-color: #edf6ff;
	}

	& .toggle-btn.hide ~ div {
		display: none !important;
	}
`;
