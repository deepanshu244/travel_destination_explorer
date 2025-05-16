function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center py-4 bg-gray-100 text-sm text-gray-600">
      © {year} Travel Explorer. All rights reserved.
    </footer>
  );
}

export default Footer;
