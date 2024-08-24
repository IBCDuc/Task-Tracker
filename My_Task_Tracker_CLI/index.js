#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const pathtask = path.join(__dirname, "path.json");
// Function that create id
function Nextid(read) {
  if (read.length > 0) {
    let max = read[0].id;
    for (let i = 0; i < read.length; i++) {
      if (read[i].id > max) {
        max = read[i].id;
      }
    }
    return max + 1;
  } else {
    return 1;
  }
}

//logic structure
if (!fs.existsSync(pathtask)) {
  fs.writeFileSync(pathtask, JSON.stringify([]));
}
let read = JSON.parse(fs.readFileSync(pathtask, "utf8"));

const arr = process.argv.slice(2);
const method = arr[0];
const specific = arr[1];
const texts = arr[2];

//add task
if (method == "add") {
  const id = Nextid(read);
  read.push({
    id: Nextid(read),
    description: specific,
    status: "not done",
    createdAt: new Date(),
    updateAt: null,
  });
  console.log(`Added Task ${id} Succesfully`);
}
// delete task
if (method == "delete") {
  for (let i = 0; i < read.length; i++) {
    if (read[i].id == specific) {
      read.splice(i, 1);
      console.log(`Delete ${specific} Succesfully`);
    }
  }
}

//list specific task
if (method == "list" && specific == "done") {
  for (let i = 0; i < read.length; i++) {
    if (read[i].status == "mark-done") {
      console.log(read[i]);
    }
  }
}
if (method == "list" && specific == "in-progress") {
  for (let i = 0; i < read.length; i++) {
    if (read[i].status == "mark-in-progress") {
      console.log(read[i]);
    }
  }
}
if (method == "list" && specific == "not done") {
  for (let i = 0; i < read.length; i++) {
    if (read[i].status == "not done") {
      console.log(read[i]);
    }
  }
}

// list all task
if (method == "list" && specific == null) {
  const show = JSON.parse(fs.readFileSync(pathtask, "utf8"));
  for (let i = 0; i < show.length; i++) {
    console.log(show[i]);
  }
}

// update task
if (method == "update") {
  for (let i = 0; i < read.length; i++) {
    if (read[i].id == specific) {
      read[i].description = texts;
      read[i].updateAt = new Date();
      console.log(`Update task ${specific} sucessfully`);
    }
  }
}

// mark task
if (method == "mark-in-progress") {
  for (let i = 0; i < read.length; i++) {
    if (read[i].id == specific) {
      read[i].status = "mark-in-progress";
      console.log("mark successfully");
      read[i].updateAt = new Date();
    }
  }
}
if (method == "mark-done") {
  for (let i = 0; i < read.length; i++) {
    if (read[i].id == specific) {
      read[i].status = "mark-done";
      console.log("mark successfully");
      read[i].updateAt = new Date();
    }
  }
}

// all task that created have not done status
fs.writeFileSync(pathtask, JSON.stringify(read));
