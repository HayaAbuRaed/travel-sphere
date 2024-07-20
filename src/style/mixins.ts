import { AppThemeMixins } from "./types";

const travelSphereMixins: AppThemeMixins = {
  niceScroll: (width = 10) => {
    return {
      overflow: "auto",
      transition: "all 0.3s ease",
      "&:hover": {
        transition: "all 0.3s ease",
        "&::-webkit-scrollbar-thumb": {
          background: "rgba(0,0,0,0.3)",
        },
      },
      "&::-webkit-scrollbar": {
        height: 10,
        width,
        position: "fixed",
        backgroundColor: "rgba(0,0,0,0)",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "rgba(0,0,0,0)",
        backgroundClip: "padding-box",
        border: "2px solid rgba(0, 0, 0, 0)",
        borderRadius: 2,
        minHeight: 4,
      },
      "&::-webkit-scrollbar-thumb:hover": {
        borderWidth: "20px",
      },
      "&::-webkit-scrollbar-track": {
        "-webkit-box-shadow": "inset 0 0 6px rgba(0, 0, 0, 0.1)",
      },
      "&::-webkit-scrollbar-track:hover": {
        backgroundColor: "#F5F5F5",
      },
    };
  },
};

export default travelSphereMixins;
