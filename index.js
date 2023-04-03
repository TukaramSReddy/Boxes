const Box = (props) => {
  //  Write your code here.
  const { className, name } = props;
  return <p className={className}>{name}</p>;
};

const element = (
  //  Write your code here.
  <div className="bg-container ">
    <h1 className="heading">Boxes</h1>
    <div className="boxContainer">
      <div className="container1">
        <Box className="box1" name="Small" />
      </div>
      <div className="container2">
        <Box className="box2" name="Medium" />
      </div>
      <div className="container3">
        <Box className="box3" name="Large" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
