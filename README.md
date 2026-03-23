# Digicacy Apps 📱

A modern app store web application built with React where users can browse, search, and install apps — and manage their installations from a personal dashboard. The platform features trending app discovery, real-time search filtering, detailed app pages with rating breakdowns, and persistent installation tracking via localStorage.

---

## 🛠️ Technologies Used

| Technology           | Version | Purpose                                                                       |
| -------------------- | ------- | ----------------------------------------------------------------------------- |
| **React**            | 18+     | Core UI library for building components and managing state                    |
| **React Router v7**  | v7      | Client-side routing, nested layouts, and data loaders                         |
| **Tailwind CSS**     | v3      | Utility-first CSS framework for rapid styling                                 |
| **DaisyUI**          | v5      | Pre-built component library on top of Tailwind (navbar, stats, cards, badges) |
| **React Icons**      | latest  | Scalable SVG icon packs (Feather, Material, Remix icons)                      |
| **React Toastify**   | latest  | Toast notification system for install/uninstall feedback                      |
| **localStorage API** | native  | Browser-based persistence for saving installed apps across sessions           |

---

## ✨ Features

- 🏠 **Home Page** — Showcases trending apps and platform-wide stats (downloads, reviews, active apps)
- 📦 **All Apps Page** — Browse the full app catalog with real-time search filtering
- 📄 **App Details Page** — View app description, ratings breakdown chart, download/review counts, and install button
- ✅ **My Installations** — Manage installed apps with uninstall support and sort by size (high to low / low to high)
- 🔍 **Smart Search** — Live filtering with a "No Apps Found" fallback UI
- 💾 **Persistent State** — Installed apps survive page refreshes via localStorage
- 🚫 **404 Error Page** — Custom error page for invalid routes
- 📊 **Animated Stats** — Gradient stats section with hover animations

---

## 📁 Project Structure

```
src/
├── assets/                  # Images and static files
├── Components/
│   ├── Header/              # Navbar with active NavLink highlighting
│   ├── Layout/              # Root layout wrapper with Outlet
│   ├── AllAppsCard/         # Card for the all apps grid
│   ├── TrendingAppsCard/    # Card for trending apps section
│   ├── TrendingApps/        # Trending apps section (top 8)
│   ├── Stats/               # Animated gradient stats section
│   ├── RatingChart/         # Visual rating breakdown chart
│   └── NoAppsFound/         # Fallback UI for empty search results
├── Pages/
│   ├── Home/                # Home page with loader
│   ├── Apps/                # All apps page with search
│   ├── AppDetails/          # Individual app detail page with loader
│   ├── MyInstallation/      # Installed apps manager
│   └── ErrorPage/           # 404 error page
├── Router/
│   └── Router.jsx           # Route definitions with loaders
utils/
└── localStorage.js          # getInstalledApps / saveInstalledApps helpers
public/
└── apps.json                # Static app data source
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/litonhumayun/digicacy-apps.git

# Navigate into the project
cd digicacy-apps

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repo
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Liton Humayun**

- GitHub: [@litonhumayun](https://github.com/litonhumayun)
