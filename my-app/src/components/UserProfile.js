import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div style={styles.profile}>
      <img src={user.profilePic} alt="User profile" style={styles.profilePic} />
      <h3>{user.username}</h3>
      <p>@{user.handle}</p>
    </div>
  );
};

const styles = {
  profile: {
    backgroundColor: '#F1F1F1',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
  },
  profilePic: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginBottom: '10px',
  },
};

export default UserProfile;
