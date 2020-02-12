import React from 'react';
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

function renderTooltip(props) {
    return <Tooltip {...props}>Drinking Water</Tooltip>;
}

const ExampleWater = () => (
    <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
    >
        <Button variant="outline-info">    <i className="fas fa-glass-whiskey fa-2x "> </i> </Button>
    </OverlayTrigger>
);

export default ExampleWater;