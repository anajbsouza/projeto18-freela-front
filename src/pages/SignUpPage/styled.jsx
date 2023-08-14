import styled from "styled-components";

export const SingUpContainer = styled.section`
    height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 300px;
        gap: 10px;

        input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        button {
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;

            &:hover {
                background-color: #0056b3;
            }
        }
    }

    a {
        margin-top: 10px;
        text-decoration: none;
        color: #007bff;

        &:hover {
            text-decoration: underline;
        }
    }
`;
