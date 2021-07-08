const novice = [
  {command: 'date', description: 'Show date and time', category: 'System Basic'},
  {command: 'cal', description: 'Show calendar', category: 'System Basic'},
  {command: 'w', description: 'Display who is logged in', category: 'System Basic'},
  {command: 'whoami', description: 'Display effective username', category: 'System Basic'},

  {command: 'ls -l', description: 'List current dir contents (long format)', category: 'Directories Basic'},
  {command: 'ls', description: 'List current dir contents', category: 'Directories Basic'},
  {command: 'ls -a', description: 'List current dir contents including hidden', category: 'Directories Basic'},
  {command: 'cd', description: 'Change to home dir', category: 'Directories Basic'},
  {command: 'cd development', description: "Change to a directory called 'development'", category: 'Directories Basic'},
  {command: 'pwd', description: 'Show current directory', category: 'Directories Basic'},
  {command: 'mkdir development', description: "Make directory called 'development'", category: 'Directories Basic'},
  {command: 'rm -r development', description: "Remove directory called 'development'", category: 'Directories Basic'},
  {command: 'cp -r projects frontend', description: "Copy a directory called 'projects' into another dir called 'frontend' ", category: 'Directories Basic'},
  {command: 'cd -', description: 'Change to previous working directory', category: 'Directories Basic'},
]

const intermediate = [
  {command: 'finger user', description: 'Show info about user', category: 'System Basic'},
  {command: 'uname -a', description: 'Show kernel info', category: 'System Basic'},
  {command: 'uptime', description: 'Display system uptime', category: 'System Basic'},
  {command: 'ls -t', description: 'List current dir contents sorted by modified date', category: 'Directories Basic'},
  {command: 'rm -rf development', description: "Forcefully remove a directory called 'development'", category: 'Directories Basic'},
]

const cmdData = {novice, intermediate}

export { cmdData };


