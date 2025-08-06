# The Wild Oasis – Hotel Management Dashboard

> Internal dashboard for hotel staff to manage cabins, bookings, guests, users, and settings.

---

## Overview

**The Wild Oasis Employee App** is a professional, responsive web dashboard for managing every aspect of a luxury cabin business. This app is built for hotel staff and administrators, allowing them to handle bookings, guests, cabin management, user accounts, and hotel settings—all from a modern and intuitive interface.

Developed with React.js (Vite), Styled Components, Supabase as a backend/database, and TanStack Query for powerful and efficient data fetching. The project demonstrates advanced React patterns including portals and compound components, dark/light mode support, and real-time data features.

---

## Features

- **Secure Authentication:** Log in securely to access staff features.
- **Dashboard:** Visualize key metrics—bookings, sales, occupancy rate, and more—with interactive charts.
- **Bookings Management:**  
  - View, filter, and update all guest bookings.
  - Check-in, check-out, and manage stay status.
- **Cabin Management:**  
  - View all cabins, capacity, pricing, and discounts.
  - Add, edit, or remove cabins (with image upload).
- **User Management:**  
  - Create, edit, or remove employee accounts.
- **Hotel Settings:**  
  - Easily adjust hotel policies (min/max nights, breakfast price, max guests).
- **Dark/Light Mode:**  
  - Toggle between dark and light UI themes.
- **Advanced React Patterns:**  
  - Modal windows via portals.
  - Compound component design for flexibility and reusability.
- **Data Prefetching & Caching:**  
  - Fast, real-time updates with TanStack Query.
- **Charts and Analytics:**  
  - Visualize sales and occupancy data with interactive charts.
- **Responsive Design:**  
  - Usable on any device, from desktop to mobile.

---

## Tech Stack

- **Frontend:** [React.js (Vite)](https://vitejs.dev/), [Styled Components](https://styled-components.com/)
- **Database/Backend:** [Supabase](https://supabase.com/)
- **Data Fetching & Caching:** [TanStack Query](https://tanstack.com/query/latest)
- **Charts:** [Recharts](https://recharts.org/) or your chart library
- **State Management & Patterns:**  
  - React Portals  
  - Compound Components  
  - Context API for theme and global state

---

## Screenshots

<!-- Place your screenshots here (replace with your paths) -->
![Login Screen](https://github.com/user-attachments/assets/c74f7bab-558d-435c-993b-2ab14e446547)
![Dashboard](https://github.com/user-attachments/assets/b78d41d6-ba16-45ca-ab6a-8fca4a18cab8)
![Bookings](https://github.com/user-attachments/assets/77b12b59-8700-46f0-90c8-0acede38205e)
![Check-In](https://github.com/user-attachments/assets/d1c302eb-64c9-40db-9e23-a7cb649cca27)
![Cabins](https://github.com/user-attachments/assets/2b7f2bfb-5a69-42b3-9865-1d5546c14074)
![Create Cabin](https://github.com/user-attachments/assets/65d79c3d-5216-4eb9-a361-5c8273d2c337)
![Create_Users](https://github.com/user-attachments/assets/e43ce038-5a15-45be-af1c-60bf95e2a3c0)
![Update_User](https://github.com/user-attachments/assets/45ff4f4f-edb7-49d4-b95b-38094dca3e27)
![Settings](https://github.com/user-attachments/assets/f54b0140-316b-4722-9cb1-bcb5d0917996)

---

## Getting Started

1. **Clone the repository:**
    ```bash
    git clone https://github.com/matinz03/the-wild-oasis.git
    cd the-wild-oasis-employee
    ```

2. **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Set up environment variables:**
    - Create a `.env.local` file in the project root and add your Supabase credentials.
    ```
    VITE_SUPABASE_URL=your_supabase_url
    VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

4. **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. **Visit [http://localhost:5173](http://localhost:5173) in your browser.**

---

## Key Learnings & Patterns

- Mastered advanced React patterns: portals (for modals), compound components (for flexible UI), and custom hooks.
- Implemented TanStack Query for performant and reliable server state management, including prefetching for UX speed.
- Applied Styled Components for modular, scalable CSS and theme switching (dark/light mode).
- Built complex forms, data tables, and interactive analytics dashboards.
- Integrated real-time updates and role-based user management using Supabase.

---


## Author

Built by [Matin Zomorrodabedi](https://github.com/yourusername)

