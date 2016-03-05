import {Config, Services} from "./tsmvc-consumer/implementation/config/config";

var user = Services.userService.getCompleteUser('1').then((user) => {
  console.log("got your addresses:" + user.addresses);
});
