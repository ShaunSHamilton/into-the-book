import { readFile, writeFile, readdir } from 'fs/promises';
import { join } from 'path';

const PATH = process.argv[2]?.trim();

const CURRICULUM_PATH = 'curriculum/locales/english';

/**
 * Ensures all lessons are incremented by 1
 */
async function rejigFile(fileName) {
  const filePath = join(CURRICULUM_PATH, fileName);
  const file = await readFile(filePath, 'utf-8');
  let lessonNumber = 0;
  const newFile = file.replace(/## \d+/g, () => {
    lessonNumber++;
    return `## ${lessonNumber}`;
  });
  await writeFile(filePath, newFile, 'utf-8');
}

if (PATH) {
  await rejigFile(PATH);
} else {
  const files = await readdir(CURRICULUM_PATH);
  for (const file of files) {
    console.log(`Rejigging '${file}'`);
    await rejigFile(file);
  }
}
