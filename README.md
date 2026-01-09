Username: admin
password: admin



# React Auth & Product Management App

This project is a React application 
It demonstrates authentication flow, protected routes, Redux state management, and CRUD operations with a clean UI using Tailwind CSS.

---

## 🚀 Features

- 🔐 Login & Signup (Mock Authentication)
- 🛡️ Protected Routes using JWT logic
- 📦 Product List fetched via Redux
- ➕ Add Product
- ✏️ Update Product (state-based)
- ❌ Delete Product
- 📊 Display Total Records
- 🎨 Responsive UI with Tailwind CSS
- 🗂️ Clean and scalable folder structure

---

## 🧑‍💻 Tech Stack

- **Frontend:** React (Vite)
- **State Management:** Redux Toolkit
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS
- **Authentication:** Mock JWT-based Auth
- **Version Control:** Git & GitHub

---



## ⚙️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-github-repo-url>
   ```

2. **Navigate to the project**
   ```bash
   cd react-redux-auth-crud
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Run the application**
   ```bash
   npm run dev
   ```

---

## 🔑 Authentication Details (Mock)

Due to network restrictions with the external authentication API, mock authentication has been implemented.

### Login Credentials:
```
Username: admin
Password: admin
```

After login, a mock JWT token is stored in `localStorage` and protected routes are enabled.

---

## 🧠 Implementation Notes

- Redux Toolkit is used to manage global state and reduce boilerplate.
- Authentication state is handled via Redux and `localStorage`.
- Protected routes prevent unauthorized access to the Products page.
- CRUD operations update the Redux store to reflect UI changes instantly.
- Tailwind CSS is used for a clean, responsive, and modern UI.

---

## 🔮 Possible Improvements

- Integrate real backend authentication with token refresh
- Add form validation and error boundaries
- Implement pagination and search in product list
- Add unit and integration tests
- Improve accessibility and UI 

## 📬 Author

**Arun Bhardwaj**  
B.Tech – Computer Science & Engineering  
Aspiring Full Stack / MERN Stack 
