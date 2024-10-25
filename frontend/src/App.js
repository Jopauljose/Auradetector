import React from 'react';
import FeedPost from './components/FeedPost';
import Leaderboard from './components/LeaderBoard';
import UserProfile from './components/UserProfile';
import './App.css';

const App = () => {
  const post = {
    username: 'Lil Biju',
    profilePic: 'https://via.placeholder.com/50',
    timeAgo: '1d ago',
    text: 'This thakoli was going to mess and almost fell on his amss. Upvote this for -10000 aura',
    aura: '-10000 Aura',
    image: 'https://via.placeholder.com/150',
  };

  const leaderboardUsers = [
    { name: 'Lil Biju', profilePic: 'https://via.placeholder.com/50', rank: '🥇' },
    { name: 'Gawd Vishnu', profilePic: 'https://via.placeholder.com/50', rank: '🥈' },
    { name: 'Convincing star Joss', profilePic: 'https://via.placeholder.com/50', rank: '🥉' },
  ];

  const userProfile = {
    username: 'thakoli',
    handle: 'thakoli68',
    profilePic: 'https://via.placeholder.com/100',
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <UserProfile user={userProfile} />
      </div>
      <div style={styles.feed}>
        <FeedPost post={post} />
      </div>
      <div style={styles.sidebar}>
        <Leaderboard users={leaderboardUsers} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    gap: '20px',  // Space between sidebars and feed
  },
  sidebar: {
    width: '25%',
    margin: '0 10px',  // Optional, to add space within the sidebars
  },
  feed: {
    width: '50%',
  },
};

export default App;
