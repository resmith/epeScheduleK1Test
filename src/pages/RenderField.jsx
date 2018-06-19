import React, { Component } from 'react';
import RenderTextField from './RenderTextField.jsx';
// import RenderTextField2 from './RenderTextField2.jsx';
import RenderNumField from './RenderNumField';
import RenderRButtonField from './RenderRButtonField';
import RenderCheckboxField from './RenderCheckboxField';
import RenderCheckboxFields from './RenderCheckboxFields';
import RenderBegEndPercent from './RenderBegEndPercent';
import RenderBegEndHeading from './RenderBegEndHeading';

class RenderField extends Component {

  render() {
    return (
        <div>
          { this.props.inputField.fieldType === 'text' && <RenderTextField inputField={this.props.inputField} />}
          { this.props.inputField.fieldType === 'num' && <RenderNumField inputField={this.props.inputField} />}
          { this.props.inputField.fieldType === 'rBtn' && <RenderRButtonField inputField={this.props.inputField} />}
          { this.props.inputField.fieldType === 'cbox' && <RenderCheckboxField inputField={this.props.inputField} />}
          { this.props.inputField.fieldType === 'cboxs' && <RenderCheckboxFields inputField={this.props.inputField} />}
          { this.props.inputField.fieldType === 'begEndP' && <RenderBegEndPercent inputField={this.props.inputField} />}
          { this.props.inputField.fieldType === 'begEndH' && <RenderBegEndHeading inputField={this.props.inputField} />}
        </div>
      )
    }
}

export default RenderField;
