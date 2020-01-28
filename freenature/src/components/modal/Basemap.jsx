import React, { Component } from 'react'

export default class Basemap extends Component {
    onChange = (e) => {
        var bm = e.currentTarget.value;

        if (this.props.onChange) {
            this.props.onChange(bm);
        }
    }

    render() {
        return (
            <div className="basemaps-container">
                <div>
                    <select value={this.props.basemap} onChange={this.onChange}>
                        <option value="osm">osm</option>
                        <option value="hot">hot</option>
                        <option value="dark">dark</option>


                    </select>
                </div>
            </div>
        )
    }
}
