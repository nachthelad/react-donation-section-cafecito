# React Donation Section

A reusable React component for displaying donation sections in your projects. Perfect for open source projects, blogs, or any application where you want to encourage user support.

## Features

- 🎨 **Multiple Variants**: Choose from default, minimal, or card styles
- 🎯 **Fully Customizable**: Customize text, URLs, icons, and styling
- 📱 **Responsive**: Works great on all screen sizes
- 🎨 **Tailwind CSS**: Built with Tailwind CSS for consistent styling
- 📦 **TypeScript**: Full TypeScript support with proper type definitions
- 🚀 **Lightweight**: Minimal bundle size with no heavy dependencies

## Installation

```bash
npm install react-donation-section
# or
yarn add react-donation-section
# or
pnpm add react-donation-section
```

## Quick Start

```tsx
import DonationSection from 'react-donation-section';

function App() {
  return (
    <div>
      <h1>My Awesome Project</h1>
      <p>This is my amazing project content...</p>
      
      <DonationSection />
    </div>
  );
}
```

## Basic Usage

```tsx
import DonationSection from 'react-donation-section';

// With default values
<DonationSection />

// With custom configuration
<DonationSection
  title="¿Te gustó este proyecto? Apoya el desarrollo"
  buttonText="Donar"
  buttonUrl="https://cafecito.app/tu-usuario"
  buttonIcon="❤️"
  variant="card"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `"¿Te gustó la app? Invítame un café"` | The title text displayed above the button |
| `buttonText` | `string` | `"Invitar un cafecito"` | The text displayed on the button |
| `buttonUrl` | `string` | `"https://cafecito.app/nachthelad"` | The URL the button links to |
| `buttonIcon` | `string` | `"☕"` | The icon displayed next to the button text |
| `className` | `string` | `""` | Additional CSS classes to apply |
| `variant` | `"default" \| "minimal" \| "card"` | `"default"` | The visual style variant |

## Variants

### Default
```tsx
<DonationSection variant="default" />
```
A subtle gray background with rounded corners and border.

### Minimal
```tsx
<DonationSection variant="minimal" />
```
Clean and minimal styling with transparent background.

### Card
```tsx
<DonationSection variant="card" />
```
Card-like appearance with white background and shadow.

## Examples

### For Open Source Projects
```tsx
<DonationSection
  title="Apoya este proyecto open source"
  buttonText="Hacer donación"
  buttonUrl="https://github.com/sponsors/tu-usuario"
  buttonIcon="⭐"
  variant="card"
/>
```

### For Personal Blogs
```tsx
<DonationSection
  title="¿Te sirvió este artículo? Invítame un café"
  buttonText="Comprar un café"
  buttonUrl="https://buymeacoffee.com/tu-usuario"
  buttonIcon="☕"
  variant="minimal"
/>
```

### For Productivity Apps
```tsx
<DonationSection
  title="¿Te ayuda esta app a ser más productivo? Apoya el desarrollo"
  buttonText="Apoyar proyecto"
  buttonUrl="https://ko-fi.com/tu-usuario"
  buttonIcon="🚀"
  variant="default"
  className="mt-8"
/>
```

## Requirements

- **React**: 16.8.0 or higher
- **Tailwind CSS**: For styling (you need to have Tailwind CSS configured in your project)

## TypeScript Support

The package includes full TypeScript support with proper type definitions:

```tsx
import { DonationSection, type DonationSectionProps } from 'react-donation-section';

// You can also import the props interface for type safety
const props: DonationSectionProps = {
  title: "Custom title",
  variant: "card"
};
```

## Styling

The component uses Tailwind CSS classes. If you need to customize the styling:

1. **Add custom classes**: Use the `className` prop to add additional styles
2. **Override with CSS**: Target the component's classes in your CSS
3. **Modify the component**: Fork the package and customize the styles

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you find this package useful, consider supporting the development:

- ⭐ Star this repository
- 🐛 Report bugs
- 💡 Suggest new features
- 📝 Improve documentation

---

Made with ❤️ for the React community 