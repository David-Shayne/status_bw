var unifi = require('node-unifi');
let fs = require('fs');

var controller = new unifi.Controller('13.244.195.20', 8443);

// LOGIN
controller.login('bluewifiza', '12345679', (err) => {
  controller.getSites((err, sites) => {
    const site = sites[1].name;
  });
});
