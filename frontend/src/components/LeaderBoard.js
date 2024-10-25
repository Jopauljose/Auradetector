import React from 'react';

const Leaderboard = ({ users }) => {
  return (
    <div style={styles.leaderboard}>
      <h2>Aura Leaderboard</h2>
      {users.map((user, index) => (
        <div key={index} style={styles.user}>
          <img src={user.profilePic} alt={user.name} style={styles.leaderboardPic} />
          <span>{user.name}</span>
          <span style={styles.rank}>{user.rank}</span>
        </div>
      ))}
    </div>
  );
};

const styles = {
  leaderboard: {
    backgroundColor: '#F1F1F1',
    padding: '20px',
    borderRadius: '8px',
  },
  user: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  leaderboardPic: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  rank: {
    marginLeft: 'auto',
  },
};

export default Leaderboard;
