# Task Tracker
This is a sample project in (https://roadmap.sh/projects/task-tracker) used to track and manage your tasks.

Use CLI to interact to task.

## Features
- Add a new task with unique ID and store in JSON format.
- Update existing task description using task ID.
- Delete task using select task id.
- Mark task as [done] or [in-progress].
- List tasks by their status [not done], [done] or [inprogress].

## Require
Install nodejs on your system.

## Install
[    ]

## Usage
- Add a task:

`task_tracker add "your task"`

- Delete a task:

`task_tracker delete 1`

- Update a task:

`task_tracker update 1 "coding"`

- List all task:

`task_tracker list`

- Mark task status:

`task_tracker mark-done`

or

`task_tracker mark-in-progress`

- List task status:

`task_tracker list done`

or 

`task_tracker list in-progress`
