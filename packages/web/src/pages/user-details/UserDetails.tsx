import React from "react";
import styled from "styled-components";
import { DEMO_USERS } from '@react-chat-monorepo/core';

const Container = styled.div`
  min-height: 100%;
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserProfilesContainer = styled.div`
    display: flex;
    align-items:center;
    margin-bottom: 5em;
    max-width: 90%;
    overflow: scroll;
`;

const InputWithBtn = styled.div`
    display: flex;
    justify-content: center;
`;

const StyledAvatar = styled.img`
    border-radius: 10px;
`;

const StyledUserContainer = styled.div`
    margin: 1em;
    width: 99%;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: cente;
`;

const UserDetailsPage: React.FC = () => {

  const getUserLists = () => {
    return DEMO_USERS.map((user, index) => {
      return (
        <StyledUserContainer key={index}>
          <div style={{display: 'flex', justifyContent: 'center'}}>{user.nickName}</div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
          <StyledAvatar src={user.image_url_sm} alt="Avatar"/>
          </div>
        </StyledUserContainer>
      )
    })
  }

  return (
    <>
      <Container>
          <div style={{width: '100%'}}>
              <UserProfilesContainer>
                {getUserLists()}
              </UserProfilesContainer>
              <InputWithBtn>
                    <div>
                        <input type="text" placeholder="Phone" />
                    </div>
                    <div>
                        Go
                    </div>
              </InputWithBtn>
          </div>
      </Container>
    </>
  );
};

export default UserDetailsPage;
