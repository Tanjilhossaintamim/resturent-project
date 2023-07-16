import { Card, CardBody, CardImg, CardTitle } from "reactstrap";
import { baseUrl } from "../../../redux/baseURL";
const MenuItem = ({ dish, dishSelect }) => {
  return (
    <div>
      <Card
        className="mb-5 cursor-pointer"
        onClick={() => dishSelect(dish)}
        style={{ cursor: "pointer" }}
      >
        <CardBody>
          <CardTitle tag="h5">{dish.name}</CardTitle>
        </CardBody>
        <CardImg
          alt="Card image cap"
          src={baseUrl + dish.image}
          style={{
            height: 380,
          }}
          top
          width="100%"
        />
      </Card>
    </div>
  );
};

export default MenuItem;
