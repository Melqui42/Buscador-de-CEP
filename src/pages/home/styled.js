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

    ul {
      gap: 1rem;
      top: 0px;
      right: -55px;
      display: flex;
      position: absolute;
      flex-direction: column;

      li {
        a,
        button {
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          padding: 0.2rem;
          border: none;
          cursor: pointer;
          border-radius: 0.2rem;

          .listOfTechShow {
            top: 55px;
            left: 50px;
            display: flex;
            opacity: 1;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;

            .item {
              div {
                img {
                  width: 37px;
                  border-radius: 0.2rem;
                }
              }

              &:nth-child(1) div {
                img {
                  height: 37px;
                  width: 42px;
                }
              }
            }
          }

          .listOfTechHide {
            top: 55px;
            left: 35px;
            opacity: 0;
            transition: 0.3s;
            display: flex;
            visibility: hidden;
            align-items: center;
            flex-direction: row;

            .item {
              div {
                img {
                  width: 37px;
                  border-radius: 0.2rem;
                }
              }

              &:nth-child(1) div {
                img {
                  height: 37px;
                  width: 42px;
                }
              }
            }
          }

          .listOfMySocialNetShow {
            top: 108px;
            left: 50px;
            display: flex;
            opacity: 1;
            transition: 0.3s;
            align-items: center;
            flex-direction: row;

            .item {
              a {
                cursor: pointer;
                font-size: 2rem;
                padding: 0.2rem;
                display: flex;
                align-items: center;
                border-radius: 0.2rem;
                justify-content: center;
              }

              &:nth-child(1) a {
                color: #029ff9;
                background-color: white;
              }

              &:nth-child(2) a {
                color: white;
                background-color: #3a3c3d;
              }

              &:nth-child(3) a {
                color: white;
                background-color: #10936e;
              }

              &:nth-child(4) a {
                color: #e94242;
                background-color: white;
              }
            }
          }

          .listOfMySocialNetHide {
            top: 108px;
            left: 35px;
            transition: 0.3s;
            opacity: 0;
            display: flex;
            visibility: hidden;
            align-items: center;
            flex-direction: row;

            .item {
              a {
                cursor: pointer;
                font-size: 2rem;
                padding: 0.2rem;
                display: flex;
                align-items: center;
                border-radius: 0.2rem;
                justify-content: center;
              }

              &:nth-child(1) a {
                color: #029ff9;
                background-color: white;
              }

              &:nth-child(2) a {
                color: white;
                background-color: #3a3c3d;
              }

              &:nth-child(3) a {
                color: white;
                background-color: #10936e;
              }

              &:nth-child(4) a {
                color: #e94242;
                background-color: white;
              }
            }
          }
        }

        &:nth-child(1) a {
          background-color: #3a3c3d;
        }

        &:nth-child(2) button {
          background-color: #029ff9;
        }
      }
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
      ul {
        top: 400px;
        right: 80px;
        flex-direction: row;

        li {
          a,
          button {
            .listOfTechShow {
              left: 72px;
              flex-direction: column;
            }

            .listOfTechHide {
              top: 45px;
              left: 72px;
              flex-direction: column;
            }

            .listOfMySocialNetShow {
              top: 55px;
              left: 128px;
              flex-direction: column;
            }

            .listOfMySocialNetHide {
              top: 45px;
              left: 128px;
              flex-direction: column;
            }
          }
        }
      }
    }
  }

  @media (min-width: 375px) and (max-width: 1024px) {
    height: 1200px;
    .content {
      margin-bottom: 500px;

      ul {
        top: 385px;
        right: 115px;
        flex-direction: row;
      }
    }
  }
`;
