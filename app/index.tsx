import {Config, Services} from "./tsmvc-consumer/implementation/config/config";
import * as n from "angular2/core";
var user = Services.userService.getCompleteUser('1').then((user) => {
  console.log("got your addresses:" + user.addresses);
});
