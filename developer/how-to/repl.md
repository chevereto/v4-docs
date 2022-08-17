# 💻 REPL

Chevereto includes support for [Tinkewell](https://tinkerwell.app/) enabling to execute any set of instructions under the environment of a [read–eval–print loop](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) (REPL).

![Tinkerwell Chevereto](../../src/third-party/tinkerwell/tinkerwell-chevereto.png)

With this REPL you can interact directly with the Chevereto application. It enables to query the database, call any function within the public API, debug and to facilitate [exploratory programming](https://en.wikipedia.org/wiki/Exploratory_programming).

## Using Tinkerwell

💡 Under the `.tinkerwell` directory you will find the custom driver used by Chevereto.

To use Tinkerwell with Chevereto it will require to connect to your Chevereto installation. This can be achieved by several means, including: [SSH](https://tinkerwell.app/docs/3/setup-guides/ssh), [Docker](https://tinkerwell.app/docs/3/setup-guides/docker), [WSL2](https://tinkerwell.app/docs/3/setup-guides/wsl) and more.

You can also open the local folder with the Chevereto application and configure the Tinkerwell application with the appropriate PHP binary.
