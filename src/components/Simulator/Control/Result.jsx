import React from "react";
import {isEmpty, isNil} from "ramda";

import { Typography } from "antd";

const Result = ({ probabilityValue }) => {
  const { Title } = Typography;

  console.log(!isEmpty(probabilityValue))
  console.log(!isNaN(probabilityValue))
  console.log(probabilityValue)

  const doesProbabilityValueExist = (
    !isEmpty(probabilityValue) &&
    !isNil(probabilityValue) &&
    !isNaN(probabilityValue)
  )

  return (
    <div className="w-2/5 h-full bg-gray-200 flex justify-center items-center">
      {doesProbabilityValueExist && (<Title level={1}>{`${(probabilityValue * 100).toFixed(2)} %`}</Title>)}
    </div>
  );
};

export default Result;
