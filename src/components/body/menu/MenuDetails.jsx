import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import LoadComments from "../comments/LoadComments";
import CommentForm from "../comments/CommentForm";
import { baseUrl } from "../../../redux/baseURL";
const MenuDetails = ({
  dish,
  comment,
  add_comment,
  comment_isLoading,
  comment_error,
}) => {
  return (
    <div>
      <Card>
        <CardImg alt={dish.name} src={baseUrl + dish.image} top width="100%" />
        <CardBody>
          <CardTitle tag="h5">{dish.name}</CardTitle>
          <h3>&#2547; {dish.price} /=</h3>

          <CardText>{dish.description}</CardText>
          <hr />
          {/* load all comments */}
          <h3>Comments</h3>
          <LoadComments
            comments={comment}
            comment_isLoading={comment_isLoading}
          />
          <hr />
          <CommentForm
            add_comment={add_comment}
            dishId={dish.id}
            comment_error={comment_error}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default MenuDetails;
