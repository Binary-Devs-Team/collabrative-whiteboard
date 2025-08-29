# Collaborative Whiteboard

A real-time collaborative whiteboard application built with Next.js, Liveblocks, Convex, and Clerk. Create, share, and collaborate on whiteboards with multiple users in real-time.

## 🌟 Features

### Core Functionality

- **Real-time Collaboration**: Multiple users can work on the same board simultaneously
- **Drawing Tools**: Create rectangles, ellipses, text, notes, and freehand drawings
- **Layer Management**: Organize content with a layered system
- **Color Picker**: Customize colors for all drawing elements
- **Selection & Transformation**: Select, move, and resize elements
- **Camera Controls**: Pan and zoom across the canvas

### User Experience

- **Organization-based Boards**: Create boards within organizations
- **Board Management**: Create, rename, and delete boards
- **User Presence**: See other users' cursors and selections in real-time
- **Responsive Design**: Works on desktop and mobile devices
- **Dark/Light Theme**: Toggle between themes

### Technical Features

- **Authentication**: Secure user authentication with Clerk
- **Real-time Database**: Powered by Convex for instant updates
- **Real-time Sync**: Liveblocks for collaborative features
- **TypeScript**: Full type safety throughout the application
- **Modern UI**: Beautiful interface with Radix UI and Tailwind CSS

## 🛠️ Tech Stack

### Frontend

- **Next.js 15.2** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Radix UI** - Headless UI components

### Backend & Services

- **Convex** - Backend database and API
- **Liveblocks** - Real-time collaboration
- **Clerk** - Authentication and user management

### Key Libraries

- **Perfect Freehand** - Smooth drawing paths
- **Zustand** - State management
- **React ContentEditable** - Editable text elements
- **Lodash Throttle** - Performance optimization
- **Date-fns** - Date manipulation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun
- Clerk account (for authentication)
- Convex account (for database)
- Liveblocks account (for real-time features)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Binary-Devs-Team/collabrative-whiteboard.git
   cd collabrative-whiteboard
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   # Convex Database
   NEXT_PUBLIC_CONVEX_URL=your_convex_url
   CONVEX_DEPLOY_KEY=your_convex_deploy_key

   # Liveblocks
   LIVEBLOCKS_SECRET_KEY=your_liveblocks_secret_key
   ```

4. **Set up Convex**

   ```bash
   npx convex dev
   ```

5. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── (dashboard)/        # Dashboard pages (organization-based)
│   │   ├── page.tsx       # Main dashboard
│   │   └── _components/   # Dashboard components
│   ├── api/               # API routes
│   ├── board/[boardId]/   # Individual board pages
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # UI components (Radix-based)
│   ├── auth/             # Authentication components
│   └── modals/           # Modal components
├── convex/               # Convex backend schema and functions
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── providers/            # Context providers
├── store/                # Zustand stores
├── types/                # TypeScript type definitions
└── public/               # Static assets
```

## 🎨 Canvas Types & Tools

The whiteboard supports multiple types of elements:

### Drawing Tools

- **Rectangle** (`LayerType.Rectangle`): Create rectangular shapes
- **Ellipse** (`LayerType.Ellipse`): Create circular/elliptical shapes
- **Text** (`LayerType.Text`): Add text elements
- **Note** (`LayerType.Note`): Create sticky note-style elements
- **Path** (`LayerType.Path`): Freehand drawing with perfect-freehand

### Canvas Modes

- **Selection**: Select and manipulate elements
- **Insertion**: Add new elements to the canvas
- **Translation**: Move selected elements
- **Resizing**: Resize selected elements
- **Pencil**: Freehand drawing mode

## 🤝 Real-time Collaboration

The application uses Liveblocks for real-time features:

- **Presence**: See other users' cursors and selections
- **Storage**: Shared canvas state with layers and elements
- **Broadcasting**: Real-time updates across all connected users
- **Conflict Resolution**: Automatic handling of concurrent edits

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🌐 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on every push

### Other Platforms

The app can be deployed on any platform that supports Next.js:

- Netlify
- Railway
- Docker
- AWS/GCP/Azure

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Liveblocks](https://liveblocks.io/) for real-time collaboration
- [Convex](https://convex.dev/) for the backend infrastructure
- [Clerk](https://clerk.dev/) for authentication
- [Radix UI](https://radix-ui.com/) for accessible components
- [Perfect Freehand](https://github.com/steveruizok/perfect-freehand) for smooth drawing

## 📞 Support

If you have any questions or need help, please:

- Open an issue on GitHub
- Contact the Binary Devs Team

---

Built with ❤️ by [Binary Devs Team](https://github.com/Binary-Devs-Team)
