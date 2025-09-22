
# 🎬 Creative Studio Website

This is a **multi-page React website** built with **Vite**, **React Router**, and **Tailwind CSS**.  
It includes pages for portfolio, services, rentals, online booking, and a contact form.  
The project is designed for a **studio / creative agency** that offers photography, videography, rentals, and training.

---

## 🚀 Features

- **Fast build & development** with Vite  
- **Client-side routing** using React Router (`react-router-dom`)  
- **Reusable components**: Navbar, Footer  
- **Service pages**: Training, Wedding, Studio, Website, Social Media, Graphic Design  
- **Rental pages**: Camera, Projector, Drone, Studio  
- **Booking system** integrated with Google Forms + optional Formcarry API  
- **Responsive UI** styled with Tailwind CSS  
- **Smooth navigation** (scrolls to top on page change)

---

## 📂 Main Pages

- `/` → **Home**  
- `/portfolio` → Portfolio showcase  
- `/online` → Online booking  
- `/contact` → Contact page  
- `/services/tranning` → Training service  
- `/services/wedding` → Wedding service  
- `/services/studio` → Studio service  
- `/rental/camera` → Camera rental  
- `/rental/projector` → Projector rental  
- `/rental/drone` → Drone rental  
- `/rental/studio` → Studio rental  
- `/service/web` → Website design  
- `/service/webdev` → Web development  
- `/service/social` → Social media marketing  
- `/service/graphic` → Graphic design  

---

## 🛠️ Tech Stack

- **React 18**
- **Vite** (fast bundler)
- **React Router v6**
- **Tailwind CSS** (utility-first CSS framework)

---

## 📦 Installation & Setup

Clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
````

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## ⚙️ Configuration

### Routing

All routes are defined inside `App.jsx` using `react-router-dom`.
A `ScrollToTop` component ensures each page loads from the top when navigating.

### Booking Form

* Integrated with **Google Forms** for quick setup.
* Optional **Formcarry API** is included for handling form submissions.

---

## 📸 Assets

Place your images/videos inside the `public/` folder:

* Studio gallery images → `/public/sto1.jpg`, `/public/sto2.jpg`, etc.
* Video background → `/public/inter.mp4`

---

## 📌 Notes

* Modify the `Navbar` and `Footer` components inside `src/components/`.
* Make sure Tailwind is configured properly in `tailwind.config.js`.

---

## 🧑‍💻 Author

Developed by **\[Mandip Chaudhary]** ✨
For customization or improvements, feel free to fork or contribute.

