# Git & GitHub Cheat Sheet

---

## 1. First-Time Setup
```bash
git config --global user.name "yourName"
git config --global user.email "your@email.com"
```

---

## 2. Start a Repo
```bash
git init                  # start a new repo in current folder
git clone <url>           # download an existing repo from GitHub
```

---

## 3. Daily Workflow
```bash
git status                # see what changed
git diff                  # see exact line-by-line changes (before staging)
git add .                 # stage ALL changed files   (. = everything)
git add index.js          # stage a specific file only
git commit -m "message"   # save snapshot with a message   (-m = message)
git push                  # upload commits to GitHub
git pull                  # download latest changes from GitHub
```

> **Flow:** edit → `add` → `commit` → `push`

---

## 4. Flags Explained
| Flag | Meaning | Example |
|------|---------|---------|
| `-m` | inline message | `git commit -m "fix bug"` |
| `-a` | auto-stage all tracked files (skip `git add`) | `git commit -a -m "msg"` |
| `-b` | create + switch branch in one step | `git checkout -b feat/login` |
| `-u` | set upstream (link local → remote, only needed once) | `git push -u origin main` |
| `-f` | force push (use carefully!) | `git push -f` |

---

## 5. Viewing History
```bash
git log                   # full commit history
git log --oneline         # short one-line view (best for finding IDs)
git show                  # details of last commit
git blame index.js        # who wrote each line in a file
```

---

## 6. Undoing Changes
```bash
git revert <commit-id>    # safe undo — creates a new "undo" commit
git reset --hard <id>     # dangerous — deletes all commits after <id>
git push -f               # force push after a reset (needed to update GitHub)
```

> Get `<commit-id>` from `git log --oneline`  
> Prefer `revert` in shared repos; use `reset` only on your own branches.

---

## 7. Branches
```bash
git branch                        # list all branches
git branch feat/login             # create a new branch
git checkout feat/login           # switch to a branch
git checkout -b feat/login        # create + switch in one command
git checkout main                 # go back to main

git merge feat/login              # merge a branch into current branch
git rebase main                   # rebase current branch on top of main
```

**Branch naming conventions:**
```
feat/added-login       # new feature
bug/fixed-crash        # bug fix
wip/experimenting      # work in progress
junk/testing-idea      # throwaway / experiment
```

---

## 8. Working with GitHub (Remote)
```bash
git remote -v                     # see linked remote URL
git push -u origin main           # first push — links local to GitHub (-u sets upstream)
git push                          # all future pushes (upstream already set)
git pull                          # fetch + merge latest from GitHub
git merge origin/<branch-name>    # merge a specific remote branch into current
```

---

## 9. Stash (Temporary Save)
```bash
git stash                # temporarily save uncommitted work
git stash list           # see all stashes
git stash apply          # restore the last stash (keeps it in list)
git stash pop            # restore + remove from list
```

> Use stash when you need to switch branches but aren't ready to commit.

---

## 10. Quick Reference Card
```
git init → git add . → git commit -m "" → git push

undo safely:   git revert <id>
undo hard:     git reset --hard <id> → git push -f
new branch:    git checkout -b feat/name
merge:         git merge <branch>
temp save:     git stash / git stash apply
```
