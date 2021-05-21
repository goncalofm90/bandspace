import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { addLike, removeLike, deletePost } from "../../actions/post";

const PostPreview = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, title, name, avatar, user, likes, comments, date },
  showActions,
}) => (
  <div className="post bg-dark p-1 my-1">
    <div>
      <Link to={`/profile/${user}`}>
        <img className="round-imgpost" src={avatar} alt="" />
        <h4>{name}</h4>
      </Link>
    </div>
    <div>
      <h2 className="my-1">{title}</h2>
      <p className="post-date">
        Posted on <Moment format="DD/MM/YYYY">{date}</Moment>
      </p>

      {showActions && (
        <>
          <button
            type="button"
            className="btn-comment btn-light"
            onClick={(e) => addLike(_id)}
          >
            <i className="fas fa-thumbs-up"></i>
            {likes.length > 0 && <span>{likes.length}</span>}
          </button>
          <button
            type="button"
            className="btn-comment btn-light"
            onClick={(e) => removeLike(_id)}
          >
            <i className="fas fa-thumbs-down"></i>
          </button>
          <Link to={`/posts/${_id}`} className="btn-comment btn-primary">
            Open Discussion{" "}
            {comments.length > 0 && (
              <span className="comment-count">{comments.length}</span>
            )}
          </Link>
          {!auth.loading && user === auth.user._id && (
            <button
              type="button"
              className="btn-comment btn-primary"
              onClick={(e) => {
                deletePost(_id);
              }}
            >
              <i class="far fa-trash-alt"></i>
            </button>
          )}
        </>
      )}
    </div>
  </div>
);

PostPreview.defaultProps = {
  showActions: true,
};

PostPreview.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostPreview
);
