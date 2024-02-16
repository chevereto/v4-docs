# cPanel App files

## Installing Chevereto

To install Chevereto on cPanel you need to use the release package and cPanel's file manager to unzip this package in your target website.

* Go to **File Manager** under **Files**

![Files](../../src/manuals/cpanel/files.png)

* Navigate to your home `/home/user/` home directory
* Click on **Upload** and on **Select File**
* Upload the release zip file that you downloaded following [using release package](../../application/installing/installation.md#using-release-package) instructions
* Once uploaded, go back to the file manager at `/home/user/` directory
* Right-click on the zip file file and select **Extract**

![File Manager Extract](../../src/manuals/cpanel/file-manager-extract.png)

* A prompt appears, enter path `/public_html` and click on **Extract Files**

You can customize `/public_html` to reflect the path for your configured website.

![File Manager Extract Files](../../src/manuals/cpanel/file-manager-extract-files.png)

* If you are installing Chevereto for the first time you can continue with [Setup](../../application/installing/installation.md#setup).

## Updating Chevereto

To update Chevereto on cPanel simply follow the steps described above. That process only alters the application files, it won't touch the website contents.

If you made modifications to the software you may want to review these changes before.
