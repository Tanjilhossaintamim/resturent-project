import { useState } from "react";
import { Form, FormGroup, Col, Input, Button, Alert } from "reactstrap";
const CommentForm = ({ add_comment, dishId, comment_error }) => {
  const [comment, setComment] = useState({
    author: "",
    rating: "1",
    comment: "",
  });
  const handelInputField = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setComment({
      ...comment,
      [name]: value,
    });
  };
  const submitForm = (e) => {
    e.preventDefault(),
      // action dispatching
      add_comment(dishId, comment.author, comment.rating, comment.comment);

    setComment({
      author: "",
      rating: "1",
      comment: "",
    });
  };
  return (
    <div className="container">
      {comment_error ? (
        <Alert isOpen={true} color="danger">{comment_error}</Alert>
      ) : (
        <Form onSubmit={submitForm}>
          <Col>
            <FormGroup>
              <Input
                type="text"
                name="author"
                placeholder="Enter Your Name"
                value={comment.author}
                onChange={handelInputField}
                required
              ></Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input
                type="select"
                name="rating"
                value={comment.rating}
                onChange={handelInputField}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input
                type="textarea"
                placeholder="Write Your Comment "
                name="comment"
                value={comment.comment}
                onChange={handelInputField}
                required
              ></Input>
            </FormGroup>
          </Col>
          <Button type="submit">Comment</Button>
        </Form>
      )}
    </div>
  );
};

export default CommentForm;
