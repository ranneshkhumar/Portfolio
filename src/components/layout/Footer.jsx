export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border mt-20 relative z-10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-secondary font-sans">
          &copy; {new Date().getFullYear()} Rannesh. Designed & Built with passion.
        </p>
      </div>
    </footer>
  );
};
