import axios from "axios";

export default {
  // Gets all leads
  getList: function (req) {
		
    return axios.get("/api/list/getList",req);
  }

};