import React, { PureComponent } from 'react';
import { Row, Col } from 'react-flexbox-grid';

class RenderCheckboxFields extends PureComponent {
  render () {
    return (
          <Row>
            <Col xs={12} md={12} className="cboxs">
              {this.props.inputField.prompt.map(cbox =>
                <span key={cbox} className="cboxs">
                  <input
                    id={cbox}
                    name={cbox}
                    type="checkbox"
                    className="cboxs"
                  />
                  <label
                    className="cboxsLlabel"
                    htmlFor={cbox}
                  >
                    {cbox}
                  </label>
                </span>
              )}
            </Col>
          </Row>
      )
  }
}

export default RenderCheckboxFields;
