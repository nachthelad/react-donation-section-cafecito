# Publishing Guide

## Before Publishing

1. **Update package.json**:

   - Change the package name to something unique (e.g., `@yourusername/react-donation-section`)
   - Update the author name and repository URLs
   - Update the version number as needed

2. **Test the package locally**:

   ```bash
   npm pack
   ```

   This creates a `.tgz` file that you can install in another project to test.

3. **Test in a real project**:
   ```bash
   # In another project
   npm install /path/to/your/react-donation-section-1.0.0.tgz
   ```

## Publishing to npm

1. **Login to npm** (if not already logged in):

   ```bash
   npm login
   ```

2. **Publish the package**:

   ```bash
   npm publish
   ```

   Or if you want to publish as a scoped package:

   ```bash
   npm publish --access public
   ```

## Publishing to GitHub Packages

If you want to publish to GitHub Packages instead:

1. **Update package.json**:

   ```json
   {
     "name": "@yourusername/react-donation-section",
     "publishConfig": {
       "registry": "https://npm.pkg.github.com"
     }
   }
   ```

2. **Login to GitHub Packages**:

   ```bash
   npm login --registry=https://npm.pkg.github.com
   ```

3. **Publish**:
   ```bash
   npm publish
   ```

## Version Management

- **Patch version** (1.0.1): Bug fixes
- **Minor version** (1.1.0): New features, backward compatible
- **Major version** (2.0.0): Breaking changes

Use `npm version patch|minor|major` to update version numbers.

## Package Structure

```
react-donation-section/
├── src/
│   ├── DonationSection.tsx
│   └── index.ts
├── dist/           # Built files
├── example/        # Usage examples
├── package.json
├── tsconfig.json
├── rollup.config.js
├── README.md
├── LICENSE
└── .gitignore
```

## Usage After Publishing

Once published, users can install and use your package:

```bash
npm install react-donation-section
```

```tsx
import DonationSection from "react-donation-section";

function App() {
  return (
    <DonationSection
      title="Support this project"
      buttonUrl="https://cafecito.app/your-username"
    />
  );
}
```
