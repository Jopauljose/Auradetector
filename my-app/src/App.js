import React from 'react';
import FeedPost from './components/FeedPost';
import Leaderboard from './components/LeaderBoard';
import UserProfile from './components/UserProfile';

const App = () => {
  const post = {
    username: 'Lil Biju',
    profilePic: 'https://via.placeholder.com/50',
    timeAgo: '1d ago',
    text: 'This guy was going to mess and fell. Upvote this for -10000 aura',
    image: 'https://via.placeholder.com/150',
    aura: '-10000 Aura',
  };

  const leaderboardUsers = [
    { name: 'Lil Biju', profilePic: 'https://via.placeholder.com/50', rank: '🥇' },
    { name: 'Gawd Vishnu', profilePic: 'https://via.placeholder.com/50', rank: '🥈' },
    { name: 'Convincing star Joss', profilePic: 'https://via.placeholder.com/50', rank: '🥉' },
  ];

  const userProfile = {
    username: 'tfaaf',
    handle: 'afafa',
    profilePic: 'https://via.placeholder.com/100',
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <UserProfile user={userProfile} />
      </div>
      <br/>
      <div style={styles.feed}>
        <FeedPost post={post} />
      </div>
      <br/>
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
    gap: '20px',  // This will add space between the sidebar and feed
  },
  sidebar: {
    width: '25%',
    margin: '0 10px', // Add space to the left and right of sidebars
  },
  feed: {
    width: '50%',
  },
};


export default App;
