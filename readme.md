# Isomorphic-Git `pull` Preserving Unstaged Additions?

## Running

`node .`

1. Run the initial `clone`
2. Create a new file in `temp` to introduce an unstaged addition
3. Make in change in https://github.com/TomasHubelbauer/isogit-pull-repo
4. Re-run to cause a `pull`
5. Check to see if the unstaged addition survived

The unstanged addition **survives**!

What about an unstaged change?

1. Make a change to `README.md`
2. Make a change in https://github.com/TomasHubelbauer/isogit-pull-repo (fast-forwardable)
3. Run to cause a pull

The unstaged, fast-forwardable change **gets lost**!!!
