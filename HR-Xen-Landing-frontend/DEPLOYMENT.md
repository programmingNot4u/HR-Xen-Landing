# HR-Xen Landing Page - Vercel Deployment Guide

## Environment Variables

Set the following environment variable in your Vercel dashboard:

```
VITE_API_URL=http://13.215.98.185/api/v1
```

## Deployment Steps

1. **Connect to Vercel:**

   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect this as a Vite project

2. **Set Environment Variables:**

   - In your Vercel project dashboard
   - Go to Settings > Environment Variables
   - Add: `VITE_API_URL` = `http://13.215.98.185/api/v1`

3. **Deploy:**
   - Vercel will automatically build and deploy
   - The build command is: `npm run build`
   - Output directory: `dist`

## Project Structure

- **Frontend Only:** This project contains only the React frontend
- **API Integration:** Connects to hosted backend at `http://13.215.98.185`
- **Clean Build:** All unnecessary files have been removed

## Features

- ✅ Dynamic pricing from API
- ✅ Blog integration
- ✅ Support system
- ✅ Responsive design
- ✅ SEO optimized
- ✅ Clean, production-ready code

## Build Commands

```bash
npm install
npm run build
npm run preview  # Test production build locally
```


