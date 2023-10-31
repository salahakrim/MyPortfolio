import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`I'm`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "salaheddine akrim",
          "a web developer",
          "a blogger",
          "a freelancer",
        ]}
      />
    </h1>
  );
};
export default AnimationText;
