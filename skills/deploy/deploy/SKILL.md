---
name: deploy
description: Automated deployment workflow. Use when the user wants to deploy, stage all changes, commit, and push to the remote repository.
---

# Deploy Skill

This skill automates the process of staging all changes, creating a commit, and pushing to the remote repository.

## Workflow

1. **Stage Changes**: Run `git add -A` to stage all current changes (tracked and untracked).
2. **Commit**: 
   - Check if there are staged changes using `git status`.
   - If changes exist, create a commit message. If the user didn't provide one, generate a concise, descriptive message based on the `git diff --staged` output.
   - Run `git commit -m "<message>"`.
3. **Push**: Run `git push`. By default, push to the current branch's upstream. If it fails, check the current branch and try `git push origin <branch-name>`.

## Usage Examples

- "deploy"
- "/deploy"
- "deploy with message 'fix: update hero section'"
- "push everything to github"
