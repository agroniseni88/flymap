import React from 'react';
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

function renderTooltip(props) {
    return <Tooltip {...props}>Dog is allowed</Tooltip>;
}

const DogT = () => (
    <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
    >
        <Button>  <i className="fas fa-dog fa-2x ">  </i></Button>
    </OverlayTrigger >
);

export default DogT;