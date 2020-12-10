const radiusLiteral = "calc(.25rem - 1px)";

const cardImagesStyles = {
  cardImgTop: {
    width: "100%",
    borderTopLeftRadius: radiusLiteral,
    borderTopRightRadius: radiusLiteral
  },
  cardImgBottom: {
    width: "100%",
    borderBottomRightRadius: radiusLiteral,
    borderBottomLeftRadius: radiusLiteral
  },
  cardImgOverlay: {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    padding: "1.25rem"
  },
  cardImg: {
    width: "100%",
    borderRadius: radiusLiteral
  }
};

export default cardImagesStyles;
