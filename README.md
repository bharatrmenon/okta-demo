# Okta Demo App (Vercel + Vite + React)

A lightweight demo web app to show Okta Workflows integration.

## 🚀 Features
- React frontend built with Vite
- Serverless API endpoint `/api/webhook` to receive Okta Workflow events
- Displays user creation events in real-time

## 🧩 Deployment
**To deploy on Vercel:**
1. Go to [https://vercel.com/new](https://vercel.com/new)
2. Upload this project or connect your GitHub repo
3. Settings:
   - Framework Preset: `Vite`
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: `dist`

## 🔗 Okta Workflows Integration
Use this URL as your Okta Workflow HTTP POST endpoint:
```
https://<your-vercel-app>.vercel.app/api/webhook
```

Example Body:
```json
{
  "eventType": "User Created",
  "user": {
    "id": "{{user.id}}",
    "email": "{{user.profile.email}}"
  }
}
```

---

## 👨‍💻 Author
Created by [Your Name](https://github.com/<your-username>) for Okta workflow demos.
