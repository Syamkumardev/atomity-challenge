# Cloud Optimization Insights Dashboard

This project is a modern cloud cost visualization dashboard built using Next.js and React. It displays cloud pricing insights using interactive charts, animated components, and API-fetched data.

## Live Demo
https://atomity-challenge-7pe0bud8m-syamkumardevs-projects.vercel.app/

## Features

- Interactive cloud cost visualization
- Animated UI components using Framer Motion
- API data fetching using custom React hook
- Skeleton loading state
- Responsive dashboard layout
- Bar charts for cost analysis
- Trend charts for usage patterns

## Tech Stack

- Next.js
- React
- Tailwind CSS
- Chart.js
- Framer Motion

## Project Structure

app/
page.tsx – main dashboard page

components/
AnimatedCard.tsx – animated pricing cards  
SkeletonCard.tsx – loading skeleton  
CostChart.tsx – cloud cost bar chart  
TrendChart.tsx – usage trend chart  

hooks/
useApiData.ts – API data fetching logic

## API Used

https://dummyjson.com/products

Data from this API is used to populate animated cards dynamically.

## How to Run Locally

1. Clone the repository
2. Install dependencies

npm install

3. Run development server

npm run dev

4. Open browser

http://localhost:3000

## Deployment

This project is deployed using Vercel.

## Author

Syam Kumar
