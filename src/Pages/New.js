import Form from "../Components/TransactionNewForm";

function New({ postTransaction }) {
  return (
    <div>
      <h3>NEW</h3>
      <Form postTransaction={postTransaction} />
    </div>
  );
}

export default New;
