import Exzymn, { shallow } from "enzyme";
import ExzymnAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import Congrate from "./Congrate";
import { checkProps } from "../test/utils";

Exzymn.configure({ adapter: new ExzymnAdapter() });

const setUp = (props = {}) => shallow(<Congrate {...props}></Congrate>);
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test("render without error", () => {});

test("render no text when 'success' props is false", () => {
  const congrat = setUp({ success: false });
  const text = findByTestAttr(congrat, "congrate-message").text();
  expect(text).toBe("");
});

test("render text when 'success' props is true", () => {
  const congrat = setUp({ success: true });
  const text = findByTestAttr(congrat, "congrate-message").text();
  expect(text).toBe("success");
});

test("check prop", () => {
  const expectedProp = { success: true };
  checkProps(Congrate, expectedProp);
});
