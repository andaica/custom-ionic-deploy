## Ionic Cloud Deploy Plugin (legacy)

This is the plugin for Ionic Cloud Deploy, which is now superseded by [Ionic Pro Deploy](http://ionicframework.com/docs/pro/deploy/).

We strongly recommend migrating to the new version of Deploy which has resolved a number of issues and is in active development. Migration is straightforward, please refer to the [Cloud -> Pro Migration Guide](http://ionicframework.com/docs/pro/migration/) for a walkthrough. 

For documentation on Legacy Deploy, see the [legacy docs](https://docs.ionic.io/services/deploy/) for more detailed information.

## Reporting issues with this plugin

Please file a ticket with support for any issues with this plugin: http://ionicframework.com/support

We will not see github issues filed here and will not be able to respond to them in any timely manner.

----

Legacy plugin instructions

## Installation

Install directly from our repo:
```
cordova plugin add https://github.com/andaica/custom-ionic-deploy.git
```

Or see ionic [docs](https://docs.ionic.io/services/deploy/) for installation steps.

## Cordova Plugin API


### `IonicDeploy`

- this Cordova plugin defines a new global `IonicDeploy` object

- this object exposes the following methods


#### `init (appId: String, success, failure)`

- appId: `String`

(This is no longer nessesary)


#### `check (server_url, app_id, channel_tag, success, failure)`

- server_url: `String`
- appId: `String`
- channelTag: `String`
- success: `CheckHandler`
- failure: `ErrorHandler`

Contact the remote IonicDeploy server (server_url) and check current version from file at path /autoupdate/`channel_tag`/version.json.


##### `CheckHandler (result)`

- result: `String`

- if `result` is the string `"true"`, then a new update is available


##### `ErrorHandler (error)`


#### `download (app_id, success, failure)`

- appId: `String`
- success: `DownloadHandler`
- failure: `ErrorHandler`

Using the metadata from a recent `IonicDeploy.check(...)`, download and store an available update ZIP file.


##### `DownloadHandler (result)`

- result: `String` or `Number`

If `result` is a numeric value, it communicates progress. If `result` is the string `"true"`, it communicates completion.


#### `extract (app_id, success, failure)`

- appId: `String`
- success: `ExtractHandler`
- failure: `ErrorHandler`

Unpack and apply the update ZIP file from a recent `IonicDeploy.download(...)`. After the app is [terminated](https://developer.apple.com/library/ios/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/TheAppLifeCycle/TheAppLifeCycle.html#//apple_ref/doc/uid/TP40007072-CH2-SW7) / [destroyed](https://developer.android.com/reference/android/app/Activity.html#onDestroy()) by the operating system, the update will take effect.

The contents of the ZIP file should be the contents of the platform-specific "www" directory from a Cordova project. This directory is regenerated during `cordova build`.


##### `ExtractHandler (result)`

- result: `String` or `Number`

If `result` is a numeric value, it communicates progress. If `result` is the string `"done"`, it communicates completion.


#### `redirect (app_id, success, failure)`

- appId: `String`

Navigate the webview to the version provided by a recent `IonicDeploy.extract(...)`. This is useful for use cases where it is undesirable to wait for the operating system to terminate / destroy the app.

Any unsaved user data / state will be lost, so design your UX and/or data persistence approach accordingly.


#### `info (app_id, success, failure)`

- appId: `String`
- success: `SuccesstHandler`
- failure: `ErrorHandler`

##### `SuccesstHandler (result)`

- result: `Json` (deploy_uuid and binary_version)
