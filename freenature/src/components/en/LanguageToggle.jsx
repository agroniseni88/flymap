import React from "react";
import { withLocalize } from "react-localize-redux";
import { NavDropdown, Button } from 'react-bootstrap';

const LanguageToggle = ({ languages, activeLanguage, setActiveLanguage }) => (

    <NavDropdown style={{float:'right', fontSize:'15px'}} title="Language" id="collasible-nav-dropdown" className="selector" >
        {languages.map(lang => (
            <NavDropdown.Item key={lang.code}>
                <Button style={{ fontSize:'13px', width:'4px', height:'3px', textAlign:'center', margin:'0px', padding:'20px'}} onClick={() => setActiveLanguage(lang.code)}>
                    {lang.name}
                </Button>
            </NavDropdown.Item>
        ))}
    </NavDropdown>
);

export default withLocalize(LanguageToggle);
