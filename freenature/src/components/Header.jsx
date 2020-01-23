import React from 'react';
import image from '../img/image.png';

export default function Header() {
    return (
        <div>
            <img src={image} alt="nature" style={{ paddingLeft: '350px' }} />
            <h3>Wat is paalkamperen of bivakkeren? Kort verblijf en luxeloos, discreet overnachten  op een aangeduide plaats (gemarkeerd met een paal of pomp) in een natuurlijke omgeving. </h3>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing.</small>
        </div>
    )
}
