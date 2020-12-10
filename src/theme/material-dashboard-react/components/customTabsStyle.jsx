const unsetImportantLiteral = "unset !important";

const customTabsStyle = {
  cardTitle: {
    float: "left",
    padding: "10px 10px 10px 0px",
    lineHeight: "24px"
  },
  cardTitleRTL: {
    float: "right",
    padding: "10px 0px 10px 10px !important"
  },
  displayNone: {
    display: "none !important"
  },
  tabsRoot: {
    minHeight: unsetImportantLiteral
  },
  tabRootButton: {
    minHeight: unsetImportantLiteral,
    minWidth: unsetImportantLiteral,
    width: unsetImportantLiteral,
    height: unsetImportantLiteral,
    maxWidth: unsetImportantLiteral,
    maxHeight: unsetImportantLiteral,
    padding: "10px 15px",
    borderRadius: "3px",
    lineHeight: "24px",
    border: "0 !important",
    color: "#fff !important",
    marginLeft: "4px",
    "&:last-child": {
      marginLeft: "0px"
    }
  },
  tabLabelContainer: {
    padding: "0px"
  },
  tabLabel: {
    fontWeight: "500",
    fontSize: "12px"
  },
  tabSelected: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    transition: "0.2s background-color 0.1s"
  },
  tabWrapper: {
    display: "inline-block",
    minHeight: unsetImportantLiteral,
    minWidth: unsetImportantLiteral,
    width: unsetImportantLiteral,
    height: unsetImportantLiteral,
    maxWidth: unsetImportantLiteral,
    maxHeight: unsetImportantLiteral,
    "& > svg": {
      verticalAlign: "middle",
      margin: "-1px 5px 0 0"
    }
  }
};

export default customTabsStyle;
