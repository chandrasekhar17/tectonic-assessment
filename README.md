# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

# Fashion Lookbook App

A React-based fashion e-commerce application that lets users browse curated fashion looks with interactive product annotations and video content.

## What this does

Ever wondered what that influencer is wearing in their video? This app solves that problem. Users can:

- Browse through different fashion looks with images and videos
- Click on product dots to see what items are featured
- Watch videos with proper controls (play, pause, mute, volume, etc.)
- View detailed product information including prices and colors
- Navigate between different looks easily

## The challenge

The brief was to create a lookbook experience similar to what you'd see on fashion platforms. Key requirements were:
- Interactive annotations on images/videos
- Proper video controls with mute/unmute, pause, stop functionality  
- Product details that actually make sense (not just placeholder text)
- Mobile-friendly design
- Clean, modern interface

## How I built it

### Tech stack
- React 19 with TypeScript (for type safety)
- Vite (much faster than Create React App)
- CSS modules for styling
- No external UI libraries - everything built from scratch

### Project structure
```
src/
├── components/
│   ├── layout/        # Header, navigation
│   ├── lookbook/      # Main lookbook components
│   ├── media/         # Video player with custom controls
│   ├── product/       # Product detail modal
│   └── ui/            # Reusable components like progress bars
├── data/              # Mock product and look data
└── types/             # TypeScript definitions
```

### Key features I implemented

**Enhanced video player**
- Custom controls overlay that appears on hover
- Volume slider (not just mute/unmute)
- Clickable progress bar for seeking
- Fullscreen support
- Error handling if videos fail to load

**Smart product annotations**
- Tooltips that show product images, not just text
- Real product data (prices, colors, categories)
- Positioned accurately on the images
- Mobile-friendly tap interactions

**Responsive design**
- Works on desktop, tablet, and mobile
- Touch-friendly controls
- Proper scaling for different screen sizes

## Running the project

### Quick start
```bash
npm install
npm run dev
```

Then open http://localhost:5173

### For production
```bash
npm run build
npm run preview
```

## Testing it out

1. **Browse looks**: Use the arrow buttons to navigate between different fashion looks
2. **Play videos**: Click the play button - you'll see custom video controls appear on hover
3. **Test annotations**: Hover over the red dots on images to see product details
4. **Try video controls**: 
   - Click anywhere on the progress bar to seek
   - Hover over volume icon for volume slider
   - Try the fullscreen button
5. **Product details**: Click annotation dots to see full product information
6. **Mobile**: Open on your phone to test touch interactions

## Design decisions

**Why custom video controls?**
The default HTML5 video controls look different on every browser and don't give enough control over styling. Building custom controls ensures a consistent experience.

**Real video URLs**
I used Google's sample video collection instead of placeholder videos so the app feels more realistic.

**Color-coded annotations**
Each annotation shows the actual product colors, not just generic dots. This makes it easier to understand what you're looking at.

**Progressive enhancement**
The app works with just images if videos fail to load. Annotations gracefully fall back to showing the image with clickable areas.

## What could be improved

Given more time, I'd add:
- Video preloading for smoother playback
- Keyboard navigation for accessibility
- More sophisticated error states
- Product filtering and search
- Social sharing features

## Browser support

Tested on:
- Chrome (latest)
- Safari (latest) 
- Firefox (latest)
- Mobile Safari and Chrome

## Notes for reviewers

The mock data includes realistic products with proper categorization. I made sure the annotations actually correspond to what's visible in the images (sunglasses annotation shows sunglasses product, not something random).

All the video controls work as specified - you can mute/unmute, pause, stop, and seek. The volume control includes a slider, not just on/off.

The responsive design adapts to different screen sizes without breaking the layout or making buttons too small to tap on mobile.

---

*Built as part of a technical assessment. The code prioritizes clean architecture and user experience over fancy libraries.*

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
