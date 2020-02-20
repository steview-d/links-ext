## A Chrome browser extension for my Code Institute Milestone 4 project, Links.

My MS4 project is a web based bookmark manager, called Links, you can view it [here](https://github.com/steview-d/bookmarks). The repo is called ``bookmarks``, but the app is called ``Links``. I might change it. I might not.

At it's most basic level, the app will store a users bookmarks for easy reference at a later stage.

To aid users in adding bookmarks to the app, rather than forcing them to continually copy / paste urls from the address bar and add them manually, this extension is designed to make the whole process quicker and easier.

When a user clicks on the extension, it will open a new tab which points to the links app, and also sends the current URL to an 'import url' view.

From there the app will take care of the rest, the extension simply copies the current page address, and throws it at the Links app.

#### Installation

Once it does what its supposed to, it will be available directly from the chrome webstore, and I'll link it here.
Until then, or if you just want to install it manually, you can do the following.

- Download this repo and put into a file called ``anything you want``.
- From chrome, open the ``settings`` page and click ``extensions``. Or, just visit ``chrome://extensions/`` which does the same thing.
- At top right you will see a ``developer mode`` toggle. Make sure this is activated.
- Top left, you will see ``load unpacked``. Click this, and choose the folder called ``anything you want``.

That should be all, and a little blue icon should appear alongside all your other extensions. If it doesn't, either you have done something wrong, or I have explained it wrong.

#### Acknowledgements

Original unedited icon sourced from [favpng.com](http://favpng.com/) and used with permission.

This [Stack Overflow post](https://stackoverflow.com/questions/23208134/avoid-dynamically-injecting-the-same-script-multiple-times-when-using-chrome-tab) helped me solve the issue of the extension opening multiple tabs on each successive click and this [kind soul](https://stackoverflow.com/questions/60321893/how-to-stop-chrome-injecting-the-same-script-on-each-click-when-using-chrome-tab) helped me see the wood for the trees.