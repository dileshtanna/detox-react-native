import React from "react";
import { Text } from "react-native";
import { shallow } from "enzyme";

describe("Text", () => {
  it("should render text", () => {
    const wrapper = shallow(<Text>Hello, World!</Text>);
    expect(wrapper.text()).toEqual("Hello, World!");
  });
});

class Component extends React.Component {
  render() {
    const { data } = this.props;
    return data.map((item, index) => (
      <Dropdown text={item.title} key={index} />
    ));
  }
}
