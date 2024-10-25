import React from 'react';

const FeedPost = ({ post }) => {
  return (
    <div style={styles.feedPost}>
      <div style={styles.header}>
        <img src={post.profilePic} alt="Profile" style={styles.profilePic} />
        <div>
          <strong>{post.username}</strong>
          <p>{post.timeAgo}</p>
        </div>
      </div>
      <p>{post.text}</p>
      <img src={post.image} alt="Post content" style={styles.postImage} />
      <div style={styles.aura}>
        🔥 <span style={styles.negativeAura}>{post.aura}</span>
      </div>
    <div style={{ height: '20px' }}></div>
      <button style={styles.validateButton}>Validate</button>
      <button style={styles.commentbutton}>Comment</button>
    </div>
  );
};

const styles = {
  feedPost: {
    backgroundColor: '#E8F0FE',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
  },
  profilePic: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  aura: {
    color: '#FF4500',
    fontWeight: 'bold',
    fontSize: '18px',
    marginTop: '20px'
  },
  negativeAura: {
    color: 'red',
  },
  postImage: {
    width: '100%',
    borderRadius: '8px',
    marginTop: '10px',
  },
  validateButton: {
    backgroundColor: '#FF4500',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  commentbutton: {
    backgroundColor: 'transparent',
    color: 'black',
    padding: '0px 50px',
    border: 'none',
    fontSize: '20px'
  }
};

export default FeedPost;
