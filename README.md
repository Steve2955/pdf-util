![Build and Deploy](https://github.com/Steve2955/pdf-util/workflows/Build%20and%20Deploy/badge.svg)

# pdf-util

Merge PDFs and more directly in your browser without sending them to some server.

## Description

I often find myself needing to merge multiple PDFs into one. Unwilling to install some random from the internet, I tend to use some random website to do the merging. All of the services I tested did the merging on their server which is a huge privacy concern in my opinion. That's why I created this project to be able to privately merge PDFs directly in the browser. The goal of the project is not only to provide a tool for merging PDFs, but also some other useful utilities for handling them.

## Getting Started

You can just use the [demo](https://steve2955.github.io/pdf-util/) hosted on Github Pages or clone the repo:

```sh
git clone https://github.com/Steve2955/pdf-util.git
cd pdf-util
```

Next install all dependencies and after that you will be able to run a dev-server or build the whole project (you will need [Node.js](https://nodejs.org/) with [NPM](https://www.npmjs.com/) for that)

```sh
npm install

npm run serve
npm run build
```

## Built With

* [Vue.js](https://vuejs.org/)
* [Buefy](https://buefy.org/)
* [PDF-LIB](https://pdf-lib.js.org/)
* [file-dialog](https://github.com/alnorris/file-dialog)
* [downloadjs](https://github.com/rndme/download)
