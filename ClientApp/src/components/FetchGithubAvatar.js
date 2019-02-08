import React, { useState } from 'react';
import styled from 'styled-components';

const Avatar = styled.img`
  height: 487px;
  border-radius: 50%;
`;

const FetchGithubAvatar = () => {
  const [avatar, setAvatar] = useState('');

  const fetchGithubAvatar = async (user = '') => {
    try {
      const githubResponse = await fetch(`https://api.github.com/users/${user}`);
      const githubUser = await githubResponse.json();
      setAvatar(githubUser.avatar_url);
    } catch(err) {
      console.error(err); // TypeError: failed to fetch
    }
  };

  fetchGithubAvatar('anthony-langford');

  return (
    avatar && <Avatar src={avatar} alt='avatar' />
  );
};

export default FetchGithubAvatar;
