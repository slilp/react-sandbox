export default function Congrate({ success }) {
  return <div data-test="congrate-message">{success && "success"}</div>;
}
