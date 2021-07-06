#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

"use strict";

const fs = require("fs");
const path = require("path");
const ora = require("ora");
const output = fs.readFileSync(path.join(__dirname, "output"), "utf8");

const spinner = ora("Loading the information about shaurya").start();
spinner.color = "green";

setTimeout(() => {
  spinner.stop();
  console.log(output);
}, 1000);
