# Chat App


![image](https://user-images.githubusercontent.com/4227077/112848814-7ba6c600-9076-11eb-91f9-0a1d66d48619.png)


## Installation

Development

```
git clone github.com/mvoloz/chat.git
yarn install
yarn start
```

`yarn build` will build a production bundle

### Required Environment Variables

- SOCKET_SERVER_HOST
- GIPHY_API_KEY

### Giphy Support

in chat, `/giphy <string>` will show a preview window that allows
the user to send, 'shuffle' (get another randomized image from the original result set) or cancel.

### Limitations

Current version was built to be close to "pixel perfect" based on the design mock provided, in its current state, it is not responsive.
