# 🏏 CricLab - Frontend

This is the **frontend** of the CricLab web application, built with **Angular 19** and **Tailwind CSS**. The app provides **live scores, match history, and the points table** for ICC 2025.

<iframe width="560" height="315" src="https://www.youtube.com/embed/TVkFZL7rLao?si=sd_QPb-cYwin2Q3d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 🚀 Tech Stack

- **Frontend:** Angular 19, TypeScript, Tailwind CSS
- **State Management:** RxJS, Signals
- **API Integration:** Angular `HttpClient` with `fetch`
- **Routing:** Angular Router
- **Styling:** Tailwind CSS, Responsive Design
- **Authentication:** JWT-based auth with access and refresh tokens
- **Performance:** Lazy Loading, Debounced Search

---

## ✨ Features

✅ **Live Scores** – Real-time cricket match updates  
✅ **Matches History** – View previous match results  
✅ **Points Table** – Displays ICC 2025 standings  
✅ **Search with Debounce** – Efficient match search in history  
✅ **Responsive UI** – Mobile-friendly design with Tailwind CSS  
✅ **Optimized API Calls** – Uses `fetch` for better performance  
✅ **Admin Match Management** – Admins can soft or hard delete matches  
✅ **JWT Authentication** – Secures admin routes with token handling

---

## 🔐 Authentication System

### **1️⃣ Login**

- Admins must log in to manage matches.
- Login request:

```ts
this.http.post("/api/v1/auth/login", {
  email: "admin@example.com",
  password: "password123",
});
```

### **2️⃣ Token Management**

- **`accessToken`** stored securely in local storage for requests.
- **`refreshToken`** stored securely in local storage for refresh logic.
- Angular **HTTP Interceptor** automatically appends the `accessToken` to protected requests.

### **3️⃣ Refresh Token Flow**

- When the `accessToken` expires, the interceptor automatically refreshes the token.

---

## 🗑️ Admin Match Management (Soft & Hard Delete)

### **Soft Delete Match**

- **Endpoint:** `DELETE /api/v1/matches/{id}/soft-delete`
- **Authorization:** Requires `Bearer` token for admin access
- **Effect:** Marks the match as deleted without permanent removal

### **Hard Delete Match**

- **Endpoint:** `DELETE /api/v1/matches/{id}/delete`
- **Authorization:** Requires `Bearer` token for admin access
- **Effect:** Permanently removes the match from the database

---

## 🛠️ Installation and Running the Project

### **1️⃣ Prerequisites**

- **Node.js** (v18+ recommended)
- **Angular CLI** (`npm install -g @angular/cli`)
- **Git** (for version control)

### **2️⃣ Clone the Repository**

```sh
git clone https://github.com/Avaneesh-Chopdekar/criclab-frontend.git
cd criclab-frontend
```

### **3️⃣ Install Dependencies**

```sh
npm install
```

### **4️⃣ Run the Development Server**

```sh
ng serve
```

The app will be available at **`http://localhost:4200/`**.

### **5️⃣ Build for Production**

```sh
ng build
```

This will generate optimized production files in the `dist/` folder.

---

## 🤝 Contributing

We welcome contributions! To contribute:

1. **Fork** the repository.
2. **Create** a new branch (`git checkout -b feature-name`).
3. **Commit** changes (`git commit -m "Added a new feature"`).
4. **Push** the branch (`git push origin feature-name`).
5. **Create a Pull Request** 🚀.

---

## 📜 License

This project is licensed under the **MIT License**.  
Feel free to use, modify, and distribute. 🏏

---

Made with ❤️ by [Avaneesh Chopdekar](https://github.com/Avaneesh-Chopdekar)
