import httpService from "./_httpService";

export default {
  getDesignPapers() {
    const path = "/designPapers";
    return httpService({
      method: "get",
      path
    });
  }
};
