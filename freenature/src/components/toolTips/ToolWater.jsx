import React from 'react';
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import water from "./water.png";

function renderTooltip(props) {
    return <Tooltip {...props}>Drinking Water is there</Tooltip>;
}

const ExampleWater = () => (
    <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
    >
        <Button variant="outline-info"> <img src={water} alt='water' style={{ width: '35px', height: '35px' }} /></Button>
    </OverlayTrigger>
);

export default ExampleWater;