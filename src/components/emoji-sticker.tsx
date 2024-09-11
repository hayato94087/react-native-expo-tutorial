import { type FC } from "react";
import { Image, View, type ImageSourcePropType } from "react-native";

type EmojiStickerProps = {
  stickerSource: ImageSourcePropType | undefined;
  imageSize: number;
};

export const EmojiSticker: FC<EmojiStickerProps> = (props) => {
  return (
    <View style={{ top: -350 }}>
      <Image
        source={props.stickerSource}
        resizeMode="contain"
        style={{ width: props.imageSize, height: props.imageSize }}
      />
    </View>
  );
};
