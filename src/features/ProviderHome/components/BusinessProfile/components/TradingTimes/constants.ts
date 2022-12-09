import { capitalize } from "lodash";
import { DayType } from "../../../../../../api/graphql/api.schema";
import { PickerOption } from "../../../../../../utils/types";

export const DAYS: PickerOption<DayType>[] = [
  {
    label: capitalize(DayType.Mon),
    value: DayType.Mon,
  },
  {
    label: capitalize(DayType.Tue),
    value: DayType.Tue,
  },
  {
    label: capitalize(DayType.Wed),
    value: DayType.Wed,
  },
  {
    label: capitalize(DayType.Thr),
    value: DayType.Thr,
  },
  {
    label: capitalize(DayType.Fri),
    value: DayType.Fri,
  },
  {
    label: capitalize(DayType.Sat),
    value: DayType.Sat,
  },
  {
    label: capitalize(DayType.Sun),
    value: DayType.Sun,
  },
];
