import { StackNavigationProp } from "@react-navigation/stack";
import { Provider } from "../../../../api/graphql/api.schema";
import { THomeStackParamList } from "../HomeNavigator/types";

export interface IProviderSummaryProps {
  provider: Provider;
  navigation: StackNavigationProp<
    THomeStackParamList,
    "HomeExplorer",
    undefined
  >;
}
