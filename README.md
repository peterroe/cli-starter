## cli-starter

A command line tool template.

## Try it now!

[Create repo from this template on Github](https://github.com/peterroe/ts-starter/generate)

Or:

```bash
$ npx degit peterroe/cli-starter my-cli
$ cd my-cli
$ pnpm i    # npm install -g pnpm
```

## Development

```shell
$ npx esno src/index.ts
```

## Example

```shell
$ npx esno src/index.ts -h
$ npx esno src/index.ts -v
$ npx esno src/index.ts lint one two
```

## Build

```shell
$ pnpm build
```

## Publish

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

Publish to npm:

```shell
$ pnpm release # or npm publish directly
```

Install your own command line tool:

```
$ npm install -g xxx
```

Then use it...