import { useEffect, useState } from "react";
import { connect } from "react-redux";
import MenuItem from "./MenuItem";
import { Modal, ModalFooter, ModalBody, Alert } from "reactstrap";
import MenuDetails from "./MenuDetails";
import {
  add_comment,
  fatchMenu,
  fatchComments,
} from "../../../redux/ActionCreators";
import Loading from "../Loading";
import * as actionTypes from "./../../../redux/ActionTypes";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add_comment: (dishId, author, rating, comment) =>
      dispatch(add_comment(dishId, author, rating, comment)),
    fatchMenu: () => dispatch(fatchMenu()),
    fatchComments: () => dispatch(fatchComments()),
  };
};

const Menu = ({ dishes, comments, add_comment, fatchMenu, fatchComments }) => {
  const [selectedDish, setSelectedDish] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const dishSelect = (dish) => {
    setSelectedDish(dish);
    setModalOpen(true);
  };
  const modalClose = () => setModalOpen(!modalOpen);
  // genarating individual menu item

  const menu = dishes.dishes.map((item) => {
    return <MenuItem dish={item} key={item.id} dishSelect={dishSelect} />;
  });
  // useEffect hooks use
  useEffect(() => {
    fatchMenu();
    fatchComments();
  }, []);
  // genarating comments for individual menu item

  const comment = comments.comments.filter((comment) => {
    return selectedDish && comment.dishId == selectedDish.id;
  });
  if (dishes.is_loading) {
    return <Loading />;
  }
  if (dishes.error) {
    return (
      <Alert isOpen={true} color="danger">
        {dishes.error}
      </Alert>
    );
  }
  return (
    <div className="container-fluid">
      <div className="row my-2">
        <div className="col-sm-12 col-lg-5">{menu}</div>

        <Modal isOpen={modalOpen}>
          <ModalBody>
            {selectedDish && (
              <MenuDetails
                dish={selectedDish}
                comment={comment}
                comment_isLoading={comments.is_loading}
                add_comment={add_comment}
                comment_error={comments.error}
              />
            )}
          </ModalBody>

          <ModalFooter>
            <button className="btn btn-primary" onClick={modalClose}>
              close
            </button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
