import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100%;
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputWithBtn = styled.div`
    display: flex;
`;

const UserDetailsPage: React.FC = () => {
  return (
    <>
      <Container>
          <div>
              <div>
                User Image
              </div>
              <InputWithBtn>
                    <div>
                        <input type="text" />
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
