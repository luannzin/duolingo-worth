"use client";

import NumberFlow, { type NumberFlowProps } from "@number-flow/react";
import { useEffect, useState } from "react";

const ServerNumberFlow = ({ ...props }: NumberFlowProps) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (props.value) setValue(props?.value as number);
  }, [props.value]);

  return <NumberFlow {...props} value={value} />;
};

export { ServerNumberFlow };
