/*
 *   Copyright 2017 StackHPC
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

import {AlarmDefinitionsPageCtrl} from './components/alarm_definitions';
import {OverviewPageCtrl} from './components/overview';
import {AlarmsPageCtrl} from './components/alarms';
import {RaisedAlarmsPageCtrl} from './components/raised_alarms'
import {NotificationsPageCtrl} from './components/notifications';
import {EditNotificationPageCtrl} from './components/edit_notification';
import {EditAlarmDefinitionPageCtrl} from './components/edit_alarm_definition';
import {MonascaAppConfigCtrl} from './components/config';

export {
  MonascaAppConfigCtrl as ConfigCtrl,
  OverviewPageCtrl,
  NotificationsPageCtrl,
  EditNotificationPageCtrl,
  AlarmDefinitionsPageCtrl,
  EditAlarmDefinitionPageCtrl,
  AlarmsPageCtrl,
  RaisedAlarmsPageCtrl
};
