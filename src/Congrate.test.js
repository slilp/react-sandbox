import { shallow } from "enzyme";
import Congrate from "./Congrate";
import { checkProps, findByTestAttr } from "../test/utils";

const setUp = (props = {}) => shallow(<Congrate {...props}></Congrate>);

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
