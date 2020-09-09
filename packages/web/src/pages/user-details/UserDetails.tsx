import React from "react";
import styled from "styled-components";

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
    max-width: 100%;
    overflow: scroll;
    div {
        margin: 1em;
        width: 99%;
        min-width: 100%;
    }
`;

const InputWithBtn = styled.div`
    display: flex;
    justify-content: center;
`;

const UserDetailsPage: React.FC = () => {
  return (
    <>
      <Container>
          <div style={{width: '100%'}}>
              <UserProfilesContainer>
                <div>User 1</div>
                <div>User 2</div>
                <div>User 3</div>
                <div>User 4</div>
                <div>User 5</div>
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
