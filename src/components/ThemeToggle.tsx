import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    
    if (initialTheme) {
      setTheme(initialTheme);
      if (initialTheme === "light") {
        root.classList.remove("dark");
        root.classList.add("light");
      } else {
        root.classList.add("dark");
        root.classList.remove("light");
      }
    } else {
      // Default to dark mode
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    const newTheme = theme === "dark" ? "light" : "dark";
    
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    
    if (newTheme === "light") {
      root.classList.remove("dark");
      root.classList.add("light");
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="relative h-12 w-12 md:h-14 md:w-14 rounded-full border-2 border-primary/30 bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary transition-all duration-300 shadow-lg hover:shadow-[var(--shadow-glow)]"
      aria-label="Toggle theme"
    >
      <Sun className="h-6 w-6 md:h-7 md:w-7 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 text-primary absolute inset-0 m-auto" />
      <Moon className="h-6 w-6 md:h-7 md:w-7 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 text-primary absolute inset-0 m-auto" />
    </Button>
  );
};

export default ThemeToggle;
