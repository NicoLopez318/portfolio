import Link from "next/link";
import"./globals.css";

export default function Home() {
return (
  <html lang="en">
    <body>
      <main>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/skills">Skills</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </main>
    </body>
  </html>
)
}