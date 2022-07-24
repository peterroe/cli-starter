## cli-starter

A command line tool template.

## Try it now!

[Create repo from this template on Github](https://github.com/peterroe/cli-starter/generate)

Or:

```bash
$ npx degit peterroe/cli-starter my-cli
$ cd my-cli
$ pnpm i    # npm install -g pnpm
```

## Development

You can debug your cli tool before you publish it.

```shell
$ npm i -g esno  # make sure you have esno installed
$ npx esno src/index.ts  # run your cli tool in debug mode
```

## Example

This command will help you understand **how cli tool works**:

```shell
$ npx esno src/index.ts -h # show help
$ npx esno src/index.ts -v # show version
$ npx esno src/index.ts lint one two --name peterroe # demo usage
```

And then you can rewrite `src/index.ts` to what you want

Here are some projects that use `cli-starter`: [renames](https://github.com/peterroe/renames)、[tind](https://github.com/peterroe/tind)

More usage about `cac` please see [cac](https://github.com/cacjs/cac#simple-parsing)

## Build && Publish

Update the `name`:

```diff
{
- "name": "cli-starter",
+ "name": "xxx",
  "bin": {
-   "cli-starter": "./dist/index.mjs"
+   "xxx": "./dist/index.mjs"
  },
```

Build it:

```shell
$ pnpm build
```

Publish to npm:

```shell
$ pnpm release # or npm publish directly
```

## Try yourself!

Install **your own** command line tool:

```
$ npm install -g xxx
$ xxx -h
$ xxx -v
```

Then use it...