import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without crashing", () => {
  const wrapper = shallow(<App />);
  // console.log(wrapper.debug());
});

test("renders without no component", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
});
