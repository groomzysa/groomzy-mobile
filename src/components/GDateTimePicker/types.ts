import { DateTimePickerEvent } from "@react-native-community/datetimepicker";

export interface IGDateTimePickerProps {
  onChange: (event: DateTimePickerEvent, date?: Date | undefined) => void;
}
