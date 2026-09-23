import type { Metadata } from "next";
import { Suspense } from "react";
import "./styles.css";
import SignalDockAnalytics from "./SignalDockAnalytics";

export const metadata: Metadata = { title: "Field Day Labs — Built for the next chapter", description: "A home for independent products built to make everyday life more expansive." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><Suspense fallback={null}><SignalDockAnalytics /></Suspense>{children}</body></html>; }
