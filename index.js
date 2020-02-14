const isogit = require('isomorphic-git');
const fs = require('fs-extra');

isogit.plugins.set('fs', fs);

void async function () {
  // Pull if the repository is already cloned
  if (await fs.pathExists('temp')) {
    console.log('Pulling…');
    await isogit.pull({ dir: 'temp' });
  }
  // Clone the first time running
  else {
    console.log('Cloning…');
    await isogit.clone({ dir: 'temp', url: 'https://github.com/TomasHubelbauer/isogit-pull-repo' });
  }

}()
