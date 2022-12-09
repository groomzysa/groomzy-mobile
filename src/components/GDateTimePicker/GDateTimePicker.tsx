import React, { FC } from "react";
import { DateTimePickerContainer, DateTimePickerStyled } from "./styles";
import { IGDateTimePickerProps } from "./types";

export const GDateTimePicker: FC<IGDateTimePickerProps> = ({ onChange }) => {
  return (
    <DateTimePickerContainer>
      <DateTimePickerStyled
        variant="secondary"
        mode="time"
        value={new Date()}
        onChange={onChange}
      />
    </DateTimePickerContainer>
  );
};
