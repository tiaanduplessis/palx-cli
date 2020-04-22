#!/usr/bin/env node
'use strict'
const palx = require('./')
console.log(JSON.stringify(palx(process.argv[2]), null, 2))
