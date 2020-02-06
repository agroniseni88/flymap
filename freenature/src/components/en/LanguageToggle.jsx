import React from "react";
import { withLocalize } from "react-localize-redux";
import { NavDropdown, Button } from 'react-bootstrap';

const LanguageToggle = ({ languages, activeLanguage, setActiveLanguage }) => (

    <NavDropdown title="Language" id="collasible-nav-dropdown" className="selector" >
        {languages.map(lang => (
            <NavDropdown.Item key={lang.code}>
                <Button variant="outline-warning" onClick={() => setActiveLanguage(lang.code)}>
                    {lang.name}
                </Button>
            </NavDropdown.Item>
        ))}
    </NavDropdown>
);

export default withLocalize(LanguageToggle);
