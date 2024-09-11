import { type FC } from "react";
import { View, type ImageSourcePropType } from "react-native";
import Animated from "react-native-reanimated";

type EmojiStickerProps = {
  stickerSource: ImageSourcePropType | undefined;
  imageSize: number;
};

export const EmojiSticker: FC<EmojiStickerProps> = (props) => {
  return (
    <View style={{ top: -350 }}>
      <Animated.Image
        source={props.stickerSource}
        resizeMode="contain"
        style={{ width: props.imageSize, height: props.imageSize }}
      />
    </View>
  );
};
