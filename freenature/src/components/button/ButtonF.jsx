import React from 'react';
import { Button } from 'react-bootstrap';



export default function ButtonF() {
    return (
        <div>
            <div className="mb-2">
                <Button className='btn' variant="outline-warning" size="lg">
                    Large button
    </Button>{' '}
                <Button className='btn' variant="outline-warning" size="lg">
                    Large button
    </Button>
            </div>
        </div>
    )
}
