import checkPropType from "check-prop-types";

export const checkProps = (component, conformingProps) => {
  const propError = checkPropType(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
