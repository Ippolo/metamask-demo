# Metamask demo
Simple HTML5 webpage to test [Metamask](https://metamask.io/) integration.

It loads the [ethers.js](https://github.com/ethers-io/ethers.js/) library from their CDN as described in the official [documentation](https://docs.ethers.io/v5/getting-started/#getting-started--importing--web-browser).

## Setup
If you manually open the `index.html` with the web browser it won't work because Metamask does not inject the Ethereum provider in web pages loaded from files. You need to serve the resources from an http(s) location.

#### Using Docker
Using [Docker](https://docs.docker.com/) you can quickly and easily setup a local Apache HTTP Server that serves this application.

First build a new Docker image:
```bash
docker build -t metamask-demo .
```

Then run a container based on this image:
```bash
docker run -p 8080:80 metamask-demo
```

Then navigate to http://localhost:8080

#### Without Docker
If you don't want to use Docker you have to:
- Download the Apache HTTP Server ([here](https://httpd.apache.org/download.cgi)) or any other web server.
- Paste the content of this repository in the document root directory.
- Manually run the web server.

## How it works
When you open the web application for the first time Metamask wallet is not connected. The application shows a button to connect your wallet to the application.

![image](https://user-images.githubusercontent.com/13246858/202860929-290a704b-c53f-4cf1-88c2-59920b86a69f.png)

Click on the `Connect Wallet` button and follow the instructions in the Metamask notification pop-up.

Now your Metamask wallet is connected and the application displays some basic information such as address of the connected wallet, current block number, total supply of the DAI ERC20 Stablecoin.

![image](https://user-images.githubusercontent.com/13246858/202860975-d04a1437-9be5-419f-b7f8-2e4cd4cbc35f.png)
