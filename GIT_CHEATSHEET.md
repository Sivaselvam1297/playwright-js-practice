
# Git Quick Reference Guide

## 1. Daily Push Workflow (Run in this order)
```bash
git status
# Shows modified, deleted, or newly added files.

git add .
# Stages all modified files so they are ready to be committed.

git commit -m "Your clear description here"
# Saves your staged changes locally with a message.

git push origin main
# Uploads all saved commits from local to GitHub remote repository.
2. Syncing from GitHub
Bash
git pull origin main
# Downloads and merges the latest updates from GitHub into your local workspace.
3. Branches
Bash
git branch
# Lists all local branches.

git checkout -b feature/login-tests
# Creates a new branch and switches into it immediately.

git checkout main
# Switches back to the main branch.
4. Useful Shortcuts & Fixes
Bash
git log --oneline
# Shows a short history of past commits (Press 'q' to exit).

git restore <file-name>
# Discards unstaged local edits in a specific file.

---

### Step 3: Save and push everything to GitHub

Right now you have **21 uncommitted changes** (your `Week-1` reorganization, `Week-2` files, and this new cheatsheet). Run these 3 commands to backup everything:

```bash
git add .
git commit -m "Organize Week 1 and Week 2 files and add Git cheatsheet"
git push origin main