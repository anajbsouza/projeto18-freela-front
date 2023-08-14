import styled from "styled-components";

export const AddProductContainer = styled.section`
    height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 300px;

        input,
        select,
        button {
            padding: 10px;
            border: none;
            border-radius: 5px;
        }

        button {
            cursor: pointer;
            background-color: #007bff;
            color: white;
        }
    }
`;
