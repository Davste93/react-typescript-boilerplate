import {Config, Services} from "./tsmvc-consumer/implementation/config/config";
//import * as n from "angular2/core";
//import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Table} from "./components/table";

//Create table component
<div id="app"></div>

var user = Services.userService.getCompleteUser('1').then((user) => {
  ReactDOM.render(
    <Table data={user.addresses}/>,
    document.getElementById('content')
  );
  React.createElement(Table({data: user.addresses}), null)
  ReactDOM.render(, document);
  console.log("got your addresses:" + user.addresses);
});
