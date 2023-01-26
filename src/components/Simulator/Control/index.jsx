import React, { useState } from "react";
import Form from "./Form";
import Result from "./Result";

const Control = ({ isPickCoinLoading, setIsPickCoinLoading }) => {
  const [probabilityValue, setProbabilityValue] = useState(null);

  return (
    <div className="flex w-full h-full justify-start items-center">
      <Result probabilityValue={probabilityValue} />
      <Form
        setProbabilityValue={setProbabilityValue}
        isPickCoinLoading={isPickCoinLoading}
        setIsPickCoinLoading={setIsPickCoinLoading}
      />
    </div>
  );
};

export default Control;
