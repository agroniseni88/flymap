import React from 'react';
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

function renderTooltip(props) {
    return <Tooltip {...props}>Fire allowed in camping</Tooltip>;
}

const ExampleFire = () => (
    <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
    >
        <Button variant="outline-info">  <i className="fas fa-fire fa-2x ">  </i></Button>
    </OverlayTrigger >
);

export default ExampleFire;