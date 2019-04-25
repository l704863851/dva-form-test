import React from "react";
import { connect } from "dva";
import { Form, Checkbox } from "antd";

const CheckboxGroup = Checkbox.Group;

class SonPage extends React.Component {
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    if (nextProps !== this.props) {
      const {
        onChange,
        form: { getFieldsValue }
      } = this.props;
      const val = Object.keys(getFieldsValue()).map(m => {
        const val = getFieldsValue()[m];
        return (
          val &&
          val.map(m1 => {
            return m1;
          })
        );
      });
      onChange(val);
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form>
        <Form.Item label="checkbox1">
          {getFieldDecorator("checkbox1")(
            <CheckboxGroup options={["a", "b", "c"]} />
          )}
        </Form.Item>
        <Form.Item label="checkbox2">
          {getFieldDecorator("checkbox2")(
            <CheckboxGroup options={["d", "e", "f"]} />
          )}
        </Form.Item>
        <Form.Item label="checkbox3">
          {getFieldDecorator("checkbox3")(
            <CheckboxGroup options={["g", "h", "i"]} />
          )}
        </Form.Item>
      </Form>
    );
  }
}

SonPage = Form.create({
  onValuesChange: (props, changedValues, allValues) => {
    // console.log(props, changedValues, allValues);
  }
})(SonPage);

export default connect()(SonPage);
