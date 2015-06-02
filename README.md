# cloudify-write-your-own-ui-demo

a demo project for showing how to write your own ui for cloudify

This project is a proof of concept or a seed to a custom cloudify ui. 
 
It is a pure frontend implementation to a basic UI. 


# Running Requirements 

The following items should be installed

 - node
 - grunt-cli - use `npm install -g grunt-cli`
 - bower - use `npm install -g bower`

# How to run this project?

`grunt server` - will open your browser on the blueprints page

# Configuration 

## Different manager ip 

the following lines in gruntfile define the ip and port for cloudify manager. 

you can either declare environment variables or change these lines to direct them to a different manager. 

```
host: process.env.CLOUDIFY_IP || '10.10.1.10',
port: process.env.CLOUDIFY_PORT || 80,
```                        


