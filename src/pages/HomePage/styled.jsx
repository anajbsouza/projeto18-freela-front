import styled from "styled-components";

export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    header {
        width: 100%;
        text-align: center;

        .button-container {
            display: flex;
            justify-content: space-around;
        }
    }

    button, a {
        padding: 10px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        margin: 10px 0;

        &:hover {
            background-color: #0056b3;
        }
    }

    a {
        text-decoration: none;
    }
`;
