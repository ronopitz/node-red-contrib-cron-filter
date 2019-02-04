**CRON Filter Node**

Filters messages by comparing the CRON entry with the message arrival time of the message at the node.

**Input**

No special fields are required.

**Output**

Tune the arrival time of the message with the CRON entry. The message is forwarded. All other messages are discarded.
No changes are made to the message.

**CRON Entry**

*Structure*

The following fields are required and delimited by space.

    Seconds Minutes Hours Day_of_Month Month Day_of_Week

*Patterns*

Asterisk. E.g. *
Ranges. E.g. 1-3,5
Steps. E.g. */2

*Ranges*

- Seconds: 0-59
- Minutes: 0-59
- Hours: 0-23
- Day of Month: 1-31
- Months: 0-11 (Jan-Dec)
- Day of Week: 0-6 (Sun-Sat)

*Example*

Working hours (Monday to Friday)

    * * 7-18 * * 1-5
