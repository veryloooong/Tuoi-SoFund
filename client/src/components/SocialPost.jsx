import PropTypes from "prop-types";

const SocialPost = ({ post }) => {
  return (
    <div>
      <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    </div>
  )
}

SocialPost.propTypes = {
  post: PropTypes.object,
}

export default SocialPost;