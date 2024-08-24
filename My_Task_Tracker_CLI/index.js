#!/usr/bin/env node
const fs = require('fs')
let number = 0
const path = './My_Task_Tracker_CLI/task.json'
let read = JSON.parse(fs.readFileSync(path, 'utf8'))
for (let i = 0 ; i < read.length; i++) {
    number += 1
}

const arr = process.argv.slice(2)
const method = arr[0]
const specific = arr[1]
const texts = arr[2]

if (method == "add") {
    read.push({id: number, description: specific, status: "not done", createdAt: new Date(), updateAt: null })
    console.log(`Added Task ${number} Succesfully`)
}

if (method == "delete") {
    for (let i = 0; i < read.length; i++){
        if (read[i].id == specific ) {
            read.splice(i,1)
            console.log(`Delete ${specific} Succesfully`)
        }
    }
}


if (method == "list" && specific == 'done') {
    for (let i =0; i < read.length; i++) {
        if (read[i].status == 'mark-done') {
            console.log(read[i])
        }
    }
}  
if (method == "list" && specific == 'in-progress') {
    for (let i =0; i < read.length; i++) {
        if (read[i].status == 'mark-in-progress') {
            console.log(read[i])
        }
    }
} 
if (method == "list" && specific == 'not done') {
    for (let i =0; i < read.length; i++) {
        if (read[i].status == 'not done') {
            console.log(read[i])
        }
    }
}
if (method == "list" && specific == '') {
    const show = JSON.parse(fs.readFileSync(path , 'utf8'))
    for (let i = 0; i < show.length; i++) {
        console.log(show[i])
    }
}

if(method == "update") {
    for (let i =0; i < read.length; i++) {
        if (read[i].id == specific) {
            read[i].description = texts
            read[i].updateAt = new Date()
            console.log(`Update task ${specific} sucessfully`)
        }
    }
}

if (method == "mark-in-progress") {
    for (let i = 0; i < read.length; i++) {
        if (read[i].id == specific) {
            read[i].status = "mark-in-progress"
            console.log('mark successfully')
            read[i].updateAt = new Date()
        }
    }
}
if (method == "mark-done") {
    for (let i = 0; i < read.length; i++) {
        if (read[i].id == specific) {
            read[i].status = "mark-done"
            console.log('mark successfully')
            read[i].updateAt = new Date()
        }
    }
}

fs.writeFileSync(path , JSON.stringify(read))





