# Understanding the data

Workato creates manifest out of the Recipe Lifecycle Management feature
The data is nothing but a (sometimes large) `json` file that lists all the components of a recipe and thier relationships and connections along with the connections types.

## Manifest key areas

Lineage is only interested in some key areas of the recipe, that can allow an easier manipulation and are explanatory enough to compose the UI.

Those areas are:

### Recipe Metadata

What we could really call 'manifest'.

```json
{
  "name": "Add a contact to Customer Contact List",
  "description": "",
  "version": 2,
  "private": true,
  "concurrency": 1,
  ...
}
```

### Trigger information

This is equivalent to a entry point, indicating what triggers the start of the recipe.

```json
"code": {
  "number": 0,
  "provider": "clock",
  "name": "scheduled_event",
  "as": "2c2304a4",
  "description": "<span class=\"provider\">Trigger</span> every 5 minutes",
  "keyword": "trigger",
  "input": {
    "time_unit": "minutes",
    "trigger_every": "5",
    "timezone": "Europe/London"
  },
  ...
}
```

### Action steps

This is where the flow is describe, and this is also where most of Lineage's information for connections are taken from.

```json
"block": [
  {
    "number": 1,
    "provider": "google_sheets",
    "name": "add_spreadsheet_row_v4",
    "as": "c10be065",
    "keyword": "action",
    "input": {
      "spreadsheet": "1sDdIpmtpH_TJcgJ4z28e15auh0-.......",
      "sheet": "Sheet2",
      "data": {
        "col_1": "Your First Name",
        "col_2": "Your Last Name",
        "col_3": "youremail@address.com"
      }
    },
    ...
  }
]
```

### Connection Information

Contains all connected applications and their account references.

```json
"config": [
  {
    "keyword": "application",
    "provider": "clock",
    "skip_validation": false,
    "account_id": null
  },
  {
    "keyword": "application",
    "provider": "google_sheets",
    "skip_validation": false,
    "account_id": {
      "zip_name": "my_google_sheets_account.connection.json",
      "name": "My Google Sheets account",
      "folder": ""
    }
  }
]
```
