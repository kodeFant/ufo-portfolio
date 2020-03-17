"use strict"

const tsNode = require("ts-node").register({
  compilerOptions: {
    module: "commonjs",
    target: "es2017",
  },
})

exports.createPages = require("./createPages").createPages
