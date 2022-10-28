### Requirements

- Node >=12.22 and <=14.20 -- recommend using 14.20
- An internet connection

### How to start

Install npm dependencies by running `npm ci`. You should see output that looks like

```sh
$ npm ci
npm WARN prepare removing existing node_modules/ before installation
added 31 packages in 3.928s
```

Start the development server by running `npm start`. You should see output that looks like

```sh
$ npm start

> take-home-test@1.0.0 start /home/tills13/dev/take-home-test
> next

ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

### How to test

When you visit `http://localhost:3000`, you can see the list of users.
After 10 seconds you can see the NewsletterForm.

When you click on one user, you can see the list of posts for that user under the NewsletterForm.
If the number of posts is 0, you can see 'No Posts'.

You can see the PostForm below the posts.

- If you click the 'Add' button without filling in the inputs, you may receive an alert saying 'Please insert data'.
- If you click the 'Add' button after filling, you may receive an alert saying 'New Post ID: {id}'.