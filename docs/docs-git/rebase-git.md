---
sidebar_position: 1
---

# Rebasing with Git

Rebasing is one of the features you probably want to have, if you plan to work on a neat git based project.

## 🍣 Where To Rebase?

If you know how many commits you make, to rebase you use `git rebase` with `-i` flag to enable interactive rebasing. The `HEAD~<n>` corresponds to the number of commits you have done (e.g. HEAD~4 if you have 4 commits to rollback to get to common ancestor commit).

```bash
git rebase -i HEAD~<n>
```

Sometimes, you commit a lot and forgot how many commits you'd make. To know the least common anscestor you have with master, you do `git merge-base` with your branch name as parameter.

```bash
git merge-base <your-branch> master
```

The above command will return a git hash which you can use on the `git rebase` command.

If you already know the git hash, then you can rollback to that specific commit and moving all current changes to unstaged. Once, the editor pop-ups you will choose which commit to retain, squash, and reword.

```bash
git rebase -i <git-ref-hash>
```

## 🍣 Merge Latest From Master

If you've already rebased your changes and needed to get lastest changes from master. All you have to do is rebase to the latest changes from master.
This command will do that.

```bash
git rebase origin/master
```

In any case, you've encountered some conflict first resolve it then continue in rebasing instead of creating new merge commit.

```bash
git rebase --continue
```

## 🍣 Overwriting Remote Repo Changes

Once all is done, overwrite your remote repo latest changes if you've pushed it. This will do a **force** push ignoring current ref on remote repo.

```bash
git push -f
```

## 🍣 Did Something Wrong? In Need Of Rollback

Did something wrong on merging conflicts? Don't worry you can still see your previous changes using the command `git reflog` short for **reference log**.
You can checkout the reference hash then re-merge your changes.

```bash
git reflog
```

## References

- `https://www.digitalocean.com/community/tutorials/how-to-rebase-and-update-a-pull-request`
