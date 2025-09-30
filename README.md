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



