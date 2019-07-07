import httpService from "./_httpService";

export default {
  getCardList() {
    const path = "/cards";
    return httpService({
      method: "get",
      path
    });
  },
  getCarteList() {
    const path = "/cartes";
    return httpService({
      method: "get",
      path
    });
  }
};
