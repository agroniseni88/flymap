import React from 'react';
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

function renderTooltip(props) {
    return <Tooltip {...props}>Gallery</Tooltip>;
}

const ExampleGalery = () => (
    <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
    >
        <Button>  <i className="fas fa-images fa-2x ">  </i></Button>
    </OverlayTrigger >
);

export default ExampleGalery;