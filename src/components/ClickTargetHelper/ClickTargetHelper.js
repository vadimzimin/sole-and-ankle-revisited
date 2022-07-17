import styled from "styled-components";

export const ClickTargetHelper = styled.div`
    &::after {
        --click-target-minimum: 44px;
        --inset-by: min(
            0px,
            calc((100% - var(--click-target-minimum)) / 2)
        );
    
        content: "";
        position: absolute;
        top: var(--inset-by);
        left: var(--inset-by);
        right: var(--inset-by);
        bottom: var(--inset-by);
    }
`;

export default ClickTargetHelper;