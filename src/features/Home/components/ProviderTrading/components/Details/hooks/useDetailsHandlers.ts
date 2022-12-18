import { Linking } from "react-native";

export const useDetailsHandlers = () => {
  const visitSocial = (name: string, username: string) => {
    switch (name) {
      case "Instagram":
        Linking.openURL(`https://instagram.com/${username}`);
        break;
      case "Tiktok":
        Linking.openURL(`https://www.tiktok.com/@${username}`);
        break;
      case "Twitter":
        Linking.openURL(`https://www.twitter.com/${username}`);
        break;
      case "Twitter":
        Linking.openURL(`https://www.facebook.com/${username}`);
        break;
    }
  };

  return {
    visitSocial,
  };
};
