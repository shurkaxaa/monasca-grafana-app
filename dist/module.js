'use strict';

System.register(['./components/alarm_definitions', './components/overview', './components/alarms', './components/raised_alarms', './components/notifications', './components/edit_notification', './components/edit_alarm_definition', './components/config'], function (_export, _context) {
  "use strict";

  var AlarmDefinitionsPageCtrl, OverviewPageCtrl, AlarmsPageCtrl, RaisedAlarmsPageCtrl, NotificationsPageCtrl, EditNotificationPageCtrl, EditAlarmDefinitionPageCtrl, MonascaAppConfigCtrl;
  return {
    setters: [function (_componentsAlarm_definitions) {
      AlarmDefinitionsPageCtrl = _componentsAlarm_definitions.AlarmDefinitionsPageCtrl;
    }, function (_componentsOverview) {
      OverviewPageCtrl = _componentsOverview.OverviewPageCtrl;
    }, function (_componentsAlarms) {
      AlarmsPageCtrl = _componentsAlarms.AlarmsPageCtrl;
    }, function (_componentsRaised_alarms) {
      RaisedAlarmsPageCtrl = _componentsRaised_alarms.RaisedAlarmsPageCtrl;
    }, function (_componentsNotifications) {
      NotificationsPageCtrl = _componentsNotifications.NotificationsPageCtrl;
    }, function (_componentsEdit_notification) {
      EditNotificationPageCtrl = _componentsEdit_notification.EditNotificationPageCtrl;
    }, function (_componentsEdit_alarm_definition) {
      EditAlarmDefinitionPageCtrl = _componentsEdit_alarm_definition.EditAlarmDefinitionPageCtrl;
    }, function (_componentsConfig) {
      MonascaAppConfigCtrl = _componentsConfig.MonascaAppConfigCtrl;
    }],
    execute: function () {
      _export('ConfigCtrl', MonascaAppConfigCtrl);

      _export('OverviewPageCtrl', OverviewPageCtrl);

      _export('NotificationsPageCtrl', NotificationsPageCtrl);

      _export('EditNotificationPageCtrl', EditNotificationPageCtrl);

      _export('AlarmDefinitionsPageCtrl', AlarmDefinitionsPageCtrl);

      _export('EditAlarmDefinitionPageCtrl', EditAlarmDefinitionPageCtrl);

      _export('AlarmsPageCtrl', AlarmsPageCtrl);

      _export('RaisedAlarmsPageCtrl', RaisedAlarmsPageCtrl);
    }
  };
});
//# sourceMappingURL=module.js.map
