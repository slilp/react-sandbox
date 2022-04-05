import PropTypes from "prop-types";

function Congrate({ success }) {
  return <div data-test="congrate-message">{success && "success"}</div>;
}

Congrate.propTypes = {
  success: PropTypes.bool,
};

export default Congrate;
