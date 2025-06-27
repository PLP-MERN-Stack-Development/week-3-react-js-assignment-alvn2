const Footer = () => {
  return (
    <footer className="bg-primary dark:bg-dark-bg shadow-lg mt-8">
      <div className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="flex justify-center gap-6 mb-2">
          <a href="#" className="hover:text-secondary transition-colors duration-200">About</a>
          <a href="#" className="hover:text-secondary transition-colors duration-200">Contact</a>
          <a href="#" className="hover:text-secondary transition-colors duration-200">Privacy</a>
        </div>
        <p>© {new Date().getFullYear()}Task Manager. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;