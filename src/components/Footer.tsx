
export function Footer() {
  return (
    <footer className="bottom-0 w-full bg-background z-50 py-8 border-t-2 border-border">
      <div className="container mx-auto px-4">
        <div className="relative flex justify-center items-center">
          <div className="text-sm text-foreground">
            © {new Date().getFullYear()} Velocity Edge. All rights reserved.
          </div>

          <div className="absolute right-0 flex items-center gap-4">
            <a
              href="https://twitter.com/code_kartik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-[#1DA1F2] transition-colors duration-200"
              aria-label="Follow on Twitter"
            >
            
              
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}