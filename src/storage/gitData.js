const novice = [
  {command: 'git init', description: 'Initialize a repository', category: 'Git Basics'},
  {command: 'git status', description: 'Show status of working tree', category: 'Git Basics'},
  {command: 'git add index.js', description: "Start tracking a file called 'index.js", category: 'Git Basics'},
  {command: 'git add app.js', description: "Stage a modified file called 'app.js' ", category: 'Git Basics'},
  {command: 'git diff', description: "Show what's changed but not yet staged", category: 'Git Basics'},
  {command: 'git commit', description: "Commit changes", category: 'Git Basics'},
  {command: 'git commit -a', description: "Stage files and commit", category: 'Git Basics'},
  {command: 'git mv index.js app.js', description: "rename index.js to app.js", category: 'Git Basics'},
  {command: 'git fetch development', description: "Pull data from a remote 'development' branch without merging", category: 'Git Basics'},
  {command: 'git pull origin development', description: "Fetch and merge branch called 'development' from origin", category: 'Git Basics'},
  {command: 'git clone someUrl', description: "Create local copy of a remote repository at 'someUrl'", category: "Git Basics"},
]

const intermediate = [
  {command: 'git branch', description: "Show current branches", category: 'Branching'},
  {command: 'git push origin main', description: "Push main branch to origin server", category: 'Branching'},
  {command: 'git branch -v', description: "Show last commit on all branches", category: 'Branching'},
  {command: 'git checkout main', description: "Switch to branch 'main'", category: 'Branching'},
  {command: 'git branch someFeature', description: "Create new branch called 'someFeature'", category: 'Branching'},
  {command: 'git checkout -b anotherFeature', description: "Create branch 'anotherFeature' and switch to it", category: 'Branching'},
  {command: 'git branch -d finishedFeature', description: "Delete branch 'finishedFeature' ", category: 'Branching'},
  {command: 'git branch --merged', description: "Show branches already merged into current branch", category: 'Branching'},
  {command: 'git branch --no-merged', description: "Show branches not yet merged into current branch", category: 'Branching'},
  {command: 'git branch -D feature1', description: "Force delete branch 'feature1' that is not yet merged", category: 'Branching'},
  {command: 'git push origin feature1', description: "Push local branch 'feature1' to origin", category: 'Branching'},
  {command: 'git push staging development:main', description: "Push 'development' branch to remote staging main", category: 'Branching'},
  {command: 'git checkout -b feature2 origin/feature2', description: "Create local branch 'feature2' based off origin branch", category: 'Branching'},
  {command: 'git checkout --track origin/fix2', description: "Create tracking branch 'fix2' based off origin", category: 'Branching'},
  {command: 'git push origin :fix2', description: "Delete remote branch 'fix2' from origin", category: 'Branching'},
]

const gitData = {novice, intermediate}


export { gitData };
