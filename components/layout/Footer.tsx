const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 text-sm py-8 border-t">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-between md:flex-row">
        <p className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} AirStay. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Sitemap</a>
          <a href="#" className="hover:underline">Company Details</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;