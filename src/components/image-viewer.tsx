import { type FC } from "react";
import { Image, StyleSheet, type ImageSourcePropType } from "react-native";

type ImageViewerProps = {
  placeholderImageSource: ImageSourcePropType;
};

export const ImageViewer: FC<ImageViewerProps> = (props) => {
  return <Image source={props.placeholderImageSource} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
