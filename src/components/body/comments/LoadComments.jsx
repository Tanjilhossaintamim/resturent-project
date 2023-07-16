import dateFormat from "dateformat";
import Loading from "../Loading";
const LoadComments = ({ comments, comment_isLoading }) => {
  const comment = comments.map((comment) => {
    return (
      <div key={comment.id}>
        <h4>{comment.author}</h4>
        <p>rating:{comment.rating}</p>
        <p>{comment.comment}</p>
        <p>
          date :{dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}{" "}
        </p>
      </div>
    );
  });
  if (comment_isLoading) {
    return <Loading />;
  } else {
    return <div>{comment}</div>;
  }
};

export default LoadComments;
