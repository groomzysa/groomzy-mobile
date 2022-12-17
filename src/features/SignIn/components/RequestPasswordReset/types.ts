import { DrawerScreenProps } from "@react-navigation/drawer";
import { TRootAppDrawerParamList } from "../../../../components/GNavigation/components/AppNavigator/types";

export interface IRequestPasswordResetProps
  extends DrawerScreenProps<TRootAppDrawerParamList, "Sign in"> {}
