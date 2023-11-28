import styled from "styled-components";

export const StyledDivDashboard = styled.div`
  header {
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid var(--color-grey-1);

    h1 {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-primary);
    }

    @media (min-width: 769px) {
      padding: 1.75rem 1rem;
    }
  }

  .contactsBox {
    width: 75%;
    margin: 2.5rem auto 0;
    padding: 1.25rem 0.5rem;
    border: 0.25rem solid var(--color-grey-0);
    border-radius: 0.25rem;
    background-color: var(--color-primary-hover);

    @media (min-width: 769px) {
      padding: 1.25rem;
    }

    & > ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    li:last-child {
      border-bottom: none;
      padding: 0 0.75rem;
      height: 2rem;
    }

    & > ul > li {
      display: flex;
      align-items: center;
      height: 3rem;
      padding: 0 0.75rem 1rem;
      border-radius: 0.25rem;
      border-bottom: 1px solid var(--color-grey-0);

      .contactsBox__codeBox {
        margin-right: 1rem;
        padding-right: 1.25rem;
        border-right: 1px solid var(--color-grey-0);
        height: 100%;
        display: flex;
        align-items: center;

        h2 {
          font-size: 1.5rem;
          color: var(--color-grey-0);
        }
      }

      .contactsBox__infoBox {
        width: 100%;
        height: 100%;
        padding-left: 0.25rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .contactsBox__infoBox__nameEmail {
          h3 {
            font-size: 1.125rem;
            color: var(--color-grey-0);
          }
          p {
            font-size: 0.95rem;
            color: var(--color-grey-1);
          }
        }

        .contactsBox__phoneBox {
          height: 100%;
          display: flex;
          align-items: center;
          border-left: 1px solid var(--color-grey-0);
          padding-left: 0.75rem;

          h3 {
            font-size: 1rem;
            color: var(--color-grey-0);
          }
        }
      }
    }
  }

  .formBox {
    width: 75%;
    margin: 4rem auto 2.5rem;
    padding: 1rem;
    border: 1;
    border-radius: 0.5rem;
    border: 0.25rem solid var(--color-grey-0);
    /* background-color: var(--color-grey-1); */

    .formBox__title {
      width: 75%;
      margin: 0 auto 1.5rem;
      padding-bottom: 0.25rem;
      border-bottom: 1px solid var(--color-grey-0);
      display: flex;
      align-items: center;
      justify-content: center;

      h2 {
        color: var(--color-primary);
      }
    }
    form {
      width: 75%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      input {
        height: 2.5rem;
        padding: 0 1rem;
        background-color: var(--color-grey-0);
        border: 0.063rem solid var(--color-grey-0);
        border-radius: 0.5rem;
        color: var(--color-grey-4);

        &::placeholder {
          color: var(--color-grey-1);
        }

        &:focus {
          outline: none;
          border-color: var(--color-grey-0);

          &::placeholder {
            color: var(--color-grey-0);
          }
        }
      }

      .formBox__formField {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        label {
          font-size: 0.9rem;
          color: var(--color-grey-0);
        }
        small {
          color: var(--color-primary);
        }
      }

      button {
        background-color: var(--color-primary-hover);
        border: 0.063rem solid var(--color-primary-hover);
        border-radius: 0.5rem;
        color: var(--color-grey-0);
        height: 2.5rem;
        padding: 0 1.375rem;
        margin-top: 1rem;

        font-size: 1rem;
        font-weight: 600;

        &:hover {
          background-color: var(--color-primary);
          border-color: var(--color-primary);
        }
      }
    }
  }
`;
