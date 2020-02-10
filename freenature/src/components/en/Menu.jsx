import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize } from "react-localize-redux";
import globalTranslations from '../en/language.json'
import { Card } from 'react-bootstrap';
import LanguageToggle from './LanguageToggle';
import { Translate } from "react-localize-redux";


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.props.initialize({
            languages: [
                { name: "English", code: "en" },
                { name: "Dutch", code: "du" },
                { name: "French", code: "fr" }
            ],
            translation: globalTranslations,
            options: { renderToStaticMarkup }
        });

        this.props.addTranslation(globalTranslations)
    }

    render() {
        return (
            <Card.Body>
                <Card.Title>
                    <Translate id="menu.title">Depending on the owner of the site on which a bivouac zone is located, there may be some limitations.</Translate>
                </Card.Title>
                <LanguageToggle />
            </Card.Body>

        )
    }
};

export default withLocalize(Menu);
