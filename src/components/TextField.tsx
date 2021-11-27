import React from "react";

interface Props {
  placeholder: string;
}

export const TextField: React.FC<Props> = ({ placeholder }) => {
  
  return (
    <div>
      <input placeholder={placeholder} type="text" />
      
    </div>
  );
};


