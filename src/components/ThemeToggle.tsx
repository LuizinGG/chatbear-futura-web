
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // On mount, check for the user's preferred color scheme
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setTheme(isDarkMode ? "dark" : "light");
  }, []);

  // Toggle the theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} className="transition-all">
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-gray-800 hover:text-chatbear-green-600" />
      ) : (
        <Sun className="h-5 w-5 text-gray-100 hover:text-chatbear-green-300" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
