import React from 'react';
import { Button } from 'react-bootstrap';




export default function ButtonF() {
    return (

        <div id="flex_button">
            {/*  <div className="mb-2">
             <Button className='btn' variant="outline-warning" size="lg">
                    Large button
    </Button>{' '}
                <Button className='btn' variant="outline-warning" size="lg">
                    Large button
    </Button>
    
            </div>*/}
            <div className="btn_button">
                <div className="box_button">
                    <i className="fas fa-bicycle"></i>
                </div>

            </div>
            <div className="btn_button">
                <div className='box_button'>
                    <i class="fas fa-swimmer"></i>
                </div>

            </div>
            <div className="btn_button">
                <div className="box_button">
                    <i class="fas fa-air-freshener"></i>
                </div>

            </div>
            <div className="btn_button">
                <div className='box_button'>
                    <i class="fas fa-dog"></i>
                </div>

            </div>
        </div>
    )
}
