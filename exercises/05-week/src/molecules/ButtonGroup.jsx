import Button from "../atoms/button/Button";

const ButtonGroup = () => {
  return (
    <>
      <Button
        text={"Proceed to Payment"}
        bgButtonColor={"#382AE3"}
        textColor={"#ffffff"}
      />
      <Button text={"Cancel Order"} />
    </>
  );
};

export default ButtonGroup;
