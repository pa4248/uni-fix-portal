const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Prithv Akash R V M. Built with React & TypeScript.
        </p>
        <p className="text-muted-foreground text-xs mt-2">
          Passionate about creating impactful solutions through code
        </p>
      </div>
    </footer>
  );
};

export default Footer;
