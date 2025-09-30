# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


---
# 📦 Subscription Box Service Platform
## Repo : https://github.com/mdtahsinislam/My_Subscription-Box
## live link : https://my-subscription-box-39991.web.app/

The **Subscription Box Service Platform** enables users to easily **browse, subscribe, and manage monthly subscription boxes** based on their preferences.  
This service offers a **personalized experience** where customers can select boxes for various products or services.  
Each box is curated with items tailored to the user’s interests, ensuring they receive something **new and exciting each month**.

---

## 🚀 Project Theme

- Browse and explore subscription boxes
- Secure login & authentication
- Personalized user experience
- Subscription details with reviews and ratings
- Protected routes for members
- Easy-to-use interface with navbar, slider, and cards

---

## 🖼️ Layout Structure

### 🔹 Navbar
- Contains: **Website Name, Home, My Profile**
- **Active routes** implemented  
- **Login Status:**
  - ✅ If logged in → Show **user’s image** (hover shows name) + **Logout button**  
  - ❌ If not logged in → Show **Login button**  

### 🔹 Main Section
- Displays **different pages based on routes**

### 🔹 Footer
- Eye-catching design with:
  - Terms & Conditions
  - Privacy Policy
  - Social Media Links

---

## 📑 JSON Data Example

Your data should be structured as follows:

```json
{
  "id": 1,
  "name": "Smart Home Box",
  "thumbnail": "https://example.com/images/smart-home-box-thumbnail.jpg",
  "banner": "https://example.com/images/smart-home-box-banner.jpg",
  "frequency": "Yearly",
  "price": 199.99,
  "description": "Transform your home into a smart home with curated smart devices, home automation products, and IoT gadgets.",
  "tech_category": "Smart Home",
  "features": [
    "Smart Home Devices",
    "Home Automation Tools",
    "Cutting-edge IoT Gadgets"
  ],
  "subscription_benefits": [
    "Discount on Future Smart Home Purchases",
    "Exclusive Smart Home Tutorials",
    "Early Access to Product Releases"
  ],
  "ratings": 4.8,
  "number_of_reviews": 315
}
```

# 🏠 Home Page & Features

The **Home Page** of the Subscription Box Service Platform will include the following:

---

## 🎡 Home Page Sections

### 🔹 Slider
-  ** slides** using **Daisy UI** or **Swiper**  

### 🔹 Subscription Services Section
- Displayed in a **card layout** using JSON data  

### 🔹 Extra Sections
- Two additional sections for **content/features**

---

## 📦 Subscription Service Card (Data Display)

Each service card will display:  
- 🖼️ Thumbnail  
- 📛 Name  
- 🏷️ Tech Category  
- 💰 Price  
- ⏳ Frequency  
- 🔘 **"View More" Button**

---

## 🔒 Subscription Service Details Page (Protected)

- Accessible only when the **user is logged in**  
- Displays **all details** of the selected subscription service  

### ✍️ Review Section
- Input fields:
  - **Review**
  - **Rating (1–5)**
- Submit button → Adds review (shown on the same page)  
- Reviews are **not persisted** (no local storage required)

⚡ **Note**: User stays on the private route page even after reload (no forced redirect to login).  

---

## 🔑 Authentication

### 🔐 Login Page
**Fields:**
- Email  
- Password  

**Features:**
- Google Login  
- Link to **Register Page**

---

### 📝 Register Page
**Fields:**
- Name  
- Email  
- photoURL  
- Password  

**Features:**
- Google Login  
- Link to **Login Page**

---

## ✅ Password Rules
- Must include **1 Uppercase letter**  
- Must include **1 Lowercase letter**  
- Minimum length **6 characters**

---

## 📝 Challenge Requirements Checklist
- [x] Navbar with login/logout functionality  
- [x] Slider with 3+ slides  
- [x] JSON data (6+ services)  
- [x] Subscription Services displayed as cards  
- [x] Protected Service Details page with reviews  
- [x] Login & Register with validation  
- [x] Google Authentication support  

---

## ⚡ Tech Stack
- ⚛️ **React.js + React Router**  
- 🔑 **Firebase Authentication**  
- 🎨 **Tailwind CSS + Daisy UI**  
- 🎡 **Swiper.js** (for sliders)  
- 📑 **JSON (mock data)**  

---

Happy Coding! 🚀
