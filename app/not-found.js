import Link from "next/link";
import Image from "next/image";
import { Button, Container } from "react-bootstrap";
import Navigation from "./components/Header/navigation";
import Footer from "./components/footer";
import styles from "./not-found.module.css"; // Import CSS module

export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <>
      <Navigation />
      <Container className="d-flex flex-column align-items-center justify-content-center text-center vh-75">
        <Image
          src="/errorImg.png"
          alt="Error 404"
          width={800}
          height={800}
          className={`img-fluid ${styles.errorImage}`} // Apply module CSS class
        />
        <Link href="/" passHref>
          <Button
            style={{ backgroundColor: "#EF5226", borderColor: "#EF5226" }}
            className="mt-1 mb-1"
          >
            Go to Home Page
          </Button>
        </Link>
      </Container>
      <Footer />
    </>
  );
}
