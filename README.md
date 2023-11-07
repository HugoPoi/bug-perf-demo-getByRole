# bug-perf-demo-getByRole
* Samples to reproduce https://github.com/testing-library/dom-testing-library/issues/698#issuecomment-17938725398
* The main issue is definitely in `computeAccessibleName` see https://github.com/eps1lon/dom-accessibility-api/issues/1011

## 🐌🐌🐌🐌🐌🐌🐌🐌🐌🐌🐌🐌🐌🐌🐌🐌🐌🐌🐌🐌🐌🐌🐌🐌

![jest runner screenshot showing crazy slow time to expect some stuff on 24kB and 110kB html Dom](./readme_assets/jest_runner_output.png)

![flamegraph of one profiled test](./readme_assets/flamegraph.png)