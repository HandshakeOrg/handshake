import styles from "./Landing.module.css";

function Landing() {
  return <main className={styles.main}></main>;
}

export default Landing;

// import Link from "next/link"
// import { Input } from "@/components/ui/input"
// import { Select } from "@/components/ui/select"
// import { Button } from "@/components/ui/button"
// import { CardContent, Card } from "@/components/ui/card"
// import { Textarea } from "@/components/ui/textarea"

// export default function Component() {
//   return (
//     <div className="flex flex-col min-h-[100dvh]">
//       <header className="px-4 lg:px-6 py-4 lg:py-8 flex items-center">
//         <div className="flex items-center space-x-4">
//           <Link className="flex items-center space-x-2" href="#">
//             <BriefcaseIcon className="h-6 w-6" />
//             <span className="font-bold text-2xl tracking-tighter sm:text-3xl">Classifieds</span>
//           </Link>
//         </div>
//         <nav className="ml-auto flex gap-4 sm:gap-6 lg:gap-8">
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
//             Real Estate
//           </Link>
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
//             Jobs
//           </Link>
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
//             Vehicles
//           </Link>
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
//             Electronics
//           </Link>
//         </nav>
//       </header>
//       <main className="flex-1">
//         <section className="w-full py-6 md:py-12 xl:py-16 bg-gray-100 dark:bg-gray-800">
//           <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 text-center">
//             <div className="space-y-2">
//               <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
//                 Find what you're looking for
//               </h1>
//               <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//                 The best place to find your next adventure. From job postings to real estate listings, we've got you
//                 covered.
//               </p>
//             </div>
//             <div className="mx-auto max-w-sm space-y-2">
//               <form className="flex flex-col gap-2 md:flex-row md:gap-4 lg:gap-2">
//                 <Input className="max-w-md" placeholder="Enter a keyword" type="text" />
//                 <Select className="max-w-xs">
//                   <option value="all">All Categories</option>
//                   <option value="real-estate">Real Estate</option>
//                   <option value="jobs">Jobs</option>
//                   <option value="vehicles">Vehicles</option>
//                   <option value="electronics">Electronics</option>
//                 </Select>
//                 <Button type="submit">Search</Button>
//               </form>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-6 md:py-12 lg:py-16">
//           <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_700px]">
//             <div className="space-y-2">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Real Estate</h2>
//               <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//                 Find your dream home with our real estate listings. Whether you're looking for a cozy apartment or a
//                 spacious house, we've got the perfect property for you.
//               </p>
//             </div>
//             <Card>
//               <img
//                 alt="Real Estate"
//                 className="aspect-video overflow-hidden rounded-t-lg object-cover object-center"
//                 height="400"
//                 src="/placeholder.svg"
//                 width="700"
//               />
//               <CardContent className="p-6 md:p-8">
//                 <div className="grid gap-4">
//                   <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Beautiful Condo with Ocean View</h3>
//                   <p className="text-4xl font-bold">$1,200,000</p>
//                   <p className="text-gray-500 dark:text-gray-400">
//                     Stunning 2-bedroom condo with panoramic ocean views. Modern kitchen, spacious living area, and
//                     access to building amenities.
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </section>
//         <section className="w-full py-6 md:py-12 lg:py-16 bg-gray-100 dark:bg-gray-800">
//           <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_700px]">
//             <Card>
//               <img
//                 alt="Jobs"
//                 className="aspect-video overflow-hidden rounded-t-lg object-cover object-center"
//                 height="400"
//                 src="/placeholder.svg"
//                 width="700"
//               />
//               <CardContent className="p-6 md:p-8">
//                 <div className="grid gap-4">
//                   <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Senior Software Engineer</h3>
//                   <p className="text-gray-500 dark:text-gray-400">
//                     Acme Corporation is hiring a Senior Software Engineer to join our dynamic team. The ideal candidate
//                     is passionate about technology, has experience in full-stack web development, and is ready to take
//                     on new challenges.
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//             <div className="space-y-2">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Jobs</h2>
//               <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//                 Browse our job listings to find your next career opportunity. From entry-level positions to executive
//                 roles, we've got jobs in every industry.
//               </p>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-6 md:py-12 lg:py-16">
//           <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_700px]">
//             <div className="space-y-2">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Vehicles</h2>
//               <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//                 Find your perfect ride with our vehicle listings. Whether you're in the market for a sleek sedan, a
//                 rugged SUV, or a speedy sports car, we've got the wheels you've been dreaming of.
//               </p>
//             </div>
//             <Card>
//               <img
//                 alt="Vehicles"
//                 className="aspect-video overflow-hidden rounded-t-lg object-cover object-center"
//                 height="400"
//                 src="/placeholder.svg"
//                 width="700"
//               />
//               <CardContent className="p-6 md:p-8">
//                 <div className="grid gap-4">
//                   <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">2019 BMW 3 Series</h3>
//                   <p className="text-4xl font-bold">$35,000</p>
//                   <p className="text-gray-500 dark:text-gray-400">
//                     Sleek and stylish, this 2019 BMW 3 Series is the perfect combination of luxury and performance. With
//                     its state-of-the-art features and comfortable interior, you'll enjoy every drive.
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </section>
//         <section className="w-full py-6 md:py-12 lg:py-16 bg-gray-100 dark:bg-gray-800">
//           <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_700px]">
//             <Card>
//               <img
//                 alt="Electronics"
//                 className="aspect-video overflow-hidden rounded-t-lg object-cover object-center"
//                 height="400"
//                 src="/placeholder.svg"
//                 width="700"
//               />
//               <CardContent className="p-6 md:p-8">
//                 <div className="grid gap-4">
//                   <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Apple iPhone 13</h3>
//                   <p className="text-4xl font-bold">$799</p>
//                   <p className="text-gray-500 dark:text-gray-400">
//                     The iPhone 13 features a stunning Super Retina XDR display, the powerful A15 Bionic chip, and
//                     advanced dual-camera system. It's designed to impress.
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//             <div className="space-y-2">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Electronics</h2>
//               <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//                 Discover the latest gadgets and tech innovations in our electronics section. From smartphones to smart
//                 home devices, we've got the gear to keep you connected and entertained.
//               </p>
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-6 md:py-12 lg:py-16 border-t">
//           <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_700px]">
//             <div className="space-y-2">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
//               <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//                 Have a question? Need assistance? Contact our customer service team for help with your classified ads
//                 experience.
//               </p>
//             </div>
//             <div className="mx-auto max-w-[400px] space-y-4">
//               <form className="grid gap-4">
//                 <Input placeholder="Name" type="text" />
//                 <Input placeholder="Email" type="email" />
//                 <Textarea placeholder="Message" />
//                 <Button type="submit">Submit</Button>
//               </form>
//             </div>
//           </div>
//         </section>
//       </main>
//       <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
//         <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Classifieds. All rights reserved.</p>
//         <nav className="sm:ml-auto flex gap-4 sm:gap-6">
//           <Link className="text-xs hover:underline underline-offset-4" href="#">
//             Terms of Service
//           </Link>
//           <Link className="text-xs hover:underline underline-offset-4" href="#">
//             Privacy
//           </Link>
//         </nav>
//       </footer>
//     </div>
//   )
// }

// function BriefcaseIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
//       <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
//     </svg>
//   )
// }
