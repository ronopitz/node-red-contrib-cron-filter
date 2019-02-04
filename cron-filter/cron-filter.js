
module.exports = function(RED) {

    function CRONFilter(config) {
        var parser = require('cron-parser');
        RED.nodes.createNode(this, config);

        var node = this;

        node.status({ });
        node.cron = config.crontab;

        try {
          var cronobj = parser.parseExpression(node.cron);
          cronobj = JSON.parse(JSON.stringify(cronobj));
        } catch (err) {
          node.error("Invalid Cron Expression");
        }
        node.cronobj = cronobj._fields;

        this.on('input', function(msg) {

          //create time fields
          var now = new Date();
          var second = now.getSeconds();
          var minute = now.getMinutes();
          var hour = now.getHours();
          var day_of_month = now.getDate();
          var month = now.getMonth() + 1; // January = 0
          var day_of_week = now.getDay();

          if ( node.cronobj.second.indexOf(second) != -1 && node.cronobj.minute.indexOf(minute) != -1 && node.cronobj.hour.indexOf(hour) != -1 && node.cronobj.dayOfMonth.indexOf(day_of_month) != -1 && node.cronobj.month.indexOf(month) != -1 && node.cronobj.dayOfWeek.indexOf(day_of_week) != -1) {
            node.send(msg);
          }

        });
    }

    RED.nodes.registerType("cron-filter", CRONFilter);
}
