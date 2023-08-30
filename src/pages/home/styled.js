import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #282a36;

  .content {
    width: 350px;
    padding: 3rem 1rem 2rem 1rem;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    border: 1px solid #6f73c6;
    background-color: #21222c;

    .title {
      top: -20px;
      font-size: 1.5rem;
      position: absolute;
      color: white;
      border-radius: 1rem;
      background-color: #6f73c6;
      padding: 0.2rem 2rem 0.2rem 2rem;
    }

    .center {
      width: 95%;

      .inputSearch {
        width: 100%;
        display: flex;
        align-items: center;

        input {
          width: 100%;
          border: none;
          outline: none;
          padding: 0.5rem;
          border: 3px solid #6f73c6;
          background-color: "#EBEBEB";
          border-radius: 0.2rem 0rem 0rem 0rem;
        }

        button {
          border: none;
          cursor: pointer;
          display: flex;
          padding: 0.4rem;
          transition: 0.3s;
          align-items: center;
          justify-content: center;
          background-color: #6f73c6;
          border: 3px solid #6f73c6;
          border-radius: 0rem 0.4rem 0rem 0rem;

          .icon {
            color: white;
            font-size: 1.2rem;
            border-radius: 0.2rem;
          }

          &:hover {
            background-color: #6165a9;
          }
        }
      }

      .welcomeMessage {
        width: 100%;
        display: flex;
        padding-top: 0.3rem;
        padding-bottom: 0.3rem;
        align-items: center;
        justify-content: center;
        background-color: #12a87e;
        border-radius: 0rem 0rem 1rem 1rem;

        p {
          color: white;
          font-weight: bold;
        }
      }

      .informations {
        gap: 0.5rem;
        display: flex;
        margin-top: 1rem;
        flex-direction: column;

        h1 {
          gap: 0.5rem;
          width: 100%;
          color: white;
          display: flex;
          align-items: center;
          font-size: 1.2rem;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          border-radius: 0.2rem;
          background-color: #505253;

          span {
            margin-left: 5px;
            padding: 0.3rem;
            border-radius: 0.2rem;
            background-color: #3a3c3d;
          }
        }

        p {
          gap: 0.5rem;
          width: 100%;
          color: white;
          display: flex;
          align-items: center;
          padding-top: 0.4rem;
          padding-bottom: 0.4rem;
          border-radius: 0.2rem;
          background-color: #505253;

          span {
            margin-left: 5px;
            padding: 0.2rem;
            border-radius: 0.2rem;
            background-color: #3a3c3d;
          }
        }
      }
    }
  }

  @media (min-width: 320px) and (max-width: 1024px) {
    height: 1200px;

    .content {
      margin-bottom: 500px;
    }
  }
`;
