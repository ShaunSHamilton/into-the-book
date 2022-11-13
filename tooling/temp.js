import { mkdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';
const projectsPath = './config/projects.json';
const curriculumDir = './curriculum/locales/english';

// Create one markdown file for each project
const projects = await readFile(projectsPath, 'utf8');
const projectsJson = JSON.parse(projects);

function createFiles() {
  const contents = `# Title
  
## 1

### --description--

Description to do stuff.

\`\`\`rust
let a = 1;
\`\`\`

### --tests--

Temp test

\`\`\`js
assert.fail();
\`\`\`

## --fcc-end--
`;
  projectsJson.forEach(async project => {
    const { dashedName } = project;
    const fileName = `${dashedName}.md`;
    // Create the file
    const filePath = join(curriculumDir, fileName);
    await writeFile(filePath, contents, 'utf8');
  });
}

async function createFolders() {
  for (const project of projectsJson) {
    const { dashedName } = project;
    const dirPath = dashedName;
    // Create a folder for each project
    await mkdir(dirPath);
  }
}

async function addFolderToSettingsExclude() {
  const settingsFile = './.vscode/settings.json';
  const settings = await readFile(settingsFile, 'utf8');
  const settingsJson = JSON.parse(settings);
  for (const project of projectsJson) {
    const { dashedName } = project;
    settingsJson['files.exclude'][dashedName] = false;
  }
  await writeFile(settingsFile, JSON.stringify(settingsJson, null, 2), 'utf8');
}

async function gitKeepAllFolders() {
  for (const project of projectsJson) {
    const { dashedName } = project;
    await writeFile(join(dashedName, '.gitkeep'), '', 'utf8');
  }
}

await gitKeepAllFolders();
