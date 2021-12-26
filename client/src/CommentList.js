import React from "react";

export default ({ comments }) => {
    const renderedComments = comments.map(comments => {
        return <li key={comments.id}>{comments.content}</li>
    });
    return <ul>
        {renderedComments}
    </ul>
};