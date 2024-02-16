# Plesk CRON

## Add new CRON job

* Go to **Scheduled Tasks** under **Dev Tools**

![Scheduled Tasks](../../src/manuals/plesk/sheduled-tasks.png)

* Click on **Add Task**

![Scheduled Tasks](../../src/manuals/plesk/sheduled-tasks-add.png)

* Select **Run a PHP script** under **Task type**
* Use `httpdocs/app/bin/legacy` under **Script path**
* Set `-C cron` under **With arguments**
* Select PHP `8` under **Use PHP version**
* Select **Cron style** under **Run** and enter `* * * * *`
* Select **Do not notify** under **Notify**

![Scheduled Tasks](../../src/manuals/plesk/sheduled-tasks-demo.png)

* Click on **Run Now** and make sure that the command works

![Scheduled Tasks](../../src/manuals/plesk/sheduled-tasks-ok.png)

* Click **OK** to finish adding the CRON
